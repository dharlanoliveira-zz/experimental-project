import React from "react";
import _ from "lodash"
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function ItemsList({items, emptyListRender, listItemRender}) {

    function renderEmptyList() {
        return (
            <Box width={300} bgcolor="grey.300" p={1} my={0.5}>
                <Typography>{emptyListRender()}</Typography>
            </Box>
        )
    }

    function renderItems(items) {
        return (
            <>
                {items.map(renderItem)}
            </>
        )
    }

    function renderItem(item, index) {
        return (
            <Box key={index} width={300} bgcolor="grey.300" p={1} my={0.5}>
                <Typography>{listItemRender(item)}</Typography>
            </Box>
        )
    }

    return (
        <>
            {!_.isEmpty(items) && renderItems(items)}
            {_.isEmpty(items) > 0 && renderEmptyList()}
        </>
    )
}

export {ItemsList}