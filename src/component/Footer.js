import { Link } from "react-router-dom";
function Footer(){
    return(
<>
<h4 className="FooterBanner">
    <span><box-icon type='solid' name='truck'></box-icon> Fast Delivery</span>
    <span><box-icon name='purchase-tag'></box-icon> 15 days easy return</span>
    <span><box-icon type='solid' name='location-plus'></box-icon> Track Order</span>
</h4>
<div className="Footercontainer">
<div className="Footerone">
    <h5>What's In Store</h5>
           <li> <Link to="/">Home</Link></li>
           <li><Link to="/Mens">Mens</Link></li> 
           <li> <Link to="/Womens">Womens</Link></li> 
           <li> <Link to="/Kids">Kids</Link></li> 
            <li> <Link to="/Collection">Collections</Link></li> 
            <li> <a href="/Sales">Sales</a></li> 

</div>
<div className="Footerfour">
    <h5>Company Info & Policies</h5>
           <li>Blogs</li> 
           <li>Corporate</li> 
           <li>Terms & Conditions</li> 
            <li>Privacy & Cookies Policy</li> 
            <li>FAQ's</li> 
            <li>Return & Claim Policy</li> 
            <li>Contact Us</li> 
            <li>Return/Exchange</li> 

</div>
<div className="Footerthree">
    <h5>Get In Touch</h5>

           <li>For Online Orders:</li> 
           <li><b>Inquiry/Complaint:</b></li> 
           <li>9667706012</li> 
            <li>10.00AM to 7:00PM</li> 
            <li><b> Email : </b>  customercare@campusshoes.com</li> 

</div>
<div className="Footerfour">
    <h5>Newsletter</h5>
     
           <li>Sign up for exclusive offers, original stories, upcoming events and more.</li>  
          <li> <input type="email" placeholder="Enter the mail"></input></li>
          <li><button>Sign Up</button></li>
            
        
</div>
</div>
<h6 className="copywrite">&copy; {new Date().getFullYear() } CampusShoes</h6>
</>
    )
}
export default Footer;