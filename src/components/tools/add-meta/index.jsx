import { Helmet } from "react-helmet";

const AddMeta = ({ title }) => {
    return (
        <Helmet>
            <meta name="description" content={"A reactJs SPA website that uses from TMDB APIs"} />
            <title>{title}</title>
        </Helmet>
    );
}

export default AddMeta;