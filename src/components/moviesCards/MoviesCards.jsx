// REACT
import { useState } from 'react';

// REACT-REDUX
import { useDispatch } from 'react-redux';
import { deleteMovie, toggleLike, toggleDislike } from '../../redux/actions/movies.actions.js';

// COMPONENTS FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';


// STYLE
import './moviesCards.css'

function MoviesCards({ movie }) {
    const dispatch = useDispatch();
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);

    const handleDelete = () => {
        dispatch(deleteMovie(movie.id));
      };

      const handleLike = () => {
        dispatch(toggleLike(movie.id));
        setIsLiked(!isLiked);
        if (isDisliked) {
            setIsDisliked(false);
        }
    };

    const handleDislike = () => {
        dispatch(toggleDislike(movie.id));
        setIsDisliked(!isDisliked);
        if (isLiked) {
            setIsLiked(false);
        }
    };

    return (
        <div className='moviesCards'>
            <h2>{movie.title}</h2>
            <p>{movie.category}</p>
            <div className='textLikeDislike'>
              <p>{movie.likes}</p>
              <p>{movie.dislikes}</p>
            </div>
            <div className="like-dislike">
            <button
              onClick={handleLike}
              className={`btnLikeDislike btnLike ${isLiked ? 'clicked' : ''}`}
            >
              <FontAwesomeIcon 
                icon={faThumbsUp} 
                className="fa-2x"
              />
            </button>
            <button
              onClick={handleDislike}
              className={`btnLikeDislike btnDislike ${isDisliked ? 'clicked' : ''}`}
            >
              <FontAwesomeIcon 
                icon={faThumbsDown} 
                className="fa-2x" 
              />
            </button>
            </div>
            <button 
              onClick={handleDelete} 
              className='btnDelete'
            >
              Supprimer
            </button>
        </div>
    )
}

export default MoviesCards;