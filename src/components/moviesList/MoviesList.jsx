// REACT
import { useState, useEffect } from 'react';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../../redux/actions/movies.actions.js';

// COMPONENTS
import MoviesCards from '../moviesCards/MoviesCards.jsx';
import Filter from  '../filter/Filter.jsx'

// STYLE
import './moviesList.css'

const MoviesList = () => {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.movies);
    const status = useSelector(state => state.movies.status);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Permet d'exécuter l'action asynchrone pour récupérer les data au montage du composant.
    useEffect(() => {
      if (status === 'idle') {
        dispatch(fetchMovies());
      }
    }, [status, dispatch]);

    // Permet d'obtenir un nouveau set d'élément unique pour les catégories 
    useEffect(() => {
      const allCategories = ['All', ...new Set(movies.map(movie => movie.category))];
      setCategories(allCategories);
    },[movies]);

      // Réinitialiser la catégorie sélectionnée à "All" si la catégorie sélectionnée n'a plus de films
      useEffect(() => {
        if (selectedCategory !== 'All' && !movies.some(movie => movie.category === selectedCategory)) {
          setSelectedCategory('All');
        }
      }, [movies, selectedCategory]);
    
    // Expression pour sélestionner la catégorie de films
    let filteredMovies = selectedCategory === 'All'
      ? movies
      : movies.filter(movie => movie.category === selectedCategory);

    const handleCategoriesFilter = (category) => {
      setSelectedCategory(category);
    }

    return (
      <main>
        <Filter 
          categories={categories}
          onCategoryChange={handleCategoriesFilter}
        />
        <div className="movies-list">
          {filteredMovies.map(movie => (
            <MoviesCards key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    );
  };
  
  export default MoviesList;