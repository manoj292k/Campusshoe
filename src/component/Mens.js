import product from '../Database/Products'
function Mens(){
    return(
        <>
        <div className="MensBanner">
            <img src="https://www.campusshoes.com/cdn/shop/collections/MEN_Main_category_5_1728x.jpg"></img>
        </div>
        <div className="Filtercontainer">
            <h5>Filter</h5>
            <h6>Sort</h6>
            <select id="cars" name="cars">
            <option value="Default">Default</option>
            <option value="New Products">New Products</option>
            <option value="Low to high">Low to high</option>
            <option value="High to low">High to low</option>
            <option value="Popularity">Popularity</option>
        </select>
        <br></br> <br></br>
        <h6>Colors</h6><div className='colorbox'>
        <input type='checkbox'></input> <label htmlFor="someInput">All color</label> <br></br>
        <input type='checkbox'></input><label htmlFor="someInput"> Black</label> <br></br>
        <input type='checkbox'></input><label htmlFor="someInput"> White</label> <br></br>
        <input type='checkbox'></input><label htmlFor="someInput"> Dark Blue</label> <br></br>
        <input type='checkbox'></input><label htmlFor="someInput"> Green</label> <br></br>
        <input type='checkbox'></input><label htmlFor="someInput"> Brown</label> <br></br>
        <input type='checkbox'></input><label htmlFor="someInput"> Red</label> <br></br>
        <input type='checkbox'></input><label htmlFor="someInput"> Pink</label> <br></br>
        <input type='checkbox'></input><label htmlFor="someInput"> Violet</label> <br></br>
        <input type='checkbox'></input><label htmlFor="someInput"> Orange</label> <br></br>
        </div>
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
            {product.map((product)=>
            <div className='productitem' key={product.id}> 
            <img src={product.img}></img>
            <h6>{product.Name}</h6>
            <p> ₹  {product.Price}- Only</p>
            <button className='Addcartbtn'> Add Cart</button>
            <button className='wishlistbtn'><box-icon name='heart' ></box-icon></button>
            </div>    )}
        </div>
        </>
    )
}
export default Mens;