import { render, screen, fireEvent } from '@testing-library/react';
import RegisterPage from './RegisterPage';

    describe('username validation', () => {
        test('shows error for invalid username', () => {
            render(<RegisterPage />);
            const usernameInput = screen.getByLabelText('Username:');
            
            fireEvent.change(usernameInput, { target: { value: 'weak' } });
            expect(screen.getByText(/Username must be at least 8 characters/)).toBeInTheDocument();
        });

        test('accepts valid username', () => {
            render(<RegisterPage />);
            const usernameInput = screen.getByLabelText('Username:');
            
            fireEvent.change(usernameInput, { target: { value: 'StrongPass1!' } });
            expect(screen.queryByText(/Username must be at least 8 characters/)).not.toBeInTheDocument();
        });
    });

    describe('mobile validation', () => {
        test('accepts valid UK mobile starting with 07', () => {
            render(<RegisterPage />);
            const mobileInput = screen.getByLabelText('UK mobile mumber:');
            
            fireEvent.change(mobileInput, { target: { value: '07123456789' } });
            expect(screen.queryByText(/Mobile number must start with/)).not.toBeInTheDocument();
        });

        test('accepts valid UK mobile starting with +44', () => {
            render(<RegisterPage />);
            const mobileInput = screen.getByLabelText('UK mobile mumber:');
            
            fireEvent.change(mobileInput, { target: { value: '+44123456789' } });
            expect(screen.queryByText(/Mobile number must start with/)).not.toBeInTheDocument();
        });

        test('shows error for invalid mobile format', () => {
            render(<RegisterPage />);
            const mobileInput = screen.getByLabelText('UK mobile mumber:');
            
            fireEvent.change(mobileInput, { target: { value: '06123456789' } });
            expect(screen.getByText(/Mobile number must start with/)).toBeInTheDocument();
        });
    });