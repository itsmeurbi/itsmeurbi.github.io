import type { ReactElement  } from 'react';
import { Navigate, useRoutes } from 'react-router-dom'
import App from './App';

const Router = (): ReactElement | null => {
  const routes = useRoutes([
    {
      path: "/",
      element: <App />,
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ])

  return routes;
};

export default Router;
