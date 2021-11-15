import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";


const Header = () => {
    const history = useHistory();
    return (
        <Box elevation={1} mb={10} sx={{
            flexGrow: 1
        }}>
            <AppBar position="static" sx={{
                "backgroundColor": "white",
            }}>
                <Toolbar>
                    <Box ml={15}>
                        <span
                            style={{
                                "fontSize": " 25px",
                                "fontWeight": "800",
                                "color": "rgb(0, 0, 0)",
                            }}
                        >H
                            <span style={{
                                "textDecoration": "underline",
                                "color": " rgb(68, 0, 153)"
                            }}>O</span>ST</span>
                    </Box>
                    <Button onClick={() => history.push("/floor-plan")}>Floors</Button>
                </Toolbar>
            </AppBar>
        </Box >
    );
}

export default Header
