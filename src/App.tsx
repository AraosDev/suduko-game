import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import GameLandingPage from './GameLanding/GameLandingPage';

import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <GameLandingPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
