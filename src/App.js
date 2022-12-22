import BtnChallengeAccept from "./components/general/BtnChallengeAccept";
import Confluence from "@/assets/confluence-logo.png";
import Jira from "@/assets/jira-logo.png";
function App() {
  return (
    <main className="full-screen bg-base-pattern-A">
      <div className="card">
      <div className="card_body text-center pt-20 pb-12">
        <h1 className="text-h1 font-bold">Scrum新手村</h1>
        <p className="my-16">
          嗨囉! 歡迎加入Burger資訊。<br />
          在正式加入專案開發之前，需要請你先了解Scrum的流程與精神。<br />
          請接受挑戰任務，成功通過Scrum新手村的挑戰任務吧。</p>
        <BtnChallengeAccept next="/intro" text="接受挑戰" />
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
