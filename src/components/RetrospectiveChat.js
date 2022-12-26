import { useState } from 'react';
import GameBasis from '@/components/general/GameBasis';
import BtnChallengeAccept from '@/components/general/BtnChallengeAccept';
import SM from '@/assets/meeting/SM.png';
import { useId } from 'react';
function RetrospectiveChat() {
  const [SMContents] = useState([
    {
      id: useId(),
      text: '我們有那些做得好的地方，還迎大家提出來。',
      show: true,
    },
    {
      id: useId(),
      text: '那我們還有哪些地方可以做的更好呢?',
      show: false,
    },
    {
      id: useId(),
      text: '那我們還有哪些地方可以做的更好呢?',
      show: false,
    },
    {
      id: useId(),
      text: '回答得非常正確! 相信你對Retro有一定的了解了。',
      show: false,
    },
  ]);
  const [choice] = useState([
    [
      {
        id: useId(),
        text: '這次我幫很多人救火耶!',
        isTrue: false,
      },
      {
        id: useId(),
        text: '大家在開發上都會互相cover，任務都在時間內完成。',
        isTrue: true,
      },
    ],
    [
      {
        id: useId(),
        text: '可以記錄這次開發時間，讓預估團隊點數更精準。',
        isTrue: true,
      },
      {
        id: useId(),
        text: '開發時間預估不準確，請後端改進避免delay到我。',
        isTrue: false,
      },
    ],
  ]);
  return (
    <GameBasis>
      {/* title */}
      <h4 className="card_body card_title py-2.5 mb-5">短衝自省會議 (Sprint Retrospective)</h4>
      {/*chat components */}
      <div className="w-full border rounded-xl py-2 px-5">
        <div className="grid grid-cols-2">
          <div>
            {SMContents.map(({ id, text, show }) =>
              show ? (
                <div key={id} className="flex items-center">
                  <div>
                    <img src={SM} alt="SM" className="w-16" />
                    <p className="text-caption text-center text-primary-active">SM 瑞瑞</p>
                  </div>
                  <p className="bg-white ml-5 py-5 px-4 rounded-xl text-caption leading-5">
                    {text}
                  </p>
                </div>
              ) : (
                ''
              )
            )}
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-10">
          {choice[0].map(({id, text, isTrue}) =>
            <button
              key={id}
              className="btn text-primary-active border border-primary bg-white text-caption py-3.5 hover:bg-primary-hover hover:text-white active:bg-primary-active active:text-white"
              data-answer={isTrue}
            >
              {text}
            </button>
          )}
        </div>
      </div>
      {/* note */}
      <p className="align-middle bg-white p-3 rounded-xl text-caption leading-5 ml-2.5">
        換你試試看! 重點在於<span className="text-primary-hover">「正面表述」</span>
        ，選出適合Retro的回饋吧!
      </p>
      {/* button */}
      <BtnChallengeAccept text="送出" next="/material" addClass="ml-auto" />
    </GameBasis>
  );
}

export default RetrospectiveChat;
