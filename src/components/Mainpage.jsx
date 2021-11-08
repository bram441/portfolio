import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React from 'react'
import Firstpage from './Firstpage'
import BasicInfo from './BasicInfo'
import Skills from './Skills'
import Contact from './Contact'

export default function Mainpage() {
    return (
            <Parallax pages={4} style={{ top: '0', left: '0' }} className = "pages">
                <ParallaxLayer
                    offset={0}
                    speed={2.5}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                        backgroundColor: '#292d3e'
                            }}>
                    <Firstpage/>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#292d3e' }} />

                <ParallaxLayer
                    offset={1}
                    speed={0.5}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                    }}>
                    <BasicInfo/>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={0.5}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                    }}>
                    <Skills/>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3}
                    speed={0.5}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                    }}>
                    <Contact/>
                </ParallaxLayer>
            </Parallax>
    )
}


