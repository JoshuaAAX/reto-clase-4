import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { useState } from 'react'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const cameraSettings = {
    fov: 45,
    near: 0.1,
    far: 200,
    position: [2, 0, -6]
}



root.render(
    <Canvas camera={cameraSettings} shadows={true} >
        <Experience />
    </Canvas>
)