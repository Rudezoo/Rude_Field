import { Box, Button, IconButton, makeStyles } from '@material-ui/core';

import React, { useState, useCallback, useEffect, useRef } from 'react'
import { useTransition } from 'react-spring'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { Transition, animated } from 'react-spring/renderprops'


import 'style/css/Auth.css'

const images = [
    'https://cdnimg.melon.co.kr/cm2/album/images/103/46/650/10346650_500.jpg?14a08050b8c6adc879b6e0cf587d456a/melon/quality/80/optimize',
    'https://img7.yna.co.kr/etc/inner/KR/2020/01/03/AKR20200103136600005_01_i_P2.jpg',
    'https://img.insight.co.kr/static/2019/11/05/700/6dxow23eff21tzf0t6z3.jpg',
    'https://img.sbs.co.kr/newsnet/etv/upload/2018/09/12/30000612826_1280.jpg',
    'https://image.bugsm.co.kr/artist/images/1000/800491/80049126.jpg'
]

/* const urlss='url('+ 'images[0]' + ')'

const useStyles = makeStyles((theme) => ({
    BannerImage: {
        width:"100%",
        height:"200%",
        backgroundSize:"cover",
        backgroundimage: urlss,
    },

})); */



const Auth = () => {
    /* const classes = useStyles(); */
    const [pagevalue, setpagevalue] = useState(0);
    /*     const pages = (({ style }) => <animated.div className="BannerImage" style={{ ...style, backgroundImage: `url(${images[pagevalue]})` }}>
            <p style={{
                color: "black"
            }}>
                hello
             </p>
        </animated.div>); */

    const transitions = useTransition(pagevalue, p => p, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)', },
        enter: { opacity: 1, transform: 'translate3d(0,0,0)', },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)', },
    })

    const OnBannerChange = (e) => {
        if (pagevalue - 1 >= 0) {
            setpagevalue((pagevalue - 1) % (images.length));
        } else {
            setpagevalue(images.length - 1);
        }


    }

    const OnBannerChange2 = (e) => {

        setpagevalue((pagevalue + 1) % (images.length));


    }



    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center">
                <div className="Banner" >
                    <IconButton onClick={OnBannerChange}>
                        <ArrowBackIos ></ArrowBackIos>
                    </IconButton>
                    {/*  {transitions.map(({ item, props, key }) => {
                        const Page=pages;
                        return <Page key={key} style={props} />
                    })}  */}


                    <Transition
                        native
                        reset
                        unique
                        items={pagevalue}
                        /*  from={{ transform: 'translate3d(100%,0,0)' }}
                         enter={{ transform: 'translate3d(0,0px,0)' }}
                         leave={{ transform: 'translate3d(-50%,-0,0)' }}> */
                        from={{ opacity: 0, transform: 'translate(100%,0) scale(0.5,1) ' }}
                        enter={{ opacity: 1, transform: 'translate(0%,0) scale(1,1)' }}
                        leave={{ opacity: 0, transform: 'translate(-50%,0) scale(1)' }}>
                        {index => (style) => <animated.div className="BannerImage" style={{ ...style, backgroundImage: `url(${images[index]})` }}>
                            <p style={{
                                color: "black"
                            }}>
                               Test
                            </p>
                        </animated.div>}
                    </Transition>
                    {/*                     <div style={{
                         width:"100%",
                         height:"200%",
                         backgroundSize:"cover",
                        backgroundImage:`url(${images[pagevalue]})`,
                       
                    }}></div> */}







                    <IconButton onClick={OnBannerChange2}>
                        <ArrowForwardIos ></ArrowForwardIos>
                    </IconButton>
                </div>


            </Box >

        </>
    );
}

export default Auth;