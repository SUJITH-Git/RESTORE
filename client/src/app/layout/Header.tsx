import { DarkMode, ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { color, display } from "@mui/system";
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
const navStyle={
    color:'inherit',
    typography:'h6',
    '&:hover':{
        color:'grey.500'
    },
    '&.active':{
        color:'text.secondary'
    }
}
   

export default function Header({darkMode,handleThemeChange}:Props){
    return(
        <>
        <AppBar position='static' sx={{mb:4}}>
            <Toolbar sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Box display='flex' alignItems='center'>
                <Typography variant='h6' component={NavLink} to='/' sx={{color:'inherit', textDecoration:'none'}}>
                    RE-STORE-APP
                </Typography>
                <Switch checked={darkMode} onChange={handleThemeChange}></Switch>
                </Box>
               

                <List sx={{display:'flex'}}>
                    {
                        midLinks.map(({title,path})=>(
                            <ListItem
                             component={NavLink}
                             to={path}
                             key={path}
                             sx={navStyle}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))
                    }
                </List>

                <Box display='flex' alignItems='center'>
                <IconButton size='large' sx={{color:'inherit'}}>
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCart/>
                    </Badge>
                </IconButton>
                <List sx={{display:'flex'}}>
                    {
                        rightLinks.map(({title,path})=>(
                            <ListItem
                             component={NavLink}
                             to={path}
                             key={path}
                             sx={navStyle}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))
                    }
                </List>
                </Box>
          
            </Toolbar>  
        </AppBar>
        </>
    );
}