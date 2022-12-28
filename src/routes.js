import App from './App';
import AppClear from './components/AppClear';
import Intro from './pages/Intro';
import Role from './pages/Role';
import Backlog from './pages/Backlog';
import BacklogGame from './components/BacklogGame';
import Planning from './pages/Planning';
import PlanningChat from './components/PlanningChat';
import PlanningPoint from './components/PlanningPoint';
import Sprint from './pages/Sprint';
import SprintExplanation from './components/SprintExplanation';
import SprintGame from './components/SprintGame';
import Retrospective from './pages/Retrospective';
import RetrospectiveChat from './components/RetrospectiveChat';
import Material from './pages/Material';
import Award from './pages/Award';
const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'clear',
        element: <AppClear />,
      },
    ],
  },
  {
    path: '/intro',
    element: <Intro />,
    loader: () => {
      return 1;
    },
  },
  {
    path: '/role/:roleId',
    element: <Role />,
    loader: () => {
      return 2;
    },
  },
  {
    path: '/backlog',
    element: <Backlog />,
    loader: () => {
      return 3;
    },
    children: [
      {
        path: 'game',
        element: <BacklogGame />,
        loader: () => {
          return 3;
        },
      },
    ],
  },
  {
    path: '/planning',
    element: <Planning />,
    loader: () => {
      return 4;
    },
    children: [
      {
        path: 'chat',
        element: <PlanningChat />,
        loader: () => {
          return 4;
        },
      },
      {
        path: 'point',
        element: <PlanningPoint />,
        loader: () => {
          return 5;
        },
      },
    ],
  },
  {
    path: '/sprint',
    element: <Sprint />,
    loader: () => {
      return 6;
    },
    children: [
      {
        path: 'explanation',
        element: <SprintExplanation />,
        loader: () => {
          return 6;
        },
      },
      {
        path: 'game',
        element: <SprintGame />,
        loader: () => {
          return 6;
        },
      },
    ],
  },
  {
    path: '/retrospective',
    element: <Retrospective />,
    loader: () => {
      return 7;
    },
    children: [
      {
        path: 'chat',
        element: <RetrospectiveChat />,
        loader: () => {
          return 7;
        },
      },
    ],
  },
  {
    path: '/material',
    element: <Material />,
    loader: () => {
      return 8;
    },
  },
  {
    path: '/award',
    element: <Award />,
  },
];

export default routes;
