import './App.css'; 
import Background from './components/Background';
import NavBar from './components/NavBar';
// Import the component AND the data array from the same file
import DestinationCard, { destinationsData } from './components/DestinationCard';
import Footer from './components/Footer';

function App() {
  return (
    <Background>
      <NavBar />
      
      <div className="cards-wrapper">
        {/* We map over the imported array here */}
        {destinationsData.map((dest) => (
          <DestinationCard 
            key={dest.id}
            title={dest.title}
            duration={dest.duration}
            price={dest.price}
            image={dest.image}
          />
        ))}
      </div>
      
      <Footer />
      
    </Background>
  );
}

export default App;