import logo from './logo.svg';
import './App.css';
import Business from './Business';
import BusinessList from './BusinessList';

function App() {
  let hardcodedBusiness = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  }

  return (
    <div className="App">
      <BusinessList
        image={hardcodedBusiness.imageSrc}
        name={hardcodedBusiness.name}
        address={hardcodedBusiness.address}
        city={hardcodedBusiness.city}
        state={hardcodedBusiness.state}
        zipcode={hardcodedBusiness.zipCode}
        category={hardcodedBusiness.category}
        rating={hardcodedBusiness.rating}
        reviewCount={hardcodedBusiness.reviewCount} />
    </div>
  );
}

export default App;
