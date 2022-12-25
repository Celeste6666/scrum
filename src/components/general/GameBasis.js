function GameBasis(props) {
  const { children } = props;
  return (
    <section className="card flex-col ">
      {/* title */}
      {children[0]}
      <div className="card_body flex flex-col justify-between items-center px-5 pt-5 pb-2">
        <>
          {/* game components */}
          {children[1]}
        </>
        <div className="flex justify-between items-center w-full mt-2">

            {/* note */}
            {children[2]}
            {children.length >= 3 ? children[3] : ""}
            {children.length >= 4 ? children[4] : ""}
        </div>
      </div>
    </section>
  );
}

export default GameBasis;
