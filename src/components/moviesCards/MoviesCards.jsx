// REACT-REDUX
import { useDispatch } from 'react-redux';
import { deleteMovie, toggleLike, toggleDislike } from '../../redux/actions/movies.actions.js';

// STYLE
import './moviesCards.css'

function MoviesCards({ movie }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteMovie(movie.id));
      };

      const handleLike = () => {
        dispatch(toggleLike(movie.id));
      };

      const handleDislike = () => {
        dispatch(toggleDislike(movie.id));
      };

    return (
        <div className='moviesCards'>
            <h2>{movie.title}</h2>
            <p>{movie.category}</p>
            <div className="like-dislike">
                <p>Likes: {movie.likes}</p>
                <p>Dislikes: {movie.dislikes}</p>
            </div>
            <button onClick={handleLike} id="like">Like</button>
            <button onClick={handleDislike} id="dislike">Dislike</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default MoviesCards;