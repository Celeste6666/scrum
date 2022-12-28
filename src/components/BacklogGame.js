import { useState } from 'react';
import { useSelector } from 'react-redux';
import GameBasis from '@/components/general/GameBasis';
import BtnChallengeAccept from '@/components/general/BtnChallengeAccept';
import {dragstart_handler, dragover_handler, drop_handler, dragend_handler} from "@/utils/drag";

function BacklogGame() {
    const burgerContents = useSelector((state) => state.burgerSlice);

  const [dragSource, setDragSource] = useState(null);

  const [dragTargetList, setDragTargetList] = useState([]);

  return (
    <GameBasis>
      {/* title */}
      <h4 className="card_body card_title py-2.5 mb-3">
        產品代辦清單 (Product Backlog)
      </h4>
      {/* game components */}
      <div className="w-full grid grid-cols-2 gap-36 border rounded-xl py-2 px-14">
        {/* game component left */}
        <div className="flex flex-col justify-between items-center">
          <h6 className="text-h6 text-primary-active mb-5">「人才招募系統」內容物</h6>
          {burgerContents.map(({parentClass, id, style, content}) => (
            <div
              className={
                'drag-border w-full ' +
                parentClass
              }
              key={id}
            >
              <button
                draggable="true"
                data-order={id}
                className={style}
                onDragStart={(e) => dragstart_handler(e, setDragSource)}
                onDragEnd={e=>dragend_handler(e, dragTargetList, setDragTargetList)}
              >
                {content}
              </button>
            </div>
          ))}
        </div>
        {/* game component right */}
        <div className="flex flex-col justify-between items-center">
          <h6 className="text-h6 text-primary-active mb-5">產品待辦清單（Product Backlog）</h6>
          <div className="bg-burger-top bg-cover py-3.5 priority order-0">優先度高</div>
          {burgerContents.map(({id, order}) => (
            <div
              className={
                'w-full h-12 border border-dashed border-primary-disabled my-0.5 rounded-lg blank ' +
                order
              }
              key={id}
              data-order={id}
              onDrop={(e) => drop_handler(e, dragSource, dragTargetList, setDragTargetList)}
              onDragOver={(e) => dragover_handler(e)}
            ></div>
          ))}
          <div className="bg-burger-bottom bg-contain py-2 priority order-5">優先度低</div>
        </div>
      </div>
      {/* note */}
      <p className="w-7/12 align-middle bg-white p-2 rounded-xl text-caption leading-5 ml-2.5">
        我們收到客戶的需求提示，想要一個大漢堡，一定要有
        <span className="text-primary-hover">肉、起司、生菜和番茄</span>。
        請依照產品需求，排放到產品待辦清單並調整
        <span className="text-primary-hover">優先順序</span>。
      </p>
      {/* complete */}
      <BtnChallengeAccept text="完成" next="/planning" addClass={dragTargetList.length !== 4 ? "disabled ml-auto" : "ml-auto"} />
    </GameBasis>
  );
}

export default BacklogGame;
