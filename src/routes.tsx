import type { ReactElement  } from 'react';
import { Navigate, useRoutes } from 'react-router-dom'
import Main from './Main';
import Personal from './Personal';
import Carrer from './Carrer';

const Router = (): ReactElement | null => {
  const routes = useRoutes([
    { path: "/", element: <Main /> },
    { path: "/personal", element: <Personal /> },
    { path: "/carrer", element: <Carrer /> },
    { path: '*', element: <Navigate to="/" replace /> },
  ])

  return routes;
};

export default Router;
