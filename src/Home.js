import { createElement } from "react";
import BlogList from "./BlogLIst";
import useFetch from "./useFetch";
const Home = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>loding ...</div>}
      {blogs && (
        <div>
          <h3>All Blog</h3>
          <BlogList blogs={blogs} />
        </div>
      )}
    </div>
  );
};

export default Home;
//<h3>All Blog</h3>   <BlogList blogs={blogs} />
