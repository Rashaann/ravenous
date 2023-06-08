import logo from './logo.svg';
import './App.css';
import Business from './Business';

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Business
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
