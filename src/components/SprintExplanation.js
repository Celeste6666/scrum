import { useId, useState } from 'react';
import GameBasis from '@/components/general/GameBasis';
import BtnChallengeAccept from '@/components/general/BtnChallengeAccept';
import Confluence from '@/assets/confluence-logo.png';

function SprintExplanation() {
  const [keywords] = useState([
    {
      id: useId(),
      title: (
        <>
          每日站立會議
          <br />
          (Daily Scrum)
        </>
      ),
      borderColor: 'border-primary',
      content: (
        <>
          在Sprint當中每天由SM主持會議，以15分鐘為限制。 在會議中需報告三件事 :
          <ul className="list-disc list-inside">
            <li>昨天為團隊的短衝目標(Sprint Goal)做了那些進度</li>
            <li>今天我會如何準備來幫助團隊達到短衝目標</li>
            <li>過程中有遇到什麼問題、難題</li>
          </ul>
          透過團隊分享，追蹤大家的工作狀況。
        </>
      ),
    },
    {
      id: useId(),
      title: (
        <>
          短衝檢視會議
          <br />
          (Sprint Review)
        </>
      ),
      borderColor: 'border-role-sm',
      content: <>用來檢視該次短衝增量的成果，以蒐集相關的回饋數據或意見。</>,
    },
    {
      id: useId(),
      title: (
        <>
          短衝自省會議
          <br />
          (Sprint Retrospective)
        </>
      ),
      borderColor: 'border-role-po',
      content: (
        <>
          團隊在自省會議裡, 會共同回顧該短衝歷程發生的事情。
          <ul className="list-disc list-inside">
            <li>好的地方</li>
            <li>可以改進的地方</li>
            <li>如何維持我們已有的成功經驗</li>
          </ul>
          優化工作流程、讓團隊有變得更好的機會。推薦工具Confluence。
        </>
      ),
    },
  ]);
  return (
    <GameBasis addClass={"bg-base-pattern-B"}>
      {/* title */}
      <h4 className="card_body card_title py-2.5 mb-5">短衝規劃會議 (Sprint Planning)</h4>
      {/*explanation components */}
      <div className="w-full grid grid-cols-3 gap-10">
        {keywords.map(({id, title, borderColor, content}) => (<div className="flex flex-col items-center" key={id}>
          <h6 className={"w-full text-h6 card_title bg-white border rounded-xl py-3.5 " + borderColor}>
            {title}
          </h6>
          <div className="p-5 text-primary-active leading-normal">
            {content}
          </div>
        </div>))}

      </div>
      {/* photo */}
      <img src={Confluence} alt="Confluence" className="inline-block" />
      {/* button */}
      <BtnChallengeAccept text="接受挑戰" next="/sprint/game" addClass="ml-auto" />
    </GameBasis>
  );
}

export default SprintExplanation;
