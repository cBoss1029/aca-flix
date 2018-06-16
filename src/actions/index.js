export const loadMyMovieList=()=>{
    return function (dispatch) {
        dispatch({   // this dispatch is optional.  use case: start a spinner to tell user that something is coming
          type: "LOAD_MY_MOVIE_LIST" 
        });
        fetch("/movies")
        .then( (response) => {
          return response.json();
        }).then((movies) => {
          dispatch(myMovieListLoaded(movies));
        });
      }

}

export const myMovieListLoaded=(movies)=>{
    return{
        type: 'MY_MOVIE_LIST_LOADED',
        value: movies 
    }
}
export const loadSearch=(searchTerm)=>{
    return function(dispatch){
        dispatch({
            type: 'LOAD_SEARCH'
        })
        fetch(`https://api.themoviedb.org/3/search/multi?query=${searchTerm}&api_key=98f46b5af93e5e7ceda6cf1ef5e4b987`)
        .then(res=>{
            return res.json()
        }).then((movies=>{
            dispatch(searchLoaded(movies));
        }));
    }
}
export const searchLoaded=(movies)=>{
    return{
        type: 'SEARCH_RESULTS_LOADED',
        value: movies.results

    }
}
export const saveMyMovie=(movie)=>{
    return function(dispatch){
        fetch('/movies', {
            method:'POST',
            body: JSON.stringify(movie),
            headers: {
                'Content-type': 'application/json'
            }

        }).then(function(res){
            return res.json()
        }).then(function(){
            dispatch(loadMyMovieList());   
        });
    }
}
export const removeMyMovie=(id)=>{
    return function(dispatch){
        fetch('/movies/'+ id, {
            method: 'DELETE'
        }).then((res)=>{
            return res.json()
        }).then(function(){
            dispatch(loadMyMovieList());
        })
    }
}
