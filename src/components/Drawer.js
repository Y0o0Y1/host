import React, { useState, useEffect } from 'react'

import {
    Paper,
} from "@mui/material";
const Drawer = (props) => {
    return (
        <Drawer
            anchor="right"
            open={props.drawerToggler}
            onClose={() => props.setDrawerToggler((prev) => !prev)}
        >
            <Paper>
                {props.children}
            </Paper>
        </Drawer>
    )
}

export default Drawer
