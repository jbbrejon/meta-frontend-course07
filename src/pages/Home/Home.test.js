import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders page name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
