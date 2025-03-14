import { useDispatch, useSelector } from "react-redux";
import { addInternationalTvShows } from "../Utils/movieSlice";
import { options } from "../Utils/Constants";
import { useEffect } from "react";

const useInternationalTvShows = () => {
    const dispatch = useDispatch();
    const internationalTvShows = useSelector(store => store.movies.internationalTvShows);

    const getInternationalTvShows = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/trending/tv/day",
            options
        );

        const response = await data.json();
        console.log("International TV Shows:", response);

        dispatch(addInternationalTvShows(response.results));
    };

    useEffect(() => {
        if (!internationalTvShows) getInternationalTvShows();
    }, []);
};

export default useInternationalTvShows;
