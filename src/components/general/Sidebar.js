import { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { changePage } from '@/redux/sidebarSlice';
function Sidebar() {
  const TOTAL_PAGES = useSelector((state) => state.sidebarSlice.total_pages);
  const dots = Array(TOTAL_PAGES).fill(0, 0, TOTAL_PAGES);

  const dispatch = useDispatch();
  const routerLoader = useLoaderData();
  console.log(routerLoader)
  const CUR_PAGE = useSelector((state) => state.sidebarSlice.current_page);
  useEffect(() => {
    dispatch(changePage(routerLoader));
  }, []);
  return (
    <div className="absolute top-1/2 right-5 z-10 -translate-y-1/2 flex flex-col">
      {dots.map((i, index) => (
        <span
          key={uuid()}
          className={
            'inline-block w-3 h-3 my-1 rounded-full ' +
            (index + 1 === CUR_PAGE ? 'bg-primary' : 'bg-[#D9D9D9]')
          }
        ></span>
      ))}
    </div>
  );
}

export default Sidebar;
