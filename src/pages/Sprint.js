import { useMatch, Outlet } from 'react-router-dom';
import Basis from '@/components/general/Basis';
import BtnNextText from '../components/general/BtnNextText';
import PO from '@/assets/intro/PO.png';
import Confluence from "@/assets/confluence-logo.png";
function Sprint() {
  return (
    <>
      {useMatch('/sprint') ? (
        <Basis role={PO} roleAlt="PO" pattern="bg-base-pattern-B" next="/role">
          <h4 className="card_body card_title py-2.5 mb-5">短衝 (Sprint)</h4>
          <p className="bg-white p-6 ml-8 mr-20 rounded-xl">
            等等，是不是還沒有向你介紹到<span className="text-primary-hover">短衝(Sprint)</span>!
            <br />
            Sprint是一個短衝，開發團隊會在這期間執行開發。在這段期間內，開發團隊舉辦
            <span className="text-primary-hover">每日站立會議(Daily Scrum)</span>
            ，追蹤成員間的工作狀況。 <br />
            <br />
            除了每日站立會議，在Sprint的結束也會包
            <span className="text-primary-hover">
              含短衝檢視會議(Sprint Review)、短衝自省會議(Sprint Retrospective)
            </span>
            。<br />
            <br />
            在這裡我們推薦使用<span className="text-primary-hover">
              Confluence
            </span>軟體做紀錄。
          </p>
        <div className="w-full px-10 flex justify-between items-center">
          <img alt="Confluence" src={Confluence} />
          <BtnNextText next="/sprint/explanation" />
        </div>
        </Basis>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default Sprint;
