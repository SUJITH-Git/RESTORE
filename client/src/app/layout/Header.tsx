import { DarkMode } from "@mui/icons-material";
import { AppBar, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { title } from "process";
import { NavLink } from "react-router-dom";

interface Props{
    darkMode : boolean;
    handleThemeChange:()=>void;
}
const midLinks=[
    {title:'catalog',path:'/catalog'},
    {title:'about',path:'/about'},
    {title:'contact',path:'/contact'}
]
const rightLinks=[
    {title:'login',path:'/login'},
    {title:'register',path:'/register'}
]
export default function Header({darkMode,handleThemeChange}:Props){
    return(
        <>
        <AppBar position='static' sx={{mb:4}}>
            <Toolbar>
                <Typography variant='h6'>
                    RE-STORE-APP
                </Typography>
                <Switch checked={darkMode} onChange={handleThemeChange}></Switch>
                <List>
                    {
                        midLinks.map(({title,path})=>(
                            <ListItem
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))
                    }
                </List>
            </Toolbar>  
        </AppBar>
        </>
    );
}