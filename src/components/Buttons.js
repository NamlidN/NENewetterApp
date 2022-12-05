




function BTNs({ getCity }) {
    function handleCity(city) {
        getCity(city);
        handleCity(city);
    }
    return (
        <div>
            <div className="button">
                <button onClick={() => handleCity("Berlin")}>Berlin</button>
                <button onClick={() => handleCity("Köln")}>Köln</button>
                <button onClick={() => handleCity("München")}>München</button>
                <button onClick={() => handleCity("Hamburg")}>Hamburg</button>
            </div>
        </div>
    );
}

export default BTNs;