import { useId, useState } from 'react';
import GameBasis from '@/components/general/GameBasis';
import BtnChallengeAccept from '@/components/general/BtnChallengeAccept';
import Scrum from '@/assets/Scrum.png';
import {dragstart_handler, dragover_handler, drop_handler, dragend_handler} from "@/utils/drag";

function SprintGame() {
  const [scrumStep] = useState([
    {
      id: useId(),
      content: '短衝檢視會議 (Sprint Review)',
      style: 'relative left-[347px] top-32',
    },
    {
      id: useId(),
      content: '每日站立會議 (Daily Scrum)',
      style: 'relative left-16 top-6',
    },
    {
      id: useId(),
      content: '短衝自省會議 (Sprint Retrospective)',
      style: 'relative left-5 top-48',
    },
  ]);
  const [dragSource, setDragSource] = useState(null);

    const [dragTarget, setDragTarget] = useState([]);

  return (
    <GameBasis>
      {/* title */}
      <h4 className="card_body card_title py-2.5 mb-3">短衝 (Sprint)</h4>
      {/* scrum 流程圖 */}
      <div className="w-full border rounded-xl pt-10 pb-5 px-10 relative">
        <img src={Scrum} alt="Scrum" className="w-full" />
        {/* blank */}
        <div className="w-full h-full grid grid-cols-3 gap-2 py-3.5 px-10 absolute top-0 left-0">
          {scrumStep.map(({ id, style }) => (
            <div className={'drag-border w-full blank ' + style} key={id} data-order={id}
            onDragOver={e=>dragover_handler(e)}
            onDrop={(e)=>drop_handler(e, dragSource, dragTarget, setDragTarget)}></div>
          ))}
        </div>
        {/* options */}
        <div className="grid grid-cols-3 gap-3 mt-10">
          {scrumStep.map(({ id, content }) => (
            <div className="drag-border" key={id}>
              <button
                draggable="true"
                className="btn text-primary-active border border-primary text-caption py-3.5 scrum-drag"
                data-order={id}
                onDragStart={e=> dragstart_handler(e, setDragSource)}
                onDragEnd={e=>dragend_handler(e, dragTarget, setDragTarget)}
              >
                {content}
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* note */}
      <p className="w-7/12 align-middle bg-white p-2 rounded-xl text-caption leading-5 ml-2.5">
        換你試試看! 在這經典的 <span className="text-primary-hover">Scrum流程圖</span>{' '}
        中，有三個重要的會議會執行。 嘗試安排他們的名字到正確的位置去吧!
      </p>
      {/* complete */}
      <BtnChallengeAccept text="完成" next="/retrospective" addClass="ml-auto" />
    </GameBasis>
  );
}

export default SprintGame;
