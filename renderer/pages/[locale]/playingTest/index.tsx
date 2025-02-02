import type { NextPage } from "next";
import { useTranslation } from "next-i18next";

import { getStaticPaths, makeStaticProperties } from "@/lib/getStatic";
import { Canvas } from "@react-three/fiber";

const PlayingTestPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        height: "100dvh",
        width: "100%",
      }}
    >
      <Canvas
        style={{
          background: "blue",
        }}
        flat
        linear
      >
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshPhongMaterial />
        </mesh>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} color="red" />
      </Canvas>
    </div>
  );
};

export default PlayingTestPage;

export const getStaticProps = makeStaticProperties(["common", "gameModes"]);

export { getStaticPaths };
