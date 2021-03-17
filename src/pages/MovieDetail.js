import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { MovieState } from '../movieState';

const MovieDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    console.log(MovieState);

    useEffect(() => {
        const currentMovie = movies.find(movieState => movieState.url === url);
        console.log(currentMovie);
        setMovie(currentMovie);
    }, [movies, url]);

    return (
        <>
            {movie && (
                <Details>
                    <Headline>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt="movie" />
                    </Headline>            
                </Details>
            )}
        </>
        
    )
}

const Details = styled.div`
    color: #fff;
`

const Headline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;

    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, 10%);
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

export default MovieDetail;
