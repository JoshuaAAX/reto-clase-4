import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { DoubleSide, FrontSide } from "three";

export default function Sphere() {
    const PATH = "/static/textures/door/"
    const props = useTexture({
        map: PATH + "color.png",
        normalMap: PATH + 'normal.png',
        roughnessMap: PATH + 'roughness.png',
        aoMap: PATH + 'ao.png',
        metalnessMap: PATH + 'metal.png',
    })

    const  sphereRef  =  useRef()
    const  [position, setPosition] = useState([0,0,0]);

    useFrame(()  => {
        sphereRef.current.position.set(...position)
    })

    return (
        <mesh  ref={sphereRef} castShadow={true} receiveShadow = {true}>
            <sphereGeometry args={[1,65,65]} inverted={true} smooth={true}/>
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}