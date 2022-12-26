import Basis from '@/components/general/Basis';
import BtnChallengeAccept from '@/components/general/BtnChallengeAccept';
import PO from '@/assets/intro/PO.png';
function Material() {
  return (
    <Basis role={PO} roleAlt="PO" pattern="bg-base-pattern-C">
      <h4 className="card_body card_title py-2.5 mb-5">短衝規劃會議 (Sprint Planning)</h4>
      <div className="ml-8 bg-white p-5 rounded-xl">
        <div>
          謝謝你，和我們一起完成這項專案，我們將提供以下資源幫助你持續學習!
          <ol className="list-decimal list-inside">
            <li>
              <a href="https://www.titansoft.com/tw/agile_skills/scrum" className="text-primary">
                鈦坦 Scrum 流程參考文件
              </a>
            </li>
            <li>
              Jira 和 Confluence 補充資源
              <ul className="list-disc list-inside px-5">
                <li>
                  <a href="https://www.youtube.com/watch?v=SOVGEsV5O9A" className="text-primary">
                    Scrum in Jira Software
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=ktz6rObhRSU" className="text-primary">
                    Sprint Planning with Jira
                  </a>
                </li>
                <li>
                  <a href="https://www.atlassian.com/agile" className="text-primary">
                    其他 Agile with Jira 資訊
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=1-07JpsPMuk" className="text-primary">
                    How to user Jira & Confluence together
                  </a>
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <div className="w-full px-10 flex justify-end">
        <BtnChallengeAccept next="/award" text="完成" />
      </div>
    </Basis>
  );
}

export default Material;
