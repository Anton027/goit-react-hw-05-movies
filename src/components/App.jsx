import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { lazy } from "react";

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Review = lazy(() => import('./Review/Review'));

// const Home = createAsyncComponent("../pages/Home");
// const Movies = createAsyncComponent("../pages/Movies");
// const MovieDetails = createAsyncComponent("../pages/MovieDetails");
// const Cast = createAsyncComponent("./Cast/Cast");
// const Review = createAsyncComponent("./Review/Review");


export const App = () => {
  return (

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}>
          </Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="review" element={<Review />}></Route>
          </Route>
        </Route>
      </Routes>
    
  );
};
