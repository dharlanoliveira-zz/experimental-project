import React from 'react';
import {PostsList} from './PostsList'
import {store, withProvider} from "../../.storybook/provider";
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from "@storybook/react";


storiesOf('Posts List',module)
    .addDecorator(withKnobs)
    .addDecorator(withProvider)
    .add('Empty List', () => {
        let payload =  { data: []}
        store.dispatch({type: 'get_post_success', payload})
        return <PostsList/>
    })
    .add('Two posts', () => {
        let payload =  { data: [{description: 'post1'},{description: 'post2'}]}
        store.dispatch({type: 'get_post_success', payload})
        return <PostsList/>
    })
