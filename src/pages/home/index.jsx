// import AuthArea from "../../components/common/auth-area";
import React from "react";

import CardMovieList from "../../components/common/card-movie-list";
import AddMeta from "../../components/tools/add-meta";

const Home = () => {
    return (
        <React.Fragment>
            <AddMeta title="Home - React Movies"/>
            <CardMovieList type={"popular"} />
            <CardMovieList type={"top_rated"} />
            <CardMovieList type={"upcoming"} />
        </React.Fragment>
    );
}

export default Home;