import Card from "../card";
import { useDispatch, useSelector } from "react-redux";
import baseUrls from "../../../utils/base-urls";
import { useEffect } from "react";
import { fetchCastsMovieAction } from "../../../store/api-store/thunk-actions";

const CastsList = (props) => {
    const { castsMovie } = useSelector(state => state.apiReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        getFromApi();
    }, [props.id]);

    const getFromApi = async () => {
        dispatch(fetchCastsMovieAction(`${baseUrls.baseApi}/movie/${props.id}/credits?api_key=${baseUrls.apiKey}`));
    }
    return (
        <div className="cardArea container">
            <div className="cardGroup">
                <div className="head">
                    <h2>Casts</h2>
                </div>
                <div className="cardArea scrollbar" >
                    {
                        castsMovie.map((item, index) => (
                            <Card key={index} name={item.name} character={item.character} image={item.profile_path} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default CastsList;