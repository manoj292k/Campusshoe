import { Link } from "react-router-dom";

function Header() {
  const handleCloseMenu=()=>{
    document.querySelector('.mobiletop').style.display = 'none';
  }
  const handleOpenMenu=()=>{
    document.querySelector('.mobiletop').style.display='Block'
  }
  return (
    <>
    <div className="searchbox">
      <h1>Campus Shoes</h1>
      <input type="text" placeholder="Search your product"></input><button><box-icon name='search' color='#0a0a0a' ></box-icon></button>
    </div>
      <div className="containerHeader">
        <ul >
          <li>
            <Link to="/Mens">Mens</Link>
            <Link to="/Womens">Womens</Link>
            <Link to="/Kids">Kids</Link>
            <Link to="/Collection">Collections</Link>
            <a href="/Sales">Sales</a>
            
          </li>
        </ul>
        <Link to="/Campusshoe"><p>Campus</p></Link>
        <ul className="Desktopcart">
          <li>
            <a href="#">Account <box-icon name='user' color='#ffffff'></box-icon></a>
            <a href="#">Wishlist <box-icon name='heart' color='#ffffff'></box-icon></a>
            <a href="#">Search <box-icon name='search' color='#ffffff'></box-icon></a>
            <Link to="/Cart">Cart <box-icon name='cart-alt' color='#ffffff'></box-icon></Link>
            <a href="#">Store <box-icon name='location-plus' color='#ffffff'></box-icon></a>
          </li>
        </ul>
      </div>
<div className="mobiletop">
  <ul>
  <h1>campusshoes</h1>
  <button className="menuclose" onClick={handleCloseMenu}><box-icon name='x-circle' type='solid' color='#ece9e9' ></box-icon></button>
  <li onClick={handleCloseMenu}>
    <Link to="/Campusshoe">Home</Link>
      <Link to="/Mens">Mens</Link>
      <Link to="/Womens">Womens</Link>
      <Link to="/Kids">Kids</Link>
      <Link to="/Collection">Collections</Link>
      <a href="/Sales">Sales</a>
    </li>
    <li onClick={handleCloseMenu}>
    <Link to="/Cart"> Cart<box-icon name='cart-alt' color='#ffffff'></box-icon></Link>
    <a href="#">Wishlist<box-icon name='heart' color='#ffffff'></box-icon></a>
    <a href="#"> Account<box-icon name='user' color='#ffffff'></box-icon></a>

    </li>
  </ul>

</div>

      <ul className="mobileCart">
       
          <li>
            <a href="#"> <box-icon name='user' color='#ffffff'></box-icon></a>
            <a href="#"><box-icon name='heart' color='#ffffff'></box-icon></a>
            <Link to="/Cart"><box-icon name='cart-alt' color='#ffffff'></box-icon></Link>
            <a href="#" onClick={handleOpenMenu}><box-icon name='menu-alt-left' color='#ffffff'></box-icon></a>

          </li>
        </ul>
    </>
  );
}

export default Header;
