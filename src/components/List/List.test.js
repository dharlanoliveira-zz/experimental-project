//Teste usando react-testing-library
import React from 'react';

import { fireEvent, render, waitForElement } from '@testing-library/react';
import List from './List';
import { Input } from '@material-ui/core';

describe('test for List component', () => {
    it('teste List', async() => {
        const { getByTestId, getByText } = render(<List />)
        const fieldNode = await waitForElement(
            () => getByTestId('form-field')
        )
        fireEvent.change(fieldNode, { target: { value: 'task1'}})
        expect(fieldNode.value).toEqual('task1')

        const btnNode = await waitForElement(
            () => getByTestId('form-button')
        )
        fireEvent.click(btnNode)

        // const tableNode = await waitForElement(
        //     () => getByTestId('table')
        // )
        // console.log(table.Node.innerHTML)
        
        const tdNode = await waitForElement(
            () => getByText('task1')
        )
        expect(tdNode).toBeDefined()
        
    })

})