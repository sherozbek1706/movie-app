import Movie from "./Movie";

export default function Movies(props) {
  const { movies } = props;

  try {
    return (
      <div className="movies">
       {
        
        movies.length ? (
          movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
        ) : (
          <h4>Nothing Found!</h4>
        )
        
        }
  
      </div>
    );
  } catch (error) {
    return (
      <div className="movies">
       
          <h4>Nothing Found!</h4>
        
  
      </div>
    );
  }
 
}
