import App from "./App";
import AppClear from "./components/AppClear";
import Intro from "./pages/Intro";
import Role from "./pages/Role";
import RoleIntro from "./components/RoleIntro"
import Backlog from "./pages/Backlog";
import BacklogGame from "./components/BacklogGame";
import Planning from "./pages/Planning";
import PlanningChat from "./components/PlanningChat";
import PlanningPoint from "./components/PlanningPoint";
import Sprint from "./pages/Sprint";
import SprintExplanation from "./components/SprintExplanation";
import SprintGame from "./components/SprintGame";
import Retrospective from "./pages/Retrospective";
import Material from "./pages/Material";
import Award from "./pages/Award";
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "clear",
        element: <AppClear />
      }
    ]
  },
  {
    path:"/intro",
    element: <Intro/>,
  },
  {
    path: "/role",
    element: <Role/>,
    children: [{
      path: ":id",
      element: <RoleIntro />
    }]
  },
  {
    path: "/backlog",
    element: <Backlog/>,
    children: [
      {
        path: "game",
        element: <BacklogGame />
      }
    ]
  },
  {
    path: "/planning",
    element: <Planning />,
    children: [
      {
        path: "planningchat",
        element: <PlanningChat />
      },
      {
        path: "planningpoint",
        element: <PlanningPoint />
      }
    ]
  },
  {
    path: "/sprint",
    element: <Sprint />,
    children: [
      {
        path: "sprintexplanation",
        element: <SprintExplanation/>
      },
      {
        path: "sprintgame",
        element: <SprintGame/>
      }
    ]
  },
  {
    path: "/retrospective",
    element: <Retrospective/>
  },
  {
    path: "/material",
    element: <Material />
  },
  {
    path: "/award",
    element: <Award />
  }
]

export default routes;