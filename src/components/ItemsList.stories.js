import React from 'react';
import _ from "lodash"
import {withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from "@storybook/react";
import {ItemsList} from "./ItemsList";

storiesOf('Items List', module)
    .addDecorator(withKnobs)
    .add('Empty List', () => {
        let renderEmpty = () => (<>empty</>)
        return <ItemsList items={[]} emptyListRender={renderEmpty}/>
    })
    .add('Two posts', () => {
        let items = [{parameter: 'content1'}, {parameter: 'content2'}]
        let renderItem = (item) => (<>{item.parameter}</>)
        return <ItemsList items={items} listItemRender={renderItem}/>
    })
    .add('Twenty posts', () => {
        let items = _.times(20, (index) => ({parameter : `description ${index}`}))
        let renderItem = (item) => (<>{item.parameter}</>)
        return <ItemsList items={items}  listItemRender={renderItem}/>
    })

