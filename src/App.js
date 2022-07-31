import './App.scss';
import BreedCard from './components/BreedCard';
import logo from './images/cat-stats-icon.svg';


const App = () => {
  let currentYear = new Date().getFullYear();

  return (
      <div class="d-flex flex-column h-100">
        <div class="flex-shrink-0">
          <header>
            <div className="container mt-4 text-center">
              <div className="logo-container d-flex justify-content-center align-items-baseline">
                <img src={ logo } alt="CatStats Logo" className="cat-stats-icon" />
                <h1>CatStats</h1>
              </div>
              <p>Learn more about your favorite four-legged friends</p>
            </div>
          </header>
          <main className="my-4">
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
