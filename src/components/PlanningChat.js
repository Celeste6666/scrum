import { useId, useState } from 'react';
import GameBasis from '@/components/general/GameBasis';
import BtnChallengeAccept from '@/components/general/BtnChallengeAccept';
import PO from '@/assets/meeting/PO.png';
import SM from '@/assets/meeting/SM.png';
import DT1 from '@/assets/meeting/DT1.png';
import DT2 from '@/assets/meeting/DT2.png';
import Jira from '@/assets/jira-logo.png';
import styles from '@/components/PlanningChat.module.css';
const { scrollbar } = styles;
function PlanningChat() {
  const [contents] = useState([
    {
      id: useId(),
      person: PO,
      position: 'PO 滾滾',
      text: '今天有新人加入我們，請大家多多照顧哦!',
    },
    {
      id: useId(),
      person: PO,
      position: 'PO 滾滾',
      text: (
        <span>
          短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完哪些工作事項來達到商業需求，列出
          <span className="text-primary-hover">短衝待辦清單(Sprint Backlog)</span>
          ，並由開發團隊在接下來的產品開發期裡執行。
        </span>
      ),
    },
    {
      id: useId(),
      person: SM,
      position: 'SM 瑞瑞',
      text: '嗨嗨你是新來的前端吧！我是這次的Scrum Master 瑞瑞，我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議，提升隊成員對 Scrum 瞭解。',
    },
    {
      id: useId(),
      person: SM,
      position: 'SM 瑞瑞',
      text: (
        <>
          我們團隊<span className="text-primary-hover">一次Sprint是兩周的時間</span>
          依照我的觀察，目前可負擔的<span className="text-primary-hover">點數(Sprint Point)</span>
          大約是<span className="text-primary-hover">20點</span>。
        </>
      ),
    },
    {
      id: useId(),
      person: DT1,
      position: 'DT 軟軟',
      text: (
        <>
          新來的，你應該不知道點數是什麼意思吧！哈哈~我來跟你介紹一下吧~
          <br />
          <span className="text-primary-hover">Sprint Point </span>
          目的是為了衡量速度，是用大概花費的時間預估出的相對點數。
        </>
      ),
    },
    {
      id: useId(),
      person: DT2,
      position: 'DT 方方',
      text: '沒錯，如軟軟說的，我這邊已經把剛剛討論好的點數標上去囉！你來練習把任務排到短衝待辦清單吧！',
    },
    {
      id: useId(),
      person: SM,
      position: 'SM 瑞瑞',
      text: (
        <>
          我們平常管理任務是使用<span className="text-primary-hover"> Jira </span>
          這套軟體，你有時間記得先去註冊和熟悉唷！
        </>
      ),
    },
  ]);

  const [btnDisabled, setBtnDisabled] = useState(true);

  const scrollContent = (e) => {
    if(e.target.scrollTop >= 415) {
      setBtnDisabled(false)
    }
  }
  return (
    <GameBasis>
      {/* title */}
      <h4 className="card_body card_title py-2.5 mb-5">短衝規劃會議 (Sprint Planning)</h4>
      {/*chat components */}
      <div
        className={
          'w-full border rounded-xl h-96 py-3 px-10 rounded-xl overflow-y-scroll ' + scrollbar
        }
        onScroll={e =>scrollContent(e)}
      >
        {contents.map(({ id, person, position, text }) => (
          <div className="flex items-center mt-3" key={id}>
            <div>
              <img src={person} alt={position} className="w-16" />
              <p className="text-caption text-center text-primary-active">{position}</p>
            </div>
            <p className="bg-white ml-5 py-8 px-4 rounded-xl text-caption leading-5">{text}</p>
          </div>
        ))}
      </div>
      {/* photo */}
      <img src={Jira} alt="Jira" className="inline-block" />
      {/* button */}
      <BtnChallengeAccept text="接受挑戰" next="/planning/point" addClass={"ml-auto "+(btnDisabled? "disabled" : "")} />
    </GameBasis>
  );
}

export default PlanningChat;
