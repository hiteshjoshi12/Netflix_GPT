import { useDispatch, useSelector } from "react-redux";
import { addIndianTvShows } from "../Utils/movieSlice"
import { options } from "../Utils/Constants";
import { useEffect } from "react";

const useIndianTvShows = () => {
    const dispatch = useDispatch();
    const indianTvShows = useSelector(store => store.movies.indianTvShows);

    const getIndianTvShows = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/discover/tv?with_origin_country=IN",
            options
        );

        const response = await data.json();
        console.log("Indian TV Shows:", response);

        dispatch(addIndianTvShows(response.results));
    };

    useEffect(() => {
        if (!indianTvShows) getIndianTvShows();
    }, []);
};

export default useIndianTvShows;
