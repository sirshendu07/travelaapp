import './DestinationCard.css';

// 1. Create and export the array here so other files can use it
export const destinationsData = [
  {
    id: 1,
    title: "LADAKH",
    duration: "6 Days 5 Nights",
    price: "₹25,000",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "KASHMIR",
    duration: "5 Days 4 Nights",
    price: "₹22,000",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "DUARS",
    duration: "4 Days 3 Nights",
    price: "₹14,000",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop" 
  },
  {
    id: 4,
    title: "KERALA",
    duration: "7 Days 6 Nights",
    price: "₹28,000",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "MUNNAR",
    duration: "3 Days 2 Nights",
    price: "₹15,000",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "OOTY",
    duration: "4 Days 3 Nights",
    price: "₹16,000",
    image: "https://images.unsplash.com/photo-1605553554868-b7a42b10086c?q=80&w=600&auto=format&fit=crop"
  }
];

// 2. The actual Card Component
const DestinationCard = ({ title, duration, price, image }) => {
  return (
    <div className="card-container">
      <img 
        src={image} 
        alt={title} 
        className="card-image" 
      />
      
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        
        <div className="card-duration">
          {duration}
        </div>
        
        <div className="card-price">
          {price} <span className="price-subtext">/person</span>
        </div>
        
        <div className="card-actions">
          <button className="btn-book">Book Now</button>
          <button className="btn-details">See Details</button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;