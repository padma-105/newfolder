import { FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaRss } from 'react-icons/fa';
import './footer.css';

 const Footer=()=> {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact-info">
          <div className="footer-contact-item">
            <FaPhoneAlt className='contact-icons'/>
            <p>+91 9391885077</p>
            <h3>Customer Service</h3>
          </div>
          <div className="footer-contact-item">
            <FaMapMarkerAlt className='contact-icons' />
            <p>Hyderbad, Madhapur,roadno-5</p>
            <p>Avenue 34th Floor</p>
          </div>
        </div>

        <div className="footer-form-container">
          <h2 className='form-text'>Get In Touch</h2>
          <p className='form-text'>Feel free to reach out to us for any inquiries or support.</p>
          <form className="footer-form">
            <div className="footer-form-row">
              <input type="text" placeholder="Name" className="footer-input" />
              <input type="email" placeholder="Email Address" className="footer-input" />
            </div>
            <textarea placeholder="Leave your message..." className="footer-textarea"></textarea>
            <button type="submit" className="footer-button">Send It Now</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p style={{fontSize:20}}>maker | Show me your catchy slogan!</p>
        <div className="footer-icons">
          <FaFacebookF className="icon-styles" />
          <FaTwitter className="icon-styles" />
          <FaInstagram className="icon-styles" />
          <FaRss className="icon-styles" />
        </div>
      </div>
    </footer>
  );
}
export default Footer