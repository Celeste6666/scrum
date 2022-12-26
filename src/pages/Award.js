import BtnChallengeAccept from '@/components/general/BtnChallengeAccept';
import Badge from '@/assets/badge.png';
import PO from '@/assets/intro/PO.png';
function Award() {
  return (
    <section className="card flex-col bg-base-pattern-C bg-cover">
      <div className="card_body flex flex-col justify-between items-center px-5 pt-16 pb-2">
        <div className="w-5/6 bg-[#d9d9d9] rounded-3xl  mb-8">
          <img src={Badge} alt="獎章" className="mx-auto" />
        </div>
        <div className="flex flex-reverse justify-between items-center w-full mt-2">
          <div>
            {/* photo */}
            <img src={PO} alt="PO" width="55" height="70" className="inline-block" />
            <p className="inline-block align-middle bg-white p-3 rounded-xl text-caption leading-5 ml-2.5">
              恭喜你完成Scrum新手村所有挑戰，獲得漢堡神廚徽章，從今天開始你就是我們Burger資訊的一員了!
            </p>
          </div>
          {/* complete */}
          <BtnChallengeAccept text="獲得徽章" next="/" />
        </div>
      </div>
    </section>
  );
}

export default Award;
