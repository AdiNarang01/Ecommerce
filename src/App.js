import "./App.css";
import Header from "./component/header/header";
import Hero from "./component/HeroSection/hero";
import Slider from "./component/slider/slider";
import Virtual from './component/virtual/virtual';
import Product from "./component/Products/Product";
import Testimonial from "./component/testimonials/Testimonial";
import Footer from "./component/footer/footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Product/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
