import PO from '@/assets/intro/PO.png';
import Sidebar from '@/components/general/Sidebar';
function GameBasis(props) {
  const { children, addClass } = props;
  return (
    <section className={"card flex-col relative" + (addClass? addClass : "")}>
      {/* title */}
      {children[0]}
      <div className="card_body flex flex-col justify-between items-center px-5 pt-5 pb-2">
        <>
          {/* components */}
          {children[1]}
        </>
        <div className="flex flex-reverse justify-between items-center w-full mt-2">
          {/* photo */}
          {children[2].type !== "img" ? (          <img src={PO} alt="PO" width="55" height="70" className="inline-block" />): ""}
          {children[2]}
          {/* note */}
          {children.length >= 3 ? children[3] : ''}
        </div>
      </div>
      <Sidebar />
    </section>
  );
}

export default GameBasis;
