
const MoviesListLayout = (props) => {

    return (
        <div className="container">
            <div className="seperator">
                    {props.children}
            </div>
        </div>
    );
}

export default MoviesListLayout;