import React, { memo, useState } from 'react'
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core'
import { useSpring, a } from 'react-spring'
import { useMeasure, usePrevious } from './helpers'
import { Global, Frame, Title, Content, toggle } from './styles'
import * as Icons from './icons'

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
    return (
        <>
            <List>
                <ListItem>

                    <Tree name="Menu" defaultOpen>
                        <Tree name="Introduction">
                            <Tree name="Rudezoo" />

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
                            <Tree name="Music1">
                                <iframe width="150" height="100" src="https://www.youtube.com/embed/OqHzuPr4g58" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Tree>
                            <Tree name="Music2">
                                <iframe width="150" height="100" src="https://www.youtube.com/embed/0IKsFBp0Izw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Tree>

                        </Tree>

                    </Tree>

                </ListItem>

            </List>
        </>
    );
}

export default MainMenu;