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
import InternationalCareer from './components/InternationalCareer';
import Photo from './components/Photo';
import Video from './components/Video';
import Timeline1 from './components/Timeline1';
import Timeline2 from './components/Timeline2';
import Timeline3 from './components/Timeline3';
import Timeline4 from './components/Timeline4';
import Timeline5 from './components/Timeline5';
import Timeline6 from './components/Timeline6';
import ClubCareer from './components/ClubCareer';
import RealMadrid from './components/Clubs/RealMadrid';
import RealMadridChampions from './components/Clubs/RealMadridChampions';
import RealMadridLaLiga from './components/Clubs/RealMadridLaLiga';
import ManUnitedPremier from './components/Clubs/ManUnitedPremier';
import ManUnited from './components/Clubs/ManUnited';
import { Man } from '@mui/icons-material';
import ManUnitedChampions from './components/Clubs/ManUnitedChampions';

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
    path: "/international-career",
    element: <InternationalCareer />,
  },
  {
    path: "/club-career",
    element: <ClubCareer />,
  },
  {
    path: '/club-career/realMadrid',
    element: <RealMadrid />,
  },
  {
    path: '/club-career/realMadrid/champions',
    element: <RealMadridChampions />,
  },
  {
    path: '/club-career/realMadrid/laliga',
    element: <RealMadridLaLiga />,
  },
  {
    path: '/club-career/manUnited',
    element: <ManUnited />,
  },
  {
    path: '/club-career/manUnited/champions',
    element: <ManUnitedChampions />,
  },
  {
    path: '/club-career/manUnited/premier',
    element: <ManUnitedPremier />,
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
  },
  {
    path: "/timeline2",
    element : <Timeline2 />,
  },
  {
    path: "/timeline3",
    element: <Timeline3 />,
  },
  {
    path: "/timeline4",
    element : <Timeline4 />,
  },
  {
    path: "/timeline5",
    element : <Timeline5 />,
  },
  {
    path: "/timeline6",
    element : <Timeline6 />,
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
