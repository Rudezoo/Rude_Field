import React, { useState } from 'react'
import clsx from 'clsx';
import { Button, Grid, Container, Typography, TextField, Paper, OutlinedInput, InputAdornment, Avatar, IconButton, InputBase,Drawer } from '@material-ui/core'
import { fade, makeStyles } from '@material-ui/core/styles';
import { Search, ChevronLeft, ChevronRight, Menu, Palette ,ChevronLeftOutlined} from '@material-ui/icons';
import { useSpring, animated } from 'react-spring';

import MainMenu from './MainMenu';

const drawerWidth = 240;
/* const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  }); */
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontfamily: "Noto",
        padding: "20px",
        fontsize: "35px",
    
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        height: "100px"
    },
    headers: {
        fontWeight: 700
    },
    search: {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.25),
        },



    },
    searchbox: {
        willChange: "width"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
       
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor:"#303030"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft:0
       
    },

    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: drawerWidth,
    },
}));


const Main = () => {

    const classes = useStyles();

    const [checked, setchecked] = useState(false);
    const [state, toggle] = useState(true)
    const [open, setopen] = useState(false);

    const style = useSpring({
        width: state ? "25px" : "100%",
    });


    const OpenProfile = () => {
        window.open("https://github.com/poompal");
    }

    const CollapIn = () => {
        toggle(!state)
    }
    return (

        <> 
   
        <div className={classes.root}>
            <div className={classes.toolbar}>
                 <Drawer open={open} variant="persistent" anchor="left" classes={{
                    paper: classes.drawerPaper
                }} style={{
                    backgroundColor:"black"
                }}>
                    <div>
                        <IconButton onClick={() => setopen(!open)} style={{
                            float: "right"
                        }}>
                            <ChevronLeftOutlined style={{
                                color:'white'
                            }}></ChevronLeftOutlined>
                        </IconButton>
                    </div>

                    <MainMenu></MainMenu>
                </Drawer> 
                
            </div>

            <main className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}>

                                  <Grid container id="HeaderGrid">
                        <Grid item xs={9}>

                            <Typography className={classes.headers} variant="h4" component="h2"><img src='favicon.ico' width="26px" height="26px"></img> Rudylog</Typography>

                        </Grid>
                        <Grid item xs={2} align="center" style={{
                            display: "flex",
                            justifyContent: "center",
                            alignSelf: "center"
                        }}>

                            <div className={classes.search}>

                                <animated.div className={classes.searchbox} style={style}>
                                    <InputBase placeholder="Search" startAdornment={
                                        <InputAdornment>
                                            <Search>

                                            </Search>
                                        </InputAdornment>
                                    } onClick={CollapIn}>

                                    </InputBase>

                                </animated.div>


                            </div>

                        </Grid>
                        <Grid item xs={1} align="center">
                            <IconButton onClick={OpenProfile}>
                                <Avatar src="https://avatars1.githubusercontent.com/u/18670121?s=460&u=b7abce2f5eef46b61f989a7734c5f36413e8232c&v=4" />
                            </IconButton>

                        </Grid>

                        <Grid item xs={12} style={{
                            display:"flex"
                        }}>
                            <IconButton onClick={() => setopen(!open)}>
                                <Menu></Menu>
                            </IconButton>
                            <div style={{
                                alignSelf:"center",
                                width:"100%"
                            }}>
                                aa
                            </div>
                        </Grid>
                    </Grid> 

            </main>
        </div>


        </>

    );

}

export default Main;