import PublicLayout from "../components/layouts/public-layout";
import Home from "../pages/home";
import Movie from "../pages/movie";
import Movies from "../pages/movies";
import Search from "../pages/search";
import pathes from "./utils/pathes";
import Favorites from "../pages/favorites";
import FullWidthLayout from "../components/layouts/full-width-layout";
import NotFound from "../pages/not-found";

const routes = [
    {
        name: "home",
        path: pathes.HOME,
        component: Home,
        layout: PublicLayout
    },
    {
        name: "movie",
        path: pathes.MOVIE,
        component: Movie,
        layout: PublicLayout
    },
    {
        name: "movies",
        path: pathes.MOVIES,
        component: Movies,
        layout: PublicLayout
    },
    {
        name: "search",
        path: pathes.SEARCH,
        component: Search,
        layout: PublicLayout
    },
    {
        name: "favorites",
        path: pathes.FAVORITES,
        component: Favorites,
        layout: PublicLayout
    },
    {
        name: "not_found",
        path: pathes.NOT_FOUND,
        component: NotFound,
        layout: FullWidthLayout
    }
];

export default routes;