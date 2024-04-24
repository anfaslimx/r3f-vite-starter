import { useThree } from "@react-three/fiber";
import { Image } from "@react-three/drei";

import { motion } from "framer-motion-3d";

export const projects = [
    {
        title: "Billy",
        url: "https://music.apple.com/us/album/billy/1685481843?i=1685481844",
        image: "projects/Nsgmk-Billy.jpg",
        description: "Nsgmk 2023 Single",
      },
      {
        title: "Primitives AD",
        url: "https://Primitives.xyz/",
        image: "projects/Primitives_Ad.jpg",
        description: "Solana built, social first. collect art, make trades, join communities",
      },
      {
        title: "Wonderstrike pt.1",
        url: "https://www.youtube.com/watch?v=pGMKIyALcK0",
        image: "projects/Wonderstrike_Cover.jpg",
        description: "Graphic novel short on wonderboi",
      },
      {
        title: "newisland 2",
        url: "https://www.instagram.com/reel/C5bVNtKOlDD/?igsh=d2tyb3liMnVoamk1",
        image: "projects/newisland2.jpg",
        description: "Short animation clip",
      },
      {
        title: "Seek the truth",
        url: "https://www.instagram.com/reel/C4nowGzO-ro/?igsh=eHN6eTNwM3cyMXBz",
        image: "projects/Void2.jpg",
        description: "you seek the truth, shall one reveal everything at once",
      },
    ];
    const project = (props) => {
        const {project} = props;

        return (
            <group {...props}>
                <mesh>
                    <planeGeometry args={[2.2, 2]} />
                    <meshBasicMaterial color="white" transparent opacity={0.4} />
                </mesh>
                <Image scale={[2, 1.2, 1]} url={project.image} toneMapped={false} position-y={0.3}/>
            </group>
        )
    }
    export const Projects = () => {
        const { viewport } = useThree();

    return <group position-y={-viewport.height * 2 + 1}>
        {
            projects.map((project, index) => (
                <motion.group key={"project_" + index}>
                    <project project={project}/>
                </motion.group>
            ))
        }
    </group>;
};
    