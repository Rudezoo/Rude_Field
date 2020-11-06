import React, { useState, useCallback, useEffect } from 'react'
import clsx from 'clsx';
import { Button, Grid, Container, Typography, TextField, OutlinedInput, InputAdornment, Avatar, IconButton, InputBase, Drawer, Divider, Box } from '@material-ui/core'
import { Card, CardContent, CardActions } from '@material-ui/core'
import { LinearProgress } from '@material-ui/core'
import { fade, makeStyles } from '@material-ui/core/styles';
import { Search, ChevronLeft, ChevronRight, Menu, Palette, ChevronLeftOutlined, GitHub } from '@material-ui/icons';
import { useSpring, animated, interpolate } from 'react-spring';
import Links from '@material-ui/core/Link';
import { HashRouter as Router, Link } from "react-router-dom";
import MainMenu from 'Components/Main/MainMenu';
import 'style/css/Main.css'
import Routers from 'Components/App/Router';

import mainimg from 'image/gas.png';
import mainimg_sub from 'image/gas2.gif';

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
        fontsize: "35px",
        height: "1000px",
        color: "white"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        height: "100px",
    },
    headers: {
        fontWeight: 700,
    },
    search: {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        width: "22px"

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
        backgroundColor: "rgba(0,0,0,0.5)",
        border: "0px"
    },
    content: {
        flexGrow: 1,
        /*         padding: theme.spacing(3), */
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,

    },

    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: drawerWidth,
    },
    anisvg: {
        width: "30px",
        height: "30px",
    },
    gas: {
        maxHeight: "68px",

        overflow: "hidden",
        opacity: "0.2",
        float: "right"

    },
    gas2: {
        maxHeight: "68px",

        overflow: "hidden",
        opacity: "0.2",
        float: "left"

    },


}));


const Main = ({ isLoggedIn }) => {

    const classes = useStyles();

    const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }))
    const interpFace = st.interpolate(o => `translate(,${105 + o / 4})`)
    const interpBg = xy.interpolate((x, y) => `perspective(400px) rotateY(${x / 60}deg) rotateX(${-y / 60}deg) translate3d(-50%, -50%, 0)`)
    const interpEye = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 400},${xy[1] / 200 + o / 2}) scale(1)`)
    const interpIris = interpolate([st, xy], (o, xy) => `translate(${xy[0] / 200},${xy[1] / 200 + o / 8})`)


    const onMove = useCallback(({ clientX: x, clientY: y }) => set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }), [])
    const onScroll = useCallback(e => set({ st: e.target.scrollTop / 30 }), [])

    const [checked, setchecked] = useState(false);
    const [state, toggle] = useState(true)
    const [open, setopen] = useState(false);
    const [progress, setProgress] = React.useState(10);

    const [menuvisible, setmenuvisible] = useState(true);

    const style = useSpring({
        width: state ? "22px" : "100%",
    });


    const OpenProfile = () => {
        window.open("https://github.com/poompal");
    }



    const CollapIn = () => {
        toggle(!state)
    }

    const Ontest = () => {
        console.log(document.getElementById("root").offsetWidth);
    }

    useEffect(() => {

    }, []);
    /*     const OnRudyClick=()=>{
    
            if(document.getElementById('Rudy_begin')===null && document.getElementById('Rudy_end')){
                document.getElementById('Rudy_end').id='Rudy_begin';
            }else if(document.getElementById('Rudy_end')===null&&document.getElementById('Rudy_begin')){
                document.getElementById('Rudy_begin').id='Rudy_end';
            }
        } */

    return (

        <>

            <div className={classes.root} onMouseMove={onMove} onScroll={onScroll} id="root">
                <div className="blur">
                    <Router>
                        <div className={classes.toolbar}>

                            <Drawer open={open} variant="persistent" anchor="left" classes={{
                                paper: classes.drawerPaper
                            }} style={{
                                backgroundColor: "black"
                            }}>
                                <div>
                                    <IconButton onClick={() => setopen(!open)} style={{
                                        float: "right"
                                    }}>
                                        <ChevronLeftOutlined style={{
                                            color: 'white'
                                        }}></ChevronLeftOutlined>
                                    </IconButton>
                                </div>
                                <button onClick={Ontest}>a</button>
                                <MainMenu></MainMenu>
                            </Drawer>

                        </div>

                        <main className={clsx(classes.content, {
                            [classes.contentShift]: open,
                        })}>

                            {/*       <Grid container id="HeaderGrid">
                        <Grid item xs={9}>
                            <Box display="flex">
                                <Box style={{
                                    paddingLeft:"25px",
                                    marginTop:"20px"
                                }} id="Rudy_begin">
                                    <animated.svg className={classes.anisvg} style={{ transform: interpBg }}>
                                        <animated.g transform={interpFace}>
                                            <circle fill="#000000" cx="15" cy="15" r="15" />

                                        </animated.g>
                                        <animated.g transform={interpEye}>
                                            <circle fill="#FFFFFF" cx="8" cy="12" r="6" />
                                            <circle fill="#FFFFFF" cx="22" cy="12" r="6" />
                                        </animated.g>
                                        <animated.g transform={interpIris}>
                                            <circle fill="#000000" cx="8" cy="12" r="2" />
                                            <circle fill="#000000" cx="22" cy="12" r="2" />
                                        </animated.g>

                                    </animated.svg>

                                </Box>
                                <Box id="Rudy_text">
                                    <Typography className={classes.headers} variant="h4" component="h2">
                                     
                                        Rudylog
                                     
                                 
                                </Typography>
                                </Box>
                                
                            </Box>



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


                    </Grid> */}


                            <header>

                                <Box style={{
                                    backgroundColor: "rgba(0, 0, 0, 0.8)",

                                    width: "100%",
                                    height: "80px",
                                }}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={2}>
                                            <Box display="flex " >
                                                <IconButton onClick={() => setopen(!open)} style={{
                                                    marginTop: "10px"
                                                }}>
                                                    <Menu ></Menu>
                                                </IconButton>
                                                <div style={{
                                                    marginTop: "20px"
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

                                                </div>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={8}>

                                            <Grid container spacing={0}>

                                                <Grid item xs={6}>
                                                    <div className={classes.gas}>
                                                        <img src={mainimg_sub} style={{

                                                            transform: "rotate(270deg)",
                                                            objectPosition: "160px 0px"
                                                        }} ></img>

                                                    </div>{menuvisible ?
                                                        <>
                                                            <div style={{
                                                                position: "absolute",
                                                                right: "50%",
                                                                float: "left",
                                                                marginRight: "100px",
                                                                marginTop: "25px"
                                                            }} id="menu1">
                                                                <Grid container spacing={6} >
                                                                    <Grid item xs={4}>
                                                                        <Link to='/tweet'>test1</Link>
                                                                    </Grid>
                                                                    <Grid item xs={4}>
                                                                        <Link to='/'>test2</Link>
                                                                    </Grid>
                                                                    <Grid item xs={4}>
                                                                        <Links color="inherit">test1</Links>
                                                                    </Grid>
                                                                </Grid>

                                                            </div>
                                                        </>
                                                        : null}

                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div className={classes.gas2}>

                                                        <img src={mainimg_sub} style={{
                                                            transform: "rotate(90deg)",
                                                            objectPosition: "-160px 0px"
                                                        }}></img>
                                                    </div>

                                                    <div style={{
                                                        position: "absolute",
                                                        left: "50%",
                                                        float: "right",
                                                        marginLeft: "100px",
                                                        marginTop: "25px"
                                                    }} id="menu1">
                                                        <Grid container spacing={6} >
                                                            <Grid item xs={4}>
                                                                <Links href="/" color="inherit">test1</Links>
                                                            </Grid>
                                                            <Grid item xs={4}>
                                                                <Links href="/" color="inherit">test1</Links>
                                                            </Grid>
                                                            <Grid item xs={4}>
                                                                <Links href="/" color="inherit">test1</Links>
                                                            </Grid>
                                                        </Grid>

                                                    </div>
                                                </Grid>

                                            </Grid>

                                        </Grid>
                                        <Grid item xs={2}>
                                            <Box position="relative">
                                                <GitHub onClick={OpenProfile} style={{
                                                    marginTop: "20px",
                                                    float:"right",
                                                    marginRight:"20px"
                                                }}></GitHub>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <div id="icondiv">
                                        <img src={mainimg} height="130px" ></img>
                                    </div>


                                </Box>


                                <Box display="flex" alignItems="center">
                                    {/*                         <Box>
                            <IconButton onClick={() => setopen(!open)}>
                                <Menu></Menu>
                            </IconButton>
                        </Box> */}
                                    <Box alignSelf="center" width="100%">
                                        <Typography component={'span'}>
                                            {/*  <Card style={{
                                    paddingTop: "10px"
                                }}>
                                    <CardContent>
                                        <Box display="flex" alignItems="center">
                                            <Box width="100%" >
                                                <LinearProgress variant="determinate" value={progress} />
                                            </Box>
                                            <Box minWidth={35} textAlign="center">
                                                <Typography component={'span'} variant="body2" color="textSecondary">
                                                    {progress}%
                                                </Typography>

                                            </Box>

                                        </Box>


                                    </CardContent>
                                </Card> */}
                                        </Typography>
                                    </Box>


                                </Box>
                                <Divider style={{
                                    margin: "20px"
                                }}></Divider>
                            </header>
                            
                                <Box id="Content">
                                    <Routers isLoggedIn={isLoggedIn}></Routers>
                                </Box>

                           

                            <footer>
                                <Box>
                                    &copy;{new Date().getFullYear()}Rude_zoo
                        </Box>
                            </footer>
                        </main>
                    </Router>

                </div>

            </div>


        </>

    );

}

export default Main;