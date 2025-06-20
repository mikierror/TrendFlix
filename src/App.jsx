import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './Partial/Home';
import Trending from './Partial/Trending';
import Popular from './Partial/Popular';
import Movies from './Partial/Movies';
import MovieDetails from './Partial/MovieDetails';
import Tvshow from './Partial/Tvshow';
import People from './Partial/People';
import PersonDetails from './Partial/PersonDetails';
import Tvdetails from './Partial/Tvdetails';
import Alldetails from './Partial/Alldetails';
import Trailer from './Partial/Trailer';
import About from './Partial/About';
import Contact from './Partial/Contact';

function Applayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home/>,
        children: [
          {
            path: ":mediaType/:id/Trailer", // Adjusted path for People (consistent lowercase)
            element: <Trailer />,
          },
        ]
      },
      {
        path: "/trending",
        element: <Trending />,
      },
      {
        path: "all/details/:id",
        element: <Alldetails />,
      },
      {
        path: "/popular", // Make sure this is lowercase and consistent
        element: <Popular />,
      },
      {
        path: "/movie", // Adjusted path for Movies (consistent lowercase)
        element: <Movies />,

      },
      {
        path: "movie/details/:id", // Relative path for movie details
        element: <MovieDetails />,
        children: [
          {
            path: "Trailer", // Relative path for movie details
            element: <Trailer />,
          },
        ]
      },
      {
        path: "/tv", // Adjusted path for Tvshow (consistent lowercase)
        element: <Tvshow />,

      },
      {
        path: "tv/details/:id", // Relative path for movie details
        element: <Tvdetails />,
        children: [
          {
            path: "Trailer", // Relative path for movie details
            element: <Trailer />,
          },
        ]
      },
      {
        path: "/person", // Adjusted path for People (consistent lowercase)
        element: <People />,
      },
      {
        path: "person/details/:id", // Relative path for person details
        element: <PersonDetails />,
      },
      {
        path: "/About", // Adjusted path for People (consistent lowercase)
        element: <About/>,
      },
  {
        path: "/Contact", // Adjusted path for People (consistent lowercase)
        element: <Contact/>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={AppRouter} />;
}

export default App;
