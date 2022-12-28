import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

import GameBasis from '@/components/general/GameBasis';
import BtnChallengeAccept from '@/components/general/BtnChallengeAccept';
import PAN from '@/assets/food/pan.png';
import { dragstart_handler, dragover_handler, drop_handler } from '@/utils/drag';

function PlanningPoint() {
  const burgerContents = useSelector((state) => state.burgerSlice);
  const [dragSource, setDragSource] = useState(null);
  const [dragTargetList, setDragTargetList] = useState([]);
  const btnDisabled = useMemo(() => {
    let total = 0;
    dragTargetList.forEach((point) => {
      total += parseInt(point);
    });
    if (total > 20 || total <= 0) {
        return true;
      } else {
        return false;
      }
  }, [dragTargetList]);
  return (
    <GameBasis>
      {/* title */}
      <h4 className="card_body card_title py-2.5 mb-3">短衝點數 (Sprint Point)</h4>
      {/* game components */}
      <div className="grid grid-cols-2 gap-32 border rounded-xl py-3.5 pl-20 pr-12">
        {/* game component left */}
        <div className="flex flex-col justify-between items-center">
          <h6 className="text-h6 text-primary-active mb-4">產品待辦清單（Product Backlog）</h6>
          <div className="bg-burger-top bg-cover py-3.5 priority order-0">優先度高</div>
          {burgerContents.map(({ order, id, style, content, point }) => (
            <div
              className={
                'w-full h-12 border border-dashed border-primary-disabled my-0.5 rounded-lg ' +
                order
              }
              key={order}
              onDragOver={(e) => dragover_handler(e)}
              onDrop={(e) => drop_handler(e, dragSource, dragTargetList, setDragTargetList)}
            >
              <button
                draggable="true"
                data-point={point}
                className={style + ' foodAfterEmpty relative'}
                onDragStart={(e) => dragstart_handler(e, setDragSource)}
              >
                <span
                  className={
                    style + ' foodAfterEmpty foodBeforeEmpty w-1/6 h-full absolute -left-16'
                  }
                >
                  {point}
                </span>
                <span>{content}</span>
              </button>
            </div>
          ))}
          <div className="bg-burger-bottom bg-contain py-2 priority order-5">優先度低</div>
        </div>

        {/* game component right */}
        <div className="flex flex-col justify-between items-center">
          <h6 className="text-h6 text-primary-active mb-4">短衝代辦清單</h6>
          <span className="text-primary">限制 20點 / 5人</span>
          {burgerContents.map(({ id, order }) => (
            <div
              className={
                'w-full h-12 border border-dashed border-primary-disabled my-0.5 rounded-lg blank ' +
                order
              }
              key={id}
              onDrop={(e) => drop_handler(e, dragSource, dragTargetList, setDragTargetList)}
              onDragOver={(e) => dragover_handler(e)}
            ></div>
          ))}
          <img src={PAN} alt="pan" className="order-last w-[365px] self-start" />
        </div>
      </div>
      {/* note */}
      <p className="w-7/12 align-middle bg-white p-3 rounded-xl text-caption leading-5 ml-2.5">
        在限制的<span className="text-primary-hover">點數</span>之內，將
        <span className="text-primary-hover">產品清單內的任務移至短衝待辦清單</span>。
        就像是，我們為每個食材訂出烹飪時間，在有限的時間內選擇要烹飪食材。
      </p>
      {/* complete */}
      <BtnChallengeAccept text="完成" next="/sprint" addClass={btnDisabled ? 'disabled' : ''} />
    </GameBasis>
  );
}

export default PlanningPoint;
