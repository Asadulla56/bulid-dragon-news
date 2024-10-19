import Header from "../Shared/Header/Header";
import Navber from "../Shared/Navbar/Navber";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navber></Navber>
            <h2 className="text-3xl font-poppins">This is home </h2>
        </div>
    );
};

export default Home;