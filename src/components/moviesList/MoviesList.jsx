// REACT
import { useState, useEffect } from 'react';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../../redux/actions/movies.actions.js';

// COMPONENTS
import MoviesCards from '../moviesCards/MoviesCards.jsx';
import Filter from  '../filter/Filter.jsx'
import Pagination from  '../pagination/Pagination.jsx'
import ItemsPerPage from  '../itemsPerPage/ItemsPerPage.jsx'

// STYLE
import './moviesList.css'

function MoviesList() {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.movies);
    const status = useSelector(state => state.movies.status);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4);

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

      // On réinitialise la catégorie sélectionnée à "All" si la catégorie sélectionnée n'a plus de films
      useEffect(() => {
        if (selectedCategory !== 'All' && !movies.some(movie => movie.category === selectedCategory)) {
          setSelectedCategory('All');
        }
      }, [movies, selectedCategory]);

       // On réinitialise la page actuelle à 1 lorsque la catégorie sélectionnée change
      useEffect(() => {
        setCurrentPage(1);
      }, [selectedCategory]);
    
    // Expression pour sélestionner la catégorie de films
    let filteredMovies = selectedCategory === 'All'
      ? movies
      : movies.filter(movie => movie.category === selectedCategory);

    const handleCategoriesFilter = (category) => {
      setSelectedCategory(category);
    };

    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentMovies = filteredMovies.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);

    const handleItemsPerPage = (itemsPerPage) => {
      setItemsPerPage(itemsPerPage);
    };

    return (
      <main>
        <Filter 
          categories={categories}
          onCategoryChange={handleCategoriesFilter}
        />
        <div className="movies-list">
          {currentMovies.map(movie => (
            <MoviesCards key={movie.id} movie={movie} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <ItemsPerPage onItemsPerPageChange={handleItemsPerPage}/>
      </main>
    );
  };
  
  export default MoviesList;