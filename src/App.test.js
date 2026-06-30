// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders InfraCore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/InfraCore/i);
    expect(titleElement).toBeInTheDocument();
});
