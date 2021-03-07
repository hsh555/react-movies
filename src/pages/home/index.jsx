// import AuthArea from "../../components/common/auth-area";
import React from "react";

import CardMovieList from "../../components/common/card-movie-list";

const Home = () => {
    return (
        <React.Fragment>
            {/* <CardGroup title="popular" />
            <CardGroup title="top_rated" /> */}
            <CardMovieList type={"popular"} />
            <CardMovieList type={"top_rated"} />
            <CardMovieList type={"upcoming"} />
            {/* <TopRatedList /> */}
        </React.Fragment>
    );
}

export default Home;