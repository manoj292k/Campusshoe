import product from '../Database/Products'
function Home() {
    return (
      <>
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          {/* Indicators/dots */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
          </div>
  
          {/* The slideshow/carousel */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://www.campusshoes.com/cdn/shop/files/HomePage_Mobile_Banner_602252d1-9b5c-4d0d-b7fd-387855204f95_540x.jpg" alt="Los Angeles" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src="https://www.campusshoes.com/cdn/shop/files/HomePage_Mobile_Banner_1_900x.jpg" alt="Chicago" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src="https://www.campusshoes.com/cdn/shop/files/HomePage_Mobile_Banner_3cbef631-5108-4953-b256-87951ff44d2f_540x.jpg" alt="New York" className="d-block w-100" />
            </div>
          </div>
  
          {/* Left and right controls/icons */}
          <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
        <h3 className="heading">New Arrivals</h3>
        <div className="Productinhome">
            
                {product.map((product)=>
                <div className="Homeproduct" key={product.id}>
                    <img className="productimghome" src={product.img}></img>
                    <h6>{product.Name}</h6>
                    <p>{product.Color}  <mark style={{ background: "black", color: "white"  }}>5% Offer</mark></p> 
                    <p> ₹ {product.Price}/- Only</p>
                    <button>Quick Buy</button>
                    
                </div>
                )}
            </div>
            <div className="homecategory">
                <div>
                    <img alt="shoeimg" src="https://www.campusshoes.com/cdn/shop/files/Home_Category_1_d2688738-d6c9-4e4b-bb9d-0ec3b10a74e3_720x.jpg"></img>
                </div>
                <div>
                    <img alt="shoeimg" src="https://www.campusshoes.com/cdn/shop/files/Home_Category_4_540x.jpg"></img>
                </div>
                <div>
                    <img alt="shoeimg" src="https://www.campusshoes.com/cdn/shop/files/Home_Category_1_d2688738-d6c9-4e4b-bb9d-0ec3b10a74e3_720x.jpg"></img>
                </div>
                <div>
                    <img alt="shoeimg" src="https://www.campusshoes.com/cdn/shop/files/Home_Category_4_540x.jpg"></img>
                </div>
            </div>
            <h3 className="heading">New Arrivals</h3>
      <div className='HomeBottomBaner'>
        <div>
          <img className='Homebtomimg1' src='https://www.campusshoes.com/cdn/shop/files/Home_Featured_image_1_360x.jpg?v=1704714236'></img>
          <img className='Homebtomimg2' src='https://www.campusshoes.com/cdn/shop/files/Home_Featured_image_2_360x.jpg?v=1704714255'></img>
        </div>
        <div className='homeendcontainertwo'> 
          <h3>Know Your Shoe!</h3>
          <p>Explore Our Air-Turbo Tech</p>
          <button>SHOP NOW</button>
        </div>
      </div>
      </>
    );
  }
  
  export default Home;
  