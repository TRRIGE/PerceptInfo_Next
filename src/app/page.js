'use client'
import Aboutus from './components/Aboutus';
import Services from './components/Services';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Carousel from './components/Carousel';

const Home = () => {
  return (
    <>
      <Carousel />
      <div className="container">
        <Aboutus />
        <Services />
        <Clients />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
};

export default Home;
