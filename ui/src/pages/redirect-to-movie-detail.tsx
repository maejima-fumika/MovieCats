import React from 'react';
import { useParams,useNavigate } from "react-router-dom";
import { useEffect } from 'react';

//This page exists because when navigating from /movie-detail/1 to /movie-detail/2, the react does not rerender the page.
// Therefore, the order of page transitions is as follows:
    // /movie-detail/1 -> redirect-to-movie-detail/1 -> /movie-detail/2

export default function RedirectToMovieDetail(){
    const navigate = useNavigate()
    const params = useParams()
    useEffect(() => {
        navigate(`/movie-detail/${params.id}`)
      }, []);
    return (
        <div>
        </div>
    )
}