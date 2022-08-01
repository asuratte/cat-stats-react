import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the app', async () => {
  render(<App />);
  expect(screen.getByRole("heading")).toHaveTextContent(/CatStats/);
  expect(screen.getByRole("img")).toBeInTheDocument();
  const tagline = await screen.findByText('Learn more about your favorite four-legged friends');
  expect(tagline).toBeInTheDocument();
  const prevButton = await screen.findByText('Previous');
  expect(prevButton).toBeDisabled();
  const nextButton = await screen.findByText('Next');
  expect(nextButton).toBeInTheDocument();
  const randomButton = await screen.findByText('Get Random Breed');
  expect(randomButton).toBeInTheDocument();
  const selectBox = await screen.findByText('Select a breed...');
  expect(selectBox).toBeInTheDocument();
  const footer = await screen.findByText('©2022 CatStats. All rights reserved.');
  expect(footer).toBeInTheDocument();
  const name = await screen.findAllByText('Abyssinian');
  expect(name[1]).toBeInTheDocument();
  const temperament = await screen.findByText('Active, Energetic, Independent, Intelligent, Gentle');
  expect(temperament).toBeInTheDocument();
  const desc = await screen.findByText('The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.');
  expect(desc).toBeInTheDocument();
  const lifespan = await screen.findByText('14 - 15 years');
  expect(lifespan).toBeInTheDocument();
  const origin = await screen.findByText('Egypt');
  expect(origin).toBeInTheDocument();
  const weight = await screen.findByText('7 - 10 lbs');
  expect(weight).toBeInTheDocument();
  const wikipedia = await screen.findByText('Wikipedia');
  expect(wikipedia).toBeInTheDocument();
  const vetstreet = await screen.findByText('Vetstreet');
  expect(vetstreet).toBeInTheDocument();
  const vca = await screen.findByText('VCA Animal Hospitals');
  expect(vca).toBeInTheDocument();
});

test('should change breed name on Get Random Breed button click', async () => {
  render(<App />);
  const name = await screen.findAllByText('Abyssinian');
  expect(name[1]).toBeInTheDocument();
  const randomButton = await screen.findByText('Get Random Breed');
  fireEvent.click(randomButton);
  const name2 = await screen.findAllByText('Abyssinian');
  expect(name2[1]).toBeUndefined();
});