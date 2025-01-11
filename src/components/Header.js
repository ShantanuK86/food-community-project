import { Link } from "react-router-dom";
 
const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <h1 className="header-title">Shantanu's Foodary</h1>
        <p>"Taste the magic of your kitchen"</p>
      </div>
      <div className="header-links">
        <Link className="header-items" to="/"><b>Home</b></Link>
        <Link className="header-items" to="/community"><b>Community</b></Link>
        <Link className="header-items" to="/recipe"><b>Recipe</b></Link>
      </div>
    </div>
  );
}
 
export default Header;
