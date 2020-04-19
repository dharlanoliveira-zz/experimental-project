//Teste usando react-testing-library
import React from 'react';

import { fireEvent, render, waitForElement } from '@testing-library/react';

import Button from './Button';

describe('test for Button component', () => {
    it('teste Button', async() => {
        const { getByTestId } = render(<Button />)
        const btnNode = await waitForElement(
            () => getByTestId('button')
        )
        fireEvent.click(btnNode)
    })

})