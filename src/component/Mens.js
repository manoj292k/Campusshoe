import React, { useState } from 'react';
import product from "../Database/Products";

function Mens() {
    // State variables for filtering
    const [sortBy, setSortBy] = useState("Default");
    const [selectedColors, setSelectedColors] = useState([]);

    // Function to handle sorting
    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    // Function to handle color checkbox change
    const handleColorChange = (e) => {
        const color = e.target.value;
        if (selectedColors.includes(color)) {
            setSelectedColors(selectedColors.filter((c) => c !== color));
        } else {
            // Check if any products match the selected color
            const productsWithColor = product.filter((p) => p.Color === color);
            if (productsWithColor.length === 0) {
                alert(`No products found for color: ${color}`);
            } else {
                setSelectedColors([...selectedColors, color]);
            }
        }
    };
    

    // Function to sort products
    const sortProducts = (products) => {
        if (sortBy === "New Products") {
            return [...products].sort((a, b) => b.id - a.id); // Sort by ID for demonstration, replace with your logic
        } else if (sortBy === "Low to high") {
            return [...products].sort((a, b) => a.Price - b.Price);
        } else if (sortBy === "High to low") {
            return [...products].sort((a, b) => b.Price - a.Price);
        } else {
            return products; // Default sorting
        }
    };

    // Function to filter products by selected colors
    const filterProductsByColor = (products) => {
        if (selectedColors.length === 0) {
            return products;
        }
        return products.filter((product) => selectedColors.includes(product.Color));
    };
    return(
        <>
        <div className="MensBanner">
            <img src="https://www.campusshoes.com/cdn/shop/collections/MEN_Main_category_5_1728x.jpg"></img>
        </div>
        <div className="Filtercontainer">
            <h5>Filter</h5>
            <h6>Sort</h6>
            <select id="sort" name="sort" value={sortBy} onChange={handleSortChange}>
                    <option value="Default">Default</option>
                    <option value="New Products">New Products</option>
                    <option value="Low to high">Low to high</option>
                    <option value="High to low">High to low</option>
                    {/* Add more sorting options as needed */}
                </select>
        <br></br> <br></br>
        <h6>Colors</h6><div className='colorbox'>
        <input type='checkbox' value="Black" onChange={handleColorChange} />
                    <label htmlFor="Black"> Black</label> <br />
                    <input type='checkbox' value="Blue" onChange={handleColorChange} />
                    <label htmlFor="Blue"> Blue</label> <br />
                    <input type='checkbox' value="Pink" onChange={handleColorChange} />
                    <label htmlFor="Pink"> Pink</label> <br />
                    <input type='checkbox' value="White" onChange={handleColorChange} />
                    <label htmlFor="White"> White</label> <br />
                    <input type='checkbox' value="Brown" onChange={handleColorChange} />
                    <label htmlFor="Brown"> Brown</label> <br />
                    <input type='checkbox' value="Red" onChange={handleColorChange} />
                    <label htmlFor="Red"> Red</label> <br />
                    <input type='checkbox' value="Green" onChange={handleColorChange} />
                    <label htmlFor="Green"> Green</label> <br />
                    <input type='checkbox' value="Gray" onChange={handleColorChange} />
                    <label htmlFor="Gray"> Gray</label> <br /></div>
        <br></br> <br></br>
        <h6>Price Range</h6>
        <div className='pricerange'>
        <label htmlFo="min-price">Min Price:</label>
        <input type="number" id="min-price" name="min-price" min="0"/> <br></br><br></br>
        <label htmlFor="max-price">Max Price:</label>
        <input type="number" id="max-price" name="max-price" min="0"/> 
        </div>
        <br></br> <br></br>
        <h6>Size</h6>
            <select id="cars" name="cars">
            <option value="Default">All Size</option>
            <option value="New Products">6</option>
            <option value="Low to high">7</option>
            <option value="High to low">8</option>
            <option value="Popularity">9</option>
            <option value="Popularity">10</option>
            <option value="Popularity">11</option>
            <option value="Popularity">12</option>
        </select>
        </div>
        <div className='ProductContainer'>
                {filterProductsByColor(sortProducts(product)).map((product) =>
                    <div className='productitem' key={product.id}>
                        <img src={product.img} alt={product.Name} />
                        <h6>{product.Name}</h6>
                        <p> ₹ {product.Price} - Only</p>
                        <p>{product.Color}</p>
                        <button className='Addcartbtn'> Add Cart</button>
                        <button className='wishlistbtn'><box-icon name='heart'></box-icon></button>
                    </div>
                )}
            </div>
        </>
    )
}
export default Mens;