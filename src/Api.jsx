import React, { useState, useEffect } from "react";

const Api = () => {
    const [items, setItems] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setItems(data);
        }
        catch(error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>API Data</h1>
            <div>
                {items.map(item => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p>Price: ${item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Api;