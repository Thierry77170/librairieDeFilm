function ItemsPerPage({ onItemsPerPageChange }) {
    const handleChange = (event) => {
        onItemsPerPageChange(Number(event.target.value));
    };

    return (
        <div>
            <p>Nombre d'éléments par page :</p>
            <select onChange={handleChange}>
                <option vlue="4">4</option>
                <option value="8">8</option>
                <option value="12">12</option>
            </select>
        </div>
    )
}

export default ItemsPerPage;