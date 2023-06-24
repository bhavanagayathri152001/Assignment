import "./index.css";
import { Link } from "react-router-dom";

const LeftPanel = () => (
  <div className="left-panel-container">
    <div className="components-container">
      <Link to="/" className="link-item">
        <p className="component-text">Home</p>
      </Link>
      <Link to="/contact" className="link-item">
        <p className="component-text">Contact</p>
      </Link>
      <Link to="/information" className="link-item">
        <p className="component-text">Information</p>
      </Link>
      <Link to="/guide" className="link-item">
        <p className="component-text">Guide</p>
      </Link>
    </div>
  </div>
);
export default LeftPanel;
