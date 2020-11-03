import React, { memo, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemText, Modal, Link, Fade } from '@material-ui/core'
import { useSpring, a } from 'react-spring'
import { useMeasure, usePrevious } from 'Components/Main/helpers'
import { Global, Frame, Title, Content, toggle } from 'Components/Main/styles'
import * as Icons from 'Components/Main//icons'
import ReactPlayer from 'react-player'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Tree = memo(({ children, name, style, defaultOpen = false }) => {
    const [isOpen, setOpen] = useState(defaultOpen)
    const previous = usePrevious(isOpen)
    const [bind, { height: viewHeight }] = useMeasure()
    const { height, opacity, transform } = useSpring({
        from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
        to: { height: isOpen ? viewHeight : 0, opacity: isOpen ? 1 : 0, transform: `translate3d(${isOpen ? 0 : 20}px,0,0)` }
    })
    const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]
    return (
        <Frame>
            <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} />
            <Title style={style}>{name}</Title>
            <Content style={{ opacity, height: isOpen && previous === isOpen ? 'auto' : height }}>
                <a.div style={{ transform }} {...bind} children={children} />
            </Content>
        </Frame>
    )
})




const MainMenu = () => {
    const classes = useStyles();
    const PopsongList = [['Dax-Gotham', 'https://www.youtube.com/watch?v=Ve6nUvv47T4&ab_channel=Dax']];
    const [open, setopen] = useState(false);
    const [url, seturl] = useState('');


    const MododalOff = () => {
        setopen(false);

    }

    var poplists = PopsongList.map((v, i) => {
        return (
            <>
                <Tree name={<Link component="button" variant="body2" href="#" onClick={() => { setopen(true); seturl(v[1]); }} style={{
                    color: "white"
                }}>{v[0]}</Link>}>
                </Tree>
            </>
        );
    })

    return (
        <>
            <div>
                <Modal
                    open={open}
                    className={classes.modal}
                    onClose={MododalOff}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            {url}
                            <ReactPlayer url={url} playing controls></ReactPlayer>
                        </div>
                    </Fade>

                </Modal>
            </div>
            <List>
                <ListItem>

                    <Tree name="Menu" defaultOpen>
                        <Tree name="Introduction">
                            <Tree name="Rudezoo">
                                <Tree name="Work">

                                </Tree>
                            </Tree>


                            <Tree name="Rudylog" />
                        </Tree>
                        <Tree name="게시물">
                            <Tree name="hello" />
                            <Tree name="sub-subtree with children">
                                <Tree name="child 1" style={{ color: '#37ceff' }} />
                                <Tree name="child 2" style={{ color: '#37ceff' }} />
                                <Tree name="child 3" style={{ color: '#37ceff' }} />
                                <Tree name="custom content">
                                    <div style={{ position: 'relative', width: '100%', height: 200, padding: 10 }}>
                                        <div style={{ width: '100%', height: '100%', background: 'black', borderRadius: 5 }} />
                                    </div>
                                </Tree>
                            </Tree>
                            <Tree name="hello" />
                        </Tree>
                        <Tree name="Music">
                            <Tree name="PopSong">
                                {poplists}
                            </Tree>
                            <Tree name="Music2">

                            </Tree>

                        </Tree>


                    </Tree>

                </ListItem>

            </List>
        </>
    );
}

export default MainMenu;