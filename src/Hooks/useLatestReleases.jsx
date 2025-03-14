import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLatestReleases } from "../Utils/movieSlice";
import { options } from "../Utils/Constants";

const useLatestReleases = () => {
  const dispatch = useDispatch();
  const latestReleases = useSelector((store) => store.movies.latestReleases);

  const fetchLatestReleases = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",

        options
      );
      const data = await response.json();

      if (data.results) {
        dispatch(addLatestReleases(data.results));
      }
    } catch (error) {
      console.error("Error fetching latest releases:", error);
    }
  };

  useEffect(() => {
    if (!latestReleases || latestReleases.length === 0) {
      fetchLatestReleases();
    }
  }, []);
};

export default useLatestReleases;
