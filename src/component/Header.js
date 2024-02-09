import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="containerHeader">
        <ul>
          <li>
            <Link to="/Mens">Mens</Link>
            <Link to="/Womens">Womens</Link>
            <Link to="/Kids">Kids</Link>
            <Link to="/Collection">Collections</Link>
            <a href="/Sales">Sales</a>
            
          </li>
        </ul>
        <Link to="/Campusshoe"><p>Campus</p></Link>
        <ul>
          <li>
            <a href="#">Account <box-icon name='user' color='#ffffff'></box-icon></a>
            <a href="#">Wishlist <box-icon name='heart' color='#ffffff'></box-icon></a>
            <a href="#">Search <box-icon name='search' color='#ffffff'></box-icon></a>
            <Link to="/Cart">Cart <box-icon name='cart-alt' color='#ffffff'></box-icon></Link>
            <a href="#">Store <box-icon name='location-plus' color='#ffffff'></box-icon></a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
