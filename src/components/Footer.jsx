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
            
            {/* WhatsApp Link: Opens with pre-filled message */}
            <a 
              href="https://wa.me/917439282123?text=Hi%20ANNANYA%20VERSE!%20I%20am%20interested%20in%20your%20travel%20packages%20and%20would%20love%20to%20know%20more%20details." 
              target="_blank" 
              rel="noreferrer" 
              className="social-btn"
            >
              WhatsApp
            </a>
            
            {/* Email Link: Opens with pre-filled subject and body */}
            <a 
              href="mailto:anannyasantra99@gmail.com?subject=Travel%20Enquiry%20-%20ANNANYA%20VERSE&body=Hi%20ANNANYA%20VERSE,%0D%0A%0D%0AI%20was%20browsing%20your%20website%20and%20I%20want%20to%20know%20more%20details." 
              className="social-btn"
            >
              Gmail
            </a>

            {/* Social Media placeholders - Ready for your links! */}
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