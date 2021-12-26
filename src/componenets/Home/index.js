import React, { useEffect } from 'react'
import movieApi from '../../common/utils/movieApi';
import MovieListing from "../MovieListing/index";
import { APIkey } from '../../common/utils/movieApikey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

function Home() {
    const movieText = "harry";
    const dispatch = useDispatch();

useEffect(() => {
    const fetchMovies = async () => {
        const response = await movieApi.get(`?apikey=${APIkey}&s=${movieText}&type=movie`
        )
        .catch((err) =>{
            console.log("err", err);
        });
        if(response) {
            dispatch(addMovies(response.data));
        }
    };
    
    fetchMovies();
}, []);

    return (
        <div className="banner-img">
            <MovieListing />
        </div>
    )
}

export default Home;
