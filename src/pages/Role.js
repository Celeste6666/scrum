import Basis from "@/components/general/Basis";
import BtnNextText from "../components/general/BtnNextText";
import PO from "@/assets/intro/PO.png";
import SM from "@/assets/intro/SM.png";
import DT1 from "@/assets/intro/DT1.png";
import DT2 from "@/assets/intro/DT2.png";

function Role() {
  return (
      <Basis role={PO} roleAlt="PO" pattern="bg-base-pattern-C" next="/backlog">
        <h4 className="card_body card_title py-2.5 mb-5">角色介紹</h4>
        <div className="ml-8">
          <p className="text-primary-active mb-2">PO 滾滾</p>
          <p className="bg-white p-6 rounded-xl"><span className="text-primary-hover">Product Owner</span>（產品負責人）代表客戶參與開發流程，確保開發團隊的產品符合客戶需求。
我會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順，對齊產品目標，最後排出產品的代辦清單。 </p>
        </div>
        <BtnNextText next="/backlog" />
      </Basis>
  )
}

export default Role