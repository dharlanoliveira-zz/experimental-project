import {PostsList} from "./PostsList";
import axios from 'axios';
import React from "react";
import {renderWithRedux, fireEvent, screen, getTextFieldByLabel, waitFor} from '../test/test-utils'

test('should add new posts list', async () => {
    let emptyPosts = {
        data: []
    };

    let onePost = {
        data: [{description: 'post1', language: 'pt'}]
    };

    let languageData = {
        data: {
            language: 'ptbr'
        }
    };

    axios.get
        .mockResolvedValueOnce(emptyPosts)
        .mockResolvedValueOnce(onePost)


    axios.post
        .mockResolvedValueOnce(languageData)

    const {debug} = renderWithRedux(<PostsList/>)
    debug()
    fireEvent.change(getTextFieldByLabel(screen, 'Novo Post'), {target: {value: '23'}})
    fireEvent.click(screen.getByText('Add Post'))
    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(2))
    expect(screen.queryByText('post1 - pt')).toBeVisible()
});

test('should render posts list', async () => {
    let data = {
        data: [{description: 'post1', language: 'pt'}, {description: 'post2', language: 'en'}]
    };

    axios.get.mockResolvedValue(data)

    const {debug} = renderWithRedux(<PostsList/>)
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1))
    debug()
    await screen.findByText('post1 - pt')
    expect(screen.queryByText('post1 - pt')).toBeVisible()
    expect(screen.queryByText('post2 - en')).toBeVisible()
});


