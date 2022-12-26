import { useMatch, Outlet } from "react-router-dom";
import Basis from '@/components/general/Basis';
import BtnChallengeAccept from '@/components/general/BtnChallengeAccept';
import PO from '@/assets/intro/PO.png';
import Confluence from "@/assets/confluence-logo.png";
function Retrospective() {
  return (
    <>
      {
        useMatch("/retrospective") ?
          <Basis role={PO} roleAlt="PO" pattern="bg-base-pattern-B">
          <h4 className="card_body card_title py-2.5 mb-5">短衝規劃會議 (Sprint Planning)</h4>
          <div className="ml-8">
            <p className="bg-white p-5 rounded-xl">
              今天剛好是開發B組的<span className="text-primary-hover">短衝自省會議 (Sprint Retrospective)</span>，我們都稱為<span className="text-primary-hover">Retro</span>，帶你見識一下，看看Retro都該做些什麼吧~
我們會在會議裡請團隊成員提出哪些是做得好的地方、哪些可以繼續改善的地方？並記錄再<span className="text-primary-hover">Confluence</span>中。
            </p>
          </div>
          <div className="w-full px-10 flex justify-between items-center">
          <img alt="Confluence" src={Confluence} />
          <BtnChallengeAccept next="/retrospective/chat" text="加入會議" />
        </div>
        </Basis> :
        <Outlet/>
      }
    </>
  );
}

export default Retrospective