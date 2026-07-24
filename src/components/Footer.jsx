import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer-container">
      <div className="footer-content">
        
        {/* LEFT SIDE: Enquiry Form */}
        <div className="footer-form-section">
          <h3 className="footer-heading">Enquire Now</h3>
          <form className="enquiry-form">
            <input type="text" placeholder="Your Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <textarea placeholder="Your Queries or Destination..." rows="4" required></textarea>
            <button type="submit" className="btn-submit">Send Enquiry</button>
          </form>
        </div>

        {/* RIGHT SIDE: Social Links & Info */}
        <div className="footer-info-section">
          <h3 className="footer-heading">Connect With Us</h3>
          <p>Plan your next adventure with ANNANYA VERSE.</p>
          
          <div className="social-links">
            {/* Phone Link: Opens the dialer */}
            <a href="tel:+918617593288" className="social-btn">
              Call Us
            </a>
            
            {/* WhatsApp Link: Opens the WhatsApp chat directly */}
            <a href="https://wa.me/917439282123" target="_blank" rel="noreferrer" className="social-btn">
              WhatsApp
            </a>
            
            {/* Email Link: Opens the default email app */}
            <a href="mailto:anannyasantra99@gmail.com" className="social-btn">
              Gmail
            </a>

            {/* Social Media placeholders */}
            <a href="your_insta_link_here" target="_blank" rel="noreferrer" className="social-btn">
              Instagram
            </a>
            <a href="your_facebook_link_here" target="_blank" rel="noreferrer" className="social-btn">
              Facebook
            </a>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 ANNANYA VERSE. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;