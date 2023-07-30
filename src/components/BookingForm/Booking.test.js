import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('Booking form unit test', () => {
    const dispatchOnDateChange = jest.fn();
    const submitData = jest.fn();

    test('should correctly render all fields', async () => {
        render(
            <BookingForm submitData={submitData} />
        );

        const dateInput = screen.getByLabelText(/Date/);
        const timeSelect = screen.getByLabelText(/Time/);
        const numberOfGuestsInput = screen.getByLabelText(/Number of Guests/);
        const occasionSelect = screen.getByLabelText(/Occasion/);
        const submitButton = screen.getByRole('button');

        expect(dateInput).toBeInTheDocument();
        expect(dateInput).toHaveAttribute('type', 'date');
        expect(dateInput).toHaveAttribute('id', 'date');

        expect(timeSelect).toBeInTheDocument();
        expect(timeSelect).toHaveAttribute('id', 'time');

        expect(numberOfGuestsInput).toBeInTheDocument();
        expect(numberOfGuestsInput).toHaveAttribute('id', 'numberOfGuests');
        expect(numberOfGuestsInput).toHaveAttribute('type', 'number');

        expect(occasionSelect).toBeInTheDocument();
        expect(occasionSelect).toHaveAttribute('id', 'occasion');

        expect(submitButton).toBeInTheDocument();
        expect(submitButton).toHaveAttribute('type', 'submit');
    });
})
