import { lazy, Suspense } from "react";
import App from "./App";
import Loader from "./components/general/Loader";
const AppClear = lazy(() => import("./components/AppClear"));
const Intro = lazy(() => import("./pages/Intro"));
const Role = lazy(() => import("./pages/Role"));
const Backlog = lazy(() => import("./pages/Backlog"));
const BacklogGame = lazy(() => import("./components/BacklogGame"));
const Planning = lazy(() => import("./pages/Planning"));
const PlanningChat = lazy(() => import("./components/PlanningChat"));
const PlanningPoint = lazy(() => import("./components/PlanningPoint"));
const Sprint = lazy(() => import("./pages/Sprint"));
const SprintExplanation = lazy(() => import("./components/SprintExplanation"));
const SprintGame = lazy(() => import("./components/SprintGame"));
const Retrospective = lazy(() => import("./pages/Retrospective"));
const RetrospectiveChat = lazy(() => import("./components/RetrospectiveChat"));
const Material = lazy(() => import("./pages/Material"));
const Award = lazy(() => import("./pages/Award"));
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "clear",
        element: (
          <Suspense fallback={<Loader />}>
            <AppClear />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/intro",
    element: (
      <Suspense fallback={<Loader />}>
        <Intro />
      </Suspense>
    ),
    loader: () => {
      return 1;
    },
  },
  {
    path: "/role/:roleId",
    element: (
      <Suspense fallback={<Loader />}>
        <Role />
      </Suspense>
    ),
    loader: () => {
      return 2;
    },
  },
  {
    path: "/backlog",
    element: (
      <Suspense>
        <Backlog />
      </Suspense>
    ),
    loader: () => {
      return 3;
    },
    children: [
      {
        path: "game",
        element: (
          <Suspense>
            <BacklogGame />
          </Suspense>
        ),
        loader: () => {
          return 3;
        },
      },
    ],
  },
  {
    path: "/planning",
    element: (
      <Suspense>
        <Planning />
      </Suspense>
    ),
    loader: () => {
      return 4;
    },
    children: [
      {
        path: "chat",
        element: (
          <Suspense>
            <PlanningChat />
          </Suspense>
        ),
        loader: () => {
          return 4;
        },
      },
      {
        path: "point",
        element: (
          <Suspense>
            <PlanningPoint />
          </Suspense>
        ),
        loader: () => {
          return 5;
        },
      },
    ],
  },
  {
    path: "/sprint",
    element: (
      <Suspense>
        <Sprint />
      </Suspense>
    ),
    loader: () => {
      return 6;
    },
    children: [
      {
        path: "explanation",
        element: (
          <Suspense>
            <SprintExplanation />
          </Suspense>
        ),
        loader: () => {
          return 6;
        },
      },
      {
        path: "game",
        element: (
          <Suspense>
            <SprintGame />
          </Suspense>
        ),
        loader: () => {
          return 6;
        },
      },
    ],
  },
  {
    path: "/retrospective",
    element: (
      <Suspense>
        <Retrospective />
      </Suspense>
    ),
    loader: () => {
      return 7;
    },
    children: [
      {
        path: "chat",
        element: (
          <Suspense>
            <RetrospectiveChat />
          </Suspense>
        ),
        loader: () => {
          return 7;
        },
      },
    ],
  },
  {
    path: "/material",
    element: (
      <Suspense>
        <Material />
      </Suspense>
    ),
    loader: () => {
      return 8;
    },
  },
  {
    path: "/award",
    element: (
      <Suspense>
        <Award />
      </Suspense>
    ),
  },
];

export default routes;
