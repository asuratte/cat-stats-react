import './App.scss';
import BreedCard from './components/BreedCard';
import logo from './images/cat-stats-icon.svg';


const App = () => {
  let currentYear = new Date().getFullYear();

  return (
      <div>
        <header>
          <div className="container mt-4 text-center">
            <div className="logo-container d-flex justify-content-center align-items-baseline">
              <img src={ logo } alt="CatStats Logo" className="cat-stats-icon" />
              <h1>CatStats</h1>
            </div>
            <p>Learn more about your favorite four-legged friends</p>
          </div>
        </header>
        <main className="flex-shrink-0 my-4">
          <BreedCard />
        </main>
        <footer className="flex-shrink-0 py-4">
          <div className="container text-center">
           &copy;{ currentYear } CatStats. All rights reserved.
          </div>
        </footer>
      </div>
  );
}

export default App;
