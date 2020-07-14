import React from 'react';
import { render } from '@testing-library/react';
import SavedProperties from '../components/SavedProperties';

describe('SavedProperties', () => {
    test('it renders correctly against a snapshot', () => {
        const mockUserId = "mockId"
        const { asFragment } = render (<SavedProperties userId={mockUserId}/>)
        
        expect(asFragment()).toMatchSnapshot();
    });

    test('component elements render correctly', () => {
        const mockUserId = "mockId"
        const { getByTestId } = render (<SavedProperties userId={mockUserId}/>)
        
        const component = getByTestId("saved-properties");

        expect(component).toBeInTheDocument();
    });
});