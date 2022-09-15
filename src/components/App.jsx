import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Home} from "../pages/Home"
import { Movies } from "pages/Movies";
import { MovieDetails } from "pages/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Review } from "./Review/Review";
// import { lazy } from "react";

// const createAsyncComponent = path => {
//   const componentName = path.match(/[a-zA-Z]+$/)[0];
//   return lazy(() =>
//     import(path).then(module => ({ ...module, default: module[componentName] }))
//   );
// };


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
