import { useState, useId } from 'react';
import GameBasis from '@/components/general/GameBasis';
import BtnChallengeAccept from '@/components/general/BtnChallengeAccept';
import SM from '@/assets/meeting/SM.png';
import styles from '@/components/PlanningChat.module.css';
const { scrollbar } = styles;
function RetrospectiveChat() {
  const [SMContents, setSMContents] = useState([
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
      text: '回答得非常正確! 相信你對Retro有一定的了解了。',
      show: false,
    },
  ]);
  const [answers, setAnswers] = useState([]);
  const [choice, setChoice] = useState([
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
  const [disabled, setDisabled] = useState(true);
  const [currentAns, setCurrentAns] = useState('');
  const select = ({ target }, item) => {
    if (target.dataset.istrue === 'true') {
      target.classList.remove(
        'bg-white',
        'text-primary-active',
        'bg-select-active',
        'shadow-select',
      );
      target.classList.add('bg-primary', 'text-white');
      setDisabled(false);
      setCurrentAns(item);
    } else {
      target.classList.remove('border-primary', 'bg-select-active', 'shadow-select');
      target.classList.add('border-select-error');
    }
  };

  const submit = () => {
    setAnswers([...answers, currentAns]);
    const newSMContents = SMContents.map((item, i) => {
      if (i === answers.length + 1) {
        const newContent = { ...item, show: true };
        return newContent;
      }
      return item;
    });
    setSMContents(newSMContents);
    setDisabled(true);
    const [first, second = []] = choice;
    setChoice([second]);
  };

  return (
    <GameBasis>
      {/* title */}
      <h4 className="card_body card_title py-2.5 mb-5">短衝自省會議 (Sprint Retrospective)</h4>
      {/*chat components */}
      <div className={'w-full h-80 border rounded-xl pt-2 px-5 overflow-y-auto ' + scrollbar}>
        <div className=" grid grid-cols-2 mb-10">
          <div className="flex flex-col">
            {SMContents.map(({ id, text, show }, i) =>
              show ? (
                <div
                  key={id}
                  className={'flex items-center ' + (i === SMContents.length - 1 ? '' : 'mb-14')}
                >
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
              ),
            )}
          </div>
          <div className="flex flex-col">
            {answers.length !== 0 &&
              answers.map(({ text, id }) => (
                <p
                  className="bg-white mt-24 ml-5 py-5 px-4 rounded-xl text-caption leading-5"
                  key={id}
                >
                  {text}
                </p>
              ))}
          </div>
        </div>
        <div className={'grid grid-cols-2 gap-5 ' + (choice[0].length !== 0 ? 'pt-10 pb-3' : '')}>
          {choice[0].length !== 0 &&
            choice[0].map(({ id, text, isTrue }) => (
              <button
                key={id}
                className="btn text-primary-active border border-primary bg-white text-caption py-3.5 hover:shadow-select active:bg-select-active active:shadow-select "
                data-istrue={isTrue}
                onClick={(e) => select(e, { id, text })}
              >
                {text}
              </button>
            ))}
        </div>
      </div>
      {/* note */}
      <p className="align-middle bg-white p-3 rounded-xl text-caption leading-5 ml-2.5">
        換你試試看! 重點在於<span className="text-primary-hover">「正面表述」</span>
        ，選出適合Retro的回饋吧!
      </p>
      {/* button */}
      {choice[0].length !== 0 ? (
        <button className={disabled ? 'btn-bg disabled' : 'btn-bg'} onClick={submit}>
          送出
        </button>
      ) : (
        <BtnChallengeAccept text="完成" next="/material" addClass="ml-auto" />
      )}
    </GameBasis>
  );
}

export default RetrospectiveChat;
