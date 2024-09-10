import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <>
            <div className="container container-home">
                <div className="image-container">
                    <img src="./images/baker.png" alt="Placeholder" />
                </div>
                <div className="text-container">
                    <h1>Nova Bloom</h1>
                    <p>
                        we craft every treat with love and the finest ingredients. From warm breads to sweet pastries, each bite brings comfort and joy. Stop by and enjoy freshly baked goodness made just for you!"
                        This version is concise while still capturing the essence of your bakery.
                    </p>
                </div>
            </div>
            <div className="services-container">
                <h3 className="services-heading">Our Services And Benefits</h3>
                <div className="services-grid">
                    <div className="service-card">
                        <img src="./images/cake.jpg" alt="Cake" className="service-image" />
                        <p className="service-caption">Savor Our Freshly Baked, Delightful Cakes</p>
                    </div>
                    <div className="service-card">
                        <img src="./images/drink.jpg" alt="Drinks" className="service-image" />
                        <p className="service-caption">Enjoy a Selection of Hot and Refreshing Beverages</p>
                    </div>
                    <div className="service-card">
                        <img src="./images/pastries.jpg" alt="Pastries" className="service-image" />
                        <p className="service-caption">Indulge in Exquisite Pastries to Satisfy Your Cravings</p>
                    </div>
                </div>
            </div>
            <Link className='fixed-button btn btn-outline-light btn-lg' to='/menu'>Order Now</Link>
        </>
    );
};