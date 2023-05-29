import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sory</h2>
      <p>this page not found</p>
      <Link>Back to the Home page</Link>
    </div>
  );
};

export default NotFound;
