import logo from './logo.svg';
import './App.css';
import BanquetHeroSection from './components/header';
import WhyChooseUs from './components/choose/choose';
import GalleryComponent from './components/gallaryhome/gallaryhome';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
    <BanquetHeroSection/>
    <WhyChooseUs/>
    <GalleryComponent/>
   <Footer/>
    </div>
  );
}

export default App;
