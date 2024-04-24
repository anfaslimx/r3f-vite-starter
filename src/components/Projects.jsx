import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
  {
    title: "Billy",
    url: "https://music.apple.com/us/album/billy/1685481843?i=1685481844",
    image: "projects/Nsgmkbilly.jpg",
    description: "NSGMK-Billy",
  },
  {
    title: "Primitives XYZ",
    url: "https://Primitives.xyz/",
    image: "projects/Primitivesad.jpg",
    description: "Solana built web3 art platform",
  },
  {
    title: "Seek the truth",
    url: "https://www.instagram.com/reel/C4nowGzO-ro/?igsh=eHN6eTNwM3cyMXBz",
    image: "projects/void.jpg",
    description: "you seek the truth.. shall one reveal everything at once",
  },
  {
    title: "Wonderstrike pt.1",
    url: "https://asx.univer.se",
    image: "projects/Wonderstrikecover.jpg",
    description: "Graphic novel short on wonderboi",
  },
  {
    title: "New island2",
    url: "https://www.instagram.com/reel/C5bVNtKOlDD/?igsh=d2tyb3liMnVoamk1",
    image: "projects/newisland2.jpg",
    description: "Short animation clip",
  },
];

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[2.2, 2]} />
        <meshBasicMaterial color="black" transparent opacity={0.4} />
      </mesh>
      <Image
        scale={[2, 1.2, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.3}
      />
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        position={[-1, -0.4, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={2}
        anchorX="left"
        anchorY="top"
        fontSize={0.1}
        position={[-1, -0.6, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2 + 1}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2.5, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 2.5,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};