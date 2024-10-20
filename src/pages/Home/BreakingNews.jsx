import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className=" flex">
      <button className="btn btn-success ">Breaking News</button>
      <Marquee className="py-5" pauseOnHover={true} speed={100}>
        <Link>
        I can be a React component, multiple React components, or just some
        text.Success is not the key to happiness. Happiness is the key to success.
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
