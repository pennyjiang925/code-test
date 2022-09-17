import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Svg from "next/image";

const ThirdPart = () => {
  return (
    <Box className="container-3">
      <Box className="title-box" fontSize={84} lineHeight={76} fontWeight={500}>
        <Typography variant="h2" component="h2">
          Selected
          <br />
          Works
        </Typography>
      </Box>
      <Box className="index">
        <Typography variant="h5" component="h5">
          [01] CASE STUDY
        </Typography>
        <br />
        <Typography variant="h5" component="h5">
          [02] CASE STUDY
        </Typography>

        <Typography variant="h3" component="h3" lineHeight={2}>
          [03] CASE STUDY
        </Typography>
        <Typography
          variant="h6"
          component="h6"
          width={320}
          height={88}
          fontSize={16}
          fontWeight={300}
          ml={10}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu in
          venenatis id laoreet enim. Interdum in orci vitae feugiat quam urna.
          Pretium netus nec ante massa nulla odio nunc posuere sit. Nec justo,
          leo eget ipsum sollicitudin aliquet.
        </Typography>

        <Box className="button">
          <Typography
            variant="h5"
            component="h5"
            fontSize={16}
            fontWeight={700}
            letterSpacing={3}
          >
            SEE ALL DESIGNS
          </Typography>

          <Svg src="/assets/Arrow.svg" width={60} height={60} />
        </Box>
      </Box>

      <Box className="image-1">
        <Image
          src="/assets/5.png"
          alt="background-image"
          width={680}
          height={640}
        />
      </Box>

      <Box className="image-2">
        <Image
          src="/assets/4.png"
          alt="background-image"
          width={752}
          height={640}
        />
      </Box>

      <Box className="image-3">
        <Image
          src="/assets/3.png"
          alt="background-image"
          width={830}
          height={640}
        />
      </Box>
    </Box>
  );
};

export default ThirdPart;
