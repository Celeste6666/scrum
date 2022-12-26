import { useMatch, Outlet } from "react-router-dom";
import Basis from '@/components/general/Basis';
import BtnChallengeAccept from '@/components/general/BtnChallengeAccept';
import PO from '@/assets/intro/PO.png';
function Planning() {
  return (
    <>
      {
        useMatch("/planning") ?
          <Basis role={PO} roleAlt="PO" pattern="bg-base-pattern-B">
          <h4 className="card_body card_title py-2.5 mb-5">短衝規劃會議 (Sprint Planning)</h4>
          <div className="ml-8">
            <p className="bg-white p-5 rounded-xl">
              感謝你把產品待辦清單整理完成，接下來我們要召集 Scrum Master 和開發團隊，共同召開<span className="text-primary">短衝規劃會議 (Sprint Planning)</span>，和我們一起加入會議室吧。

            </p>
          </div>
          <div className="w-full px-10 flex justify-end">
            <BtnChallengeAccept next="/planning/chat" text="加入會議" />
          </div>
        </Basis> :
        <Outlet/>
      }
    </>
  );
}
export default Planning