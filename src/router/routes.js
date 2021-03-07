import PublicLayout from "../components/layouts/public-layout";
import Home from "../pages/home";
import Movie from "../pages/movie";
import Movies from "../pages/movies";
import PeoplePage from "../pages/people";
import pathes from "./utils/pathes";

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
    // {
    //     name: "tv_shows",
    //     path: pathes.TV_SHOWS,
    //     layout: PublicLayout
    // },
    // {
    //     name: "find",
    //     path: pathes.FIND,
    //     layout: PublicLayout
    // },
    // {
    //     name: "favorites",
    //     path: pathes.FAVORITES,
    //     layout: PublicLayout
    // },
    // {
    //     name: "people",
    //     path: pathes.PEOPLE,
    //     component: PeoplePage,
    //     layout: PublicLayout
    // },
    // {
    //     name: "not_found",
    //     path: pathes.NOT_FOUND,
    //     layout: FullWidthLayput
    // }
];

export default routes;