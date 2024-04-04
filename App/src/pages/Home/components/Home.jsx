import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        try {
            const { data } = await axios.get('https://ecommerce-node4-five.vercel.app/categories/active?limit=9');
            setCategories(data.categories);
        } catch (error) {
            console.log('Error fetching categories:', error);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div className="d-flex justify-content-center">
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true" style={{ maxWidth: '200px' }}>
                <div className="carousel-inner d-flex justify-content-center">
                    {categories.map((category, index) => (
                        <div key={category._id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img src={category.image.secure_url} className="d-block w-10" alt={`Slide ${index + 1}`} style={{ maxWidth: '200', maxHeight: '200px' }} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Home;
