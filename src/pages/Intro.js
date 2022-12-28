import Basis from "@/components/general/Basis";
import BtnNextText from "../components/general/BtnNextText";
import PO from "@/assets/intro/PO.png";
function Intro() {
  return (
    <Basis role={PO} roleAlt="PO" pattern="bg-base-pattern-B" next="/role">
      <h4 className="card_body card_title py-2.5 mb-5">前導</h4>
      <p className="bg-white p-6 ml-8 mr-20 rounded-xl">Hello，歡迎你加入我們開發Burger組，我是負責這次任務的PO，<span className="text-primary-hover">滾滾</span>。<br />
      接下來將由我為你介紹<span className="text-primary-hover">Scrum的流程與精神</span>，待組成成員介紹完畢後，請您協助我們一起完成我手上得新專案，如此一來便能於更明確地了解實際應用方式。 </p>
      <div className="w-full px-10 flex justify-end items-center">
      <BtnNextText next="/role/po" />
        </div>
    </Basis>
  )
}

export default Intro