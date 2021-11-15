import React from 'react'

const FloorPlanTableGrid = () => {
    return (
        <Grid item container xs={10} ml={1} rowSpacing={5}>
            <Grid item xs={12}>
                <DataGrid
                    disableSelectionOnClick
                    checkboxSelection
                    loading={floorsState.loading ? true : false}
                    rows={rowsToRender}
                    columns={columns}
                    autoHeight
                />
            </Grid>
        </Grid>
    )
}

export default FloorPlanTableGrid
