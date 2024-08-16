// STYLE
import './pagination.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
        <div className="pagination">
            <button 
                onClick={() => onPageChange(currentPage - 1)} 
                disabled={currentPage === 1} 
                className='btnPagination'
            >
                Précédent
            </button>
            <p>{currentPage} / {totalPages}</p>
            <button 
                onClick={() => onPageChange(currentPage + 1)} 
                disabled={currentPage === totalPages} 
                className='btnPagination'
            >
                Suivant
            </button>
        </div>
    );
}

export default Pagination;