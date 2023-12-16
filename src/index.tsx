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
import Timeline7 from './components/Timeline7';
import Timeline8 from './components/Timeline8';
import Timeline9 from './components/Timeline9';
import Timeline10 from './components/Timeline10';
import Timeline11 from './components/Timeline11';
import ClubCareer from './components/ClubCareer';
import RealMadrid from './components/Clubs/RealMadrid';
import RealMadridChampions from './components/Clubs/RealMadridChampions';
import RealMadridLaLiga from './components/Clubs/RealMadridLaLiga';
import ManUnitedPremier from './components/Clubs/ManUnitedPremier';
import ManUnited from './components/Clubs/ManUnited';
import { Man } from '@mui/icons-material';
import ManUnitedChampions from './components/Clubs/ManUnitedChampions';
import Sporting from './components/Clubs/Sporting';
import SportingLigaPT from './components/Clubs/SportingLigaPT';
import Juventus from './components/Clubs/Juventus';
import JuventusChampions from './components/Clubs/JuventusChampions';
import JuventusSerieA from './components/Clubs/JuventusSerieA';
import PhotoID from './components/PhotoID';

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
    path: '/club-career/sporting',
    element: <Sporting />,
  },
  {
    path: '/club-career/sporting/ligaPT',
    element: <SportingLigaPT />,
  },
  {
    path: '/club-career/juventus',
    element: <Juventus />,
  },
  {
    path: '/club-career/juventus/serie-a',
    element: <JuventusSerieA />,
  },
  {
    path: '/club-career/juventus/champions',
    element: <JuventusChampions />,
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
    path: "/photo/:id",
    element: <PhotoID />,
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
  },
  {
    path: "/timeline7",
    element : <Timeline7 />,
  },
  {
    path: "/timeline8",
    element : <Timeline8 />,
  },
  {
    path: "/timeline9",
    element : <Timeline9 />,
  },
  {
    path: "/timeline10",
    element : <Timeline10 />,
  },
  {
    path: "/timeline11",
    element : <Timeline11 />,
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
