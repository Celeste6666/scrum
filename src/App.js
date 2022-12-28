import { useMatch } from 'react-router-dom';
import BtnChallengeAccept from './components/general/BtnChallengeAccept';
import Confluence from '@/assets/confluence-logo.png';
import Jira from '@/assets/jira-logo.png';
function App() {
  const isTheEnd = useMatch('/clear');
  return (
    <main className="full-screen bg-base-pattern-A">
      <div className="card">
        <div className="card_body text-center pt-12 pb-8 text-primary-active">
          <h1 className="text-h1 font-bold">{isTheEnd ? '恭喜通過Scrum新手村' : 'Scrum新手村'}</h1>
          <p className="my-16 text-h6">
            {isTheEnd ? (
              <>
                恭喜你成為Burger資訊的一員!
                <br />
                若還有不熟悉的地方，也歡迎重新挑戰，幫助自己更加熟悉Scrum。
              </>
            ) : (
              <>
                嗨囉! 歡迎加入Burger資訊。
                <br />
                在正式加入專案開發之前，需要請你先了解Scrum的流程與精神。
                <br />
                請接受挑戰任務，成功通過Scrum新手村的挑戰任務吧。
              </>
            )}
          </p>
          {isTheEnd? <BtnChallengeAccept next="/" text="重新挑戰" />: <BtnChallengeAccept next="/intro" text="接受挑戰" />}

          <div className="flex justify-center mt-20">
            <img alt="Confluence" src={Confluence} />
            <img alt="Jira" src={Jira} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
