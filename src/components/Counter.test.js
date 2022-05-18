import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

test('click on add increase the value', () => {
    render(<Counter />);
    screen.debug()
    const btnEl = screen.getByRole('button', { name: '+' });
    fireEvent.click(btnEl)

    const textCounter = screen.getByText(/The value is: 1/i)
    expect(textCounter).toBeInTheDocument();
});

test('click on minus decrease the value', () => {
    render(<Counter />);
    screen.debug()
    const inputEl = screen.getByLabelText(/count/i);
    fireEvent.change(inputEl, { target: { value: '5' } });

    const btnEl = screen.getByRole('button', { name: '-' });
    fireEvent.click(btnEl)

    const textCounter = screen.getByText(/The value is: 4/i)
    expect(textCounter).toBeInTheDocument();
});



