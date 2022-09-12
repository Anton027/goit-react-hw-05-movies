import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Home} from "../pages/Home"
import { Movies } from "pages/Movies";
import { MovieDetails } from "pages/MovieDetails";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="moiesDetails" element={<MovieDetails />}></Route>
      </Route>
    </Routes>
  );
};
