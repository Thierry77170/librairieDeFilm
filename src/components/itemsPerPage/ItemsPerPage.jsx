import './itemsPerPage.css';

function ItemsPerPage({ onItemsPerPageChange }) {
    const handleChange = (event) => {
        onItemsPerPageChange(Number(event.target.value));
    };

    return (
        <div className='itemsPerPage'>
            <p>Nombre d'éléments par page :</p>
            <select onChange={handleChange} className='btnItemsPerPage'>
                <option vlue="4">4</option>
                <option value="8">8</option>
                <option value="12">12</option>
            </select>
        </div>
    )
}

export default ItemsPerPage;