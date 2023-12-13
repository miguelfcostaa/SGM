import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import MainPage from './components/MainPage';
import ErrorPage from './components/ErrorPage';
import Biography from './components/Biography';
import Career from './components/Career';
import Photo from './components/Photo';
import Video from './components/Video';
import Timeline1 from './components/Timeline1';
import ClubCareer from './components/ClubCareer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/bio",
    element: <Biography />,
  },
  {
    path: "/career",
    element: <Career />,
  },
  {
    path: "/international-career",
    element: <Career />,
  },
  {
    path: "/club-career",
    element: <ClubCareer />,
  },
  {
    path: "/video",
    element: <Video />,
  },
  {
    path: "/photo",
    element: <Photo />,
  },
  {
    path: "/timeline1",
    element: <Timeline1 />,
  }
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
