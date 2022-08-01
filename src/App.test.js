import { render, screen } from '@testing-library/react';
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
  });