import React from 'react';
import { render } from '@testing-library/react';
import Alert from '../components/Alert';

describe('Alert', () => {
    it('does not get displayed there is not message', () => {
        const { asFragment } = render(<Alert />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('displays an error message', () => {
        const { getByText, asFragment } = render(<Alert message="Error!"/>);

        expect(getByText(/Error/).textContent).toBe("Error!");
        expect(asFragment()).toMatchSnapshot();
    });

    it('displays a success message', () => {
        const { getByText, asFragment } = render(<Alert message="Success!" success />);

        expect(getByText(/Success/).textContent).toBe("Success!");
        expect(asFragment()).toMatchSnapshot();
    });
});