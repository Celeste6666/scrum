import { useId, useState } from 'react';
import GameBasis from '@/components/general/GameBasis';
import BtnChallengeAccept from '@/components/general/BtnChallengeAccept';
import styles from './BacklogGame.module.css';

function BacklogGame() {
  const [btnContent] = useState([
    {
      id: useId(),
      order: 'order-1',
      class: `bg-burger-meat active:burger-meat-active food ${styles.meat}`,
      parentClass: '',
      content: `會員系統 (登入、註冊、權限管理)`,
    },
    {
      id: useId(),
      order: 'order-3',
      class: `bg-burger-lettuce active:burger-lettuce-active food ${styles.lettuce}`,
      parentClass: 'ml-20',
      content: `應徵者的線上履歷編輯器`,
    },
    {
      id: useId(),
      order: 'order-2',
      class: `bg-burger-cheese active:burger-cheese-active food ${styles.cheese}`,
      parentClass: '',
      content: (
        <span>
          前台職缺列表
          <br />
          <span className="text-caption">(職缺詳細內容、點選可發送應徵意願)</span>
        </span>
      ),
    },
    {
      id: useId(),
      order: 'order-4',
      class: `bg-burger-tomato active:burger-tomato-active food ${styles.tomato}`,
      parentClass: 'ml-20',
      content: (
        <span>
          後台職缺管理功能
          <br />
          <span className="text-caption">(資訊上架、下架、顯示應徵者資料)</span>
        </span>
      ),
    },
  ]);

  const [dragSource, setDragSource] = useState(null);

  const [dragTarget, setDragTarget] = useState([]);

  const dragstart_handler = (e) => {
    // DataTransfer.effectAllowed 属性指定为拖动源设置所需的拖动效果，应该在dragstart事件中设置此属性
    e.dataTransfer.effectAllowed = 'move';
    setDragSource(e.target);
  };

  const dragover_handler = (e) => {
    // 瀏覽器預設是不能在拖曳後進行放置，所以必須取消預設行為
    e.preventDefault();
    // DataTransfer.dropEffect 属性控制在拖放操作中给用户的反馈
    // 最后一次 dragenter 或 dragover 事件后 dropEffect 的值即為 drop 和 dragend 事件，dropEffect 会被设置为想要得到的值
    // dropEffect 是“move”，那么被拖拽的数据会从源中移除。
    e.dataTransfer.dropEffect = 'move';
  };
  const drop_handler = (e) => {
    // 瀏覽器預設是不能在拖曳後進行放置，所以必須取消預設行為
    e.preventDefault();
    if (e.target.dataset.order === dragSource.dataset.order) {
      e.target.appendChild(dragSource);
      setDragTarget([...dragTarget, dragSource.dataset.order]);
    }
  };

  return (
    <GameBasis>
      {/* title */}
      <h4 className="text-h4 card_body text-center text-primary-active py-2.5 mb-5">
        產品代辦清單 (Product Backlog)
      </h4>
      {/* game components */}
      <div className="grid grid-cols-2 gap-36 border rounded-xl py-5 px-16">
        {/* game component left */}
        <div className="flex flex-col justify-between items-center">
          <h6 className="text-h6 text-primary-active mb-5">「人才招募系統」內容物</h6>
          {btnContent.map((item) => (
            <div
              className={
                'w-full h-12 border border-dashed border-primary-disabled my-0.5 rounded-lg ' +
                item.parentClass
              }
              key={item.id}
            >
              <button
                draggable="true"
                data-order={item.id}
                className={item.class}
                onDragStart={(e) => dragstart_handler(e)}
              >
                {item.content}
              </button>
            </div>
          ))}
        </div>
        {/* game component right */}
        <div className="flex flex-col justify-between items-center">
          <h6 className="text-h6 text-primary-active mb-5">產品待辦清單（Product Backlog）</h6>
          <div className="bg-burger-top bg-cover py-3.5 priority order-0">優先度高</div>
          {btnContent.map((item) => (
            <div
              className={
                'w-full h-12 border border-dashed border-primary-disabled my-0.5 rounded-lg ' +
                item.order
              }
              key={item.order}
              data-order={item.id}
              onDrop={(e) => drop_handler(e)}
              onDragOver={(e) => dragover_handler(e)}
            ></div>
          ))}
          <div className="bg-burger-bottom bg-contain py-2 priority order-5">優先度低</div>
        </div>
      </div>
      {/* note */}
      <p className="w-7/12 align-middle bg-white p-2 rounded-xl text-caption leading-5">
        我們收到客戶的需求提示，想要一個大漢堡，一定要有
        <span className="text-primary">肉、起司、生菜和番茄</span>。
        請依照產品需求，排放到產品待辦清單並調整
        <span className="text-primary">優先順序</span>。
      </p>
      <BtnChallengeAccept text="完成" next="/planning" addClass={dragTarget.length !== 4 ? "disabled ml-auto" : "ml-auto"} />
    </GameBasis>
  );
}

export default BacklogGame;
