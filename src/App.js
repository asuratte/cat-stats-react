import './App.scss';
import BreedCard from './components/BreedCard';
import logo from './images/cat-stats-icon.svg';


const App = () => {
  let currentYear = new Date().getFullYear();

  return (
      <div className="d-flex flex-column h-100">
        <div className="flex-shrink-0">
          <header className="py-4">
            <div className="container text-center">
              <div className="logo-container d-flex justify-content-center align-items-baseline">
                <img src={ logo } alt="CatStats Logo" className="cat-stats-icon" />
                <h1>CatStats</h1>
              </div>
              <p>Learn more about your favorite four-legged friends</p>
            </div>
          </header>
          <main className="mb-4">
            <BreedCard />
          </main>
        </div>
        <footer className="py-4 footer mt-auto">
          <div className="container text-center">
           &copy;{ currentYear } CatStats. All rights reserved.
          </div>
        </footer>
      </div>
  );
}

export default App;
