import React from 'react';

const Product = ({ products, handleCardUpdate }) => {
    const { id, name, image, description, stock, rating, price, category } = products;
    return (
        <div className="card bg-base-100 my-10 mx-5 p-4 md:p-8  shadow-sm">
            <figure>
                <img className='w-full h-48 object-cover sm:h-56 md:h-60 lg:h-64 rounded-t-lg'
                    src={image}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name.split(" ").slice(0,2).join(" ")}...
                    <div className="badge badge-secondary">Hot sale </div>
                </h2>
                <h1>Category: {category}</h1>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-primary">Rating: {rating}</div>
                    <div className="badge badge-secondary">${price}</div>
                    <div className="badge badge-info">Stock:{stock}</div>
                </div>
                <div className='flex gap-4'>
                    <button onClick={() => handleCardUpdate(products)} className='btn btn-outline btn-primary w-[50%]'>Add to Cart</button>
                    <button className='btn btn-outline btn-secondary w-[50%]'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
