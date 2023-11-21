import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials.jsx/Testimonials";


const Home = () => {
          return (
                    <div>
                              <Helmet>
                                        <title>Bistro Boss | Home</title>
                              </Helmet>
                              <Banner></Banner>
                              <Category></Category>
                              <PopularMenu></PopularMenu>
                              <Featured></Featured>
                              <Testimonials></Testimonials>
                    </div>
          );
};

export default Home;