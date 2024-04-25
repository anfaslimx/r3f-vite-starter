import { Sphere, useScroll } from '@react-three/drei'
import * as THREE from "three";
import { gsap } from "gsap";
import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
export const Background =() => {
    const material = useRef();
    const color = useRef({
        color: "#000000",
    })
    const data = useScroll();

    const tl = useRef();

   useFrame(() => {
       tl.current.progress(data.scroll.current);
       material.current.color = new THREE.Color(color.current.color);
    });

    useEffect(() => {
        tl.current = gsap.timeline();
        tl.current.to(color.current, {
            color: "#000000",
     });
     tl.current = gsap.timeline();
     tl.current.to(color.current, {
         color: "#000000",
     });
    tl.current = gsap.timeline();
        tl.current.to(color.current, {
            color: "#404c54",
     });
    }, []);
    return (
    <group>
        <Sphere scale={[30, 30, 30]}>
            <meshBasicMaterial 
            ref={material} 
            side={THREE.BackSide} 
            toneMapped={false}
            />
        </Sphere>
    </group>
    );
};