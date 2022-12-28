import { useState, useMemo } from 'react';
import { useParams } from "react-router-dom";
import Basis from '@/components/general/Basis';
import BtnNextText from '../components/general/BtnNextText';
import PO from '@/assets/intro/PO.png';
import SM from '@/assets/intro/SM.png';
import DT1 from '@/assets/intro/DT1.png';
import DT2 from '@/assets/intro/DT2.png';

function Role() {
  const [roles] = useState([
    {
      param: 1,
      role: PO,
      roleName: "PO",
      name: (<span className="text-primary-hover">PO 滾滾</span>),
      next: "/role/sm",
      intro: (
        <>
          <span className="text-primary-hover">Product Owner</span>
          （產品負責人）代表客戶參與開發流程，確保開發團隊的產品符合客戶需求。
          我會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順，對齊產品目標，最後排出產品的代辦清單。
        </>
      ),
    },
    {
      param: 2,
      role: SM,
      roleName: "SM",
      name: (<span className="text-role-sm">SM 瑞瑞</span>),
      next: "/role/dt",
      intro: (
        <>
          <span className="text-role-sm">Scrum Master </span>負責確保開發團隊依照 Scrum
          的方式進行產品開發，並排除任何會影響 Scrum 流程的障礙，協助改善開發流程。
          SM不是以「領導者」的姿態帶領專案，而是 Scrum 規則的「執行者」。
        </>
      ),
    },
    {
      param: 3,
      role: DT1,
      role2: DT2,
      roleName: "DT",
      next: "/backlog",
      name: (
        <>
          <span className="text-role-dt mr-2">DT 軟軟</span>
          <span className="text-role-dt2">DT 方方</span>
        </>
      ),
      intro: (
        <>
          <span className="text-role-dt">Development Team </span>
          開發團隊負責開發與交付產品。開發團隊為跨領域團隊，可由設計師、工程師等不同的專業人士所組成。
        </>
      ),
    },
  ]);

  const routerParam = useParams();

  const {intro, name, roleName, role, role2, next} = useMemo(()=> roles.find(r=>routerParam.roleId.toUpperCase()===r.roleName))
  return (
    <Basis role={role} roleAlt={roleName} role2={role2} pattern="bg-base-pattern-C" next="/backlog">
      <h4 className="card_body card_title py-2.5 mb-5">角色介紹</h4>
      <div className="ml-8">
        <p className="text-primary-active mb-2">{name}</p>
        <p className="bg-white p-6 rounded-xl">{intro}</p>
      </div>
      <div className="w-full px-10 flex justify-end items-center">
        <BtnNextText next={next} />
      </div>
    </Basis>
  );
}

export default Role;
