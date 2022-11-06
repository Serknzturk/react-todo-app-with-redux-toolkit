import { screen } from '@testing-library/react';
import {renderWithProviders} from './test-utils.js';
import App from './App';

test('renders main App', () => {
    renderWithProviders(<App />);
    const titleElement = screen.getByText(/ToDo List/i);
    expect(titleElement).toBeInTheDocument();
});
