
import PO from '@/assets/intro/PO.png';

function GameBasis(props) {
  const { children } = props;
  return (
    <section className="card flex-col ">
      {/* title */}
      {children[0]}
      <div className="card_body flex flex-col justify-between items-center p-5">
        <>
          {/* game components */}
          {children[1]}
        </>
        <div className="flex justify-start items-center mt-5">
            <img src={PO} alt="PO" width="55" height="70" className="inline-block" />
            {/* note */}
            {children[2]}
            {children[3]}
        </div>
      </div>
    </section>
  );
}

export default GameBasis;
