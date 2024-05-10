import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">
        <div className="navTab">
          <p>CRYPTO PRICES</p>
        </div>
      </Link>

      <Link to="/currencies">
        <div className="navTab">
          <p>CURRENCIES</p>
        </div>
      </Link>
    </div>
  );
}