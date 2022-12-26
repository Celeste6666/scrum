import GameBasis from "@/components/general/GameBasis";
import BtnChallengeAccept from '@/components/general/BtnChallengeAccept';
import PO from '@/assets/meeting/PO.png';
function RetrospectiveChat() {
  return (
    <GameBasis>
      {/* title */}
      <h4 className="card_body card_title py-2.5 mb-5">短衝自省會議 (Sprint Retrospective)</h4>
      {/*chat components */}
            <div className="w-full grid grid-cols-2 gap-36 border rounded-xl py-2 px-14">

            </div>
      {/* photo */}
      <img src={PO} alt="PO" className="inline-block"  width="55" height="70" />
      {/* note */}
      <p className="align-middle bg-white p-2 rounded-xl text-caption leading-5 ml-2.5">換你試試看! 重點在於<span className="text-primary-hover">「正面表述」</span>，選出適合Retro的回饋吧!</p>
      {/* button */}
      <BtnChallengeAccept text="送出" next="/material" addClass="ml-auto" />
    </GameBasis>
  )
}

export default RetrospectiveChat