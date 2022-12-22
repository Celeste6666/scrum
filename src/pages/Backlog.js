import { useMatch } from 'react-router-dom';
import BacklogGame from '@/components/BacklogGame';
import Basis from '@/components/general/Basis';
import BtnChallengeAccept from '@/components/general/BtnChallengeAccept';
import PO from '@/assets/intro/PO.png';
function Backlog() {
  return (
    <>
      {useMatch('/backlog/game') ? <BacklogGame/> : (
        <Basis role={PO} roleAlt="PO" pattern="bg-Basis-pattern-C">
          <h4 className="card_body card_title py-2.5 mb-5">產品代辦清單 (Product Backlog)</h4>
          <div className="ml-8">
            <p className="bg-white p-5 rounded-xl">
              相信你已經了解我們的團隊了，請你協助我們一起完成「人才招募系統」專案吧!
              待會要開短衝規劃會議，得先把
              <span className="text-primary">產品待辦清單(Product Backlog)</span>給整理出來才行。
              我們公司也推薦使用<span className="text-primary">Jira</span>來做任務管理喔。
            </p>
          </div>
          <BtnChallengeAccept next="/backlog/game" text="接受挑戰" addClass="absolute bottom-8 right-8" />
        </Basis>
      )}
    </>
  );
}

export default Backlog;
