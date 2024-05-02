import "./Footer.css";

import youtube_icon from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook_icon} alt="Facebook Icon" />
        <img src={instagram_icon} alt="Instagram Icon" />
        <img src={twitter_icon} alt="Twitter Icon" />
        <img src={youtube_icon} alt="Youtube Icon" />
      </div>

      <ul>
        <li>Audio Desription</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>

      <p className="copyright-text">© 1997-2023 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
