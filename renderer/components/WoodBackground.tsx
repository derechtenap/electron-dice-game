import { BackgroundImage, Box } from "@mantine/core";

type WoodBackgroundProps = {
  texture?: "wood1.jpg" | "wood2.jpg";
} & React.PropsWithChildren;

/**
 * A full screen box with a wooden texture background.
 */
const WoodBackground = ({
  children,
  texture = "wood1.jpg",
}: WoodBackgroundProps) => {
  return (
    <Box h="100dvh" w="100dvw">
      <BackgroundImage
        src={`/images/textures/${texture}`}
        w="100%"
        h="100%"
        style={{
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
        }}
      >
        {children}
      </BackgroundImage>
    </Box>
  );
};

export default WoodBackground;
