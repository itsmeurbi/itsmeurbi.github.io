import type { ReactElement  } from 'react';
import { useRoutes } from 'react-router-dom'
import Main from './Main';
import Personal from './Personal';
import Career from './Career';

const Router = (): ReactElement | null => {
  const routes = useRoutes([
    { path: "/", element: <Main /> },
    { path: "/personal", element: <Personal /> },
    { path: "/career", element: <Career /> },
    { path: '*', element: <Personal/> },
  ])

  return routes;
};

export default Router;
