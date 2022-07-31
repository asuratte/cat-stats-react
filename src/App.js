import './App.scss';
import BreedCard from './components/BreedCard';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Header from './components/Header';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Hearts } from 'react-loader-spinner';

const App = () => {

  const [breedsList, setBreedsList] = useState(null);
  const [currentBreedNumber, setCurrentBreedNumber] = useState(0);
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const options = {
      method: 'GET',
      url: 'https://api.thecatapi.com/v1/breeds'
    };
    axios.request(options).then((response) => {
      setBreedsList(response.data);
      setLoading(false);
      setData(true);
    }).catch((error) => {
      console.error(error);
      setLoading(false);
      setError(true);
      setData(false);
    })
  }, []);

  const getNext = () => {
    if (currentBreedNumber < (breedsList.length - 1)) {
      setCurrentBreedNumber(currentBreedNumber + 1)
    }
  }

  const getPrevious = () => {
    if (currentBreedNumber > 0) {
      setCurrentBreedNumber(currentBreedNumber - 1)
    }
  }

  const getRandom = () => {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * breedsList.length)
    } while (randomNumber === currentBreedNumber);
    setCurrentBreedNumber(randomNumber)
  }

  const handleSelectionChange = event => {
    setCurrentBreedNumber(Number(event.target.value))
  };

  if (loading) {
    return (
      <div className="container text-center">
        Loading <Hearts color="rgb(230, 83, 197)" height={80} width={80} wrapperClass="loader" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container text-center">
        <p className="alert alert-danger">An error has occurred while loading CatStats. Please try again.</p>
      </div>
    );
  }

  if (data) {
    return (
      <div className="d-flex flex-column h-100">
        <div className="flex-shrink-0">
        <Header />
          <main className="mb-4">
            <Navigation breedsList={breedsList} currentBreedNumber={currentBreedNumber} handleSelectionChange={handleSelectionChange} getPrevious={getPrevious} getNext={getNext} getRandom={getRandom} />
            <BreedCard breedsList={breedsList} currentBreedNumber={currentBreedNumber} />
          </main>
        </div>
        <Footer />
      </div>
    );
  }

}

export default App;