import { OrbitControls } from '@react-three/drei'
import { useHelper } from '@react-three/drei'
import Sphere from './Sphere'
import Floor from './Floor'
import { useRef } from 'react'
import { DirectionalLightHelper, 
         DirectionalLight, 
         HemisphereLightHelper, 
         HemisphereLight, 
         SpotLightHelper, 
         SpotLight,
         PointLightHelper,
         PointLight,
         RectAreaLight} from 'three'

export default function Experience() {
   
    const directionalLightRef = useRef()
    const hemisphereLightRef = useRef()
    const spotLightRef= useRef()
    const pointLightRef  = useRef()
    const rectAreaLightRef = useRef()
    

    //useHelper(directionalLightRef, DirectionalLightHelper)

    //useHelper(hemisphereLightRef, HemisphereLightHelper)

    useHelper(spotLightRef, SpotLightHelper)

    //useHelper(pointLightRef, PointLightHelper, 1,'cyan')



    return <>
        <OrbitControls makeDefault/>
        <ambientLight intensity={0.3} />



         {/*<directionalLight  ref={directionalLightRef} 
                           castShadow={true} 
                           position={[0, 3,-5]} 
                           shadow-mapSize={ [ 1024, 1024 ] }
                           intensity={1.5}  
                           color="white" />*/}


         {/*<hemisphereLight  ref={hemisphereLightRef} 
                           castShadow={true} 
                           position={[0, 5,  0]}        
                           intensity={1.5} 
                           color="yellow"
                           groundColor="purple" />*/}

         <spotLight ref={spotLightRef}
                   castShadow={true}
                   position={[0, 10, -5]}
                   color="brown"
                   intensity={100}
                   angle={Math.PI / 20}
                   distance={320}
                   penumbra={0.3}  />


        {/* <pointLight ref={pointLightRef}
                    castShadow={true}
                    position={[0, 5, -3]}
                    shadow-mapSize={ [ 1024, 1024 ] }
                    color="white"
                    intensity={1}
                    distance={100}
                    decay={2}/>*/}

         
         {/*<rectAreaLight ref={rectAreaLightRef}
                   castShadow={true}
                   position={[0, 5, 5]}
                   height={10} 
                   width={10}
                   intensity={8}
                   color="cyan"/>*/}
       

        <Sphere/>
        <Floor/>
    </>
}