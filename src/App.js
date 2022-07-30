import './App.scss';
import BreedCard from './components/BreedCard';


const App = () => {
  let currentYear = new Date().getFullYear();

  return (
      <div>
        <header>
          <div className="container mt-5 text-center">
              <h1>CatStats</h1>
          </div>
        </header>
        <main className="flex-shrink-0 container my-4">
          <BreedCard />
        </main>
        <footer className="flex-shrink-0 py-4 bg-light">
          <div className="container text-center">
           &copy;{ currentYear } CatStats. All rights reserved.
          </div>
        </footer>
      </div>
  );
}

export default App;
