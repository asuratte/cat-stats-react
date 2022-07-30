import './App.scss';
import BreedCard from './components/BreedCard';


const App = () => {
  let currentYear = new Date().getFullYear();

  return (
      <div>
        <header>
          <div class="container mt-5 text-center">
              <h1>CatStats</h1>
          </div>
        </header>
        <main class="flex-shrink-0 container my-4">
          <BreedCard />
        </main>
        <footer class="mt-auto py-3 bg-light text-center fixed-bottom">
          <div class="container">
           &copy;{ currentYear } CatStats. All rights reserved.
          </div>
        </footer>
      </div>
  );
}

export default App;
