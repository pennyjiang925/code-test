import { Box, Typography } from "@mui/material";
import Image from "next/image";

import Svg from "next/image";

const SecondPart = () => {
  return (
    <Box className="container-2">
      <Box className="mesh">
        <Svg src="/assets/Mesh.svg" width={1919.06} height={1083.74} />
      </Box>

      <Box className="title">
        <Typography variant="h2" component="h2">
          WE ARE AN AWARD-WINNING
        </Typography>
      </Box>

      <Box className="content">
        <Box className="content-1">
          <Typography variant="h5" component="h5">
            We can offer a complete design service to all vessels, power and
            sail. Whether it is conceptual design work or full naval
            architecture and engineering, no job is too big or too small for our
            team.
          </Typography>
        </Box>

        <Box className="content-1">
          <Typography variant="h6" component="h6">
            We believe that success is to a large part a matter of design
            process, and a good designer will have a design process that will
            produce a successful outcome whether it be a yacht, a powerboat, an
            aeroplane, or a ballpoint pen.
          </Typography>
        </Box>

        <Box className="content-1">
          <Typography variant="h6" component="h6">
            We undertake a wide variety of craft from radio yachts, to racing
            yachts, offshore powerboats, to 90m motoryachts, pilotboats, kayaks,
            Arabian dhows, cargo barges and fishing boats. As a result we are
            exposed to a wide variety of conditions, design problems and novel
            solutions, and if we were restricted to designing only one type of
            craft then we would not see this rich variety of thinking.
          </Typography>
        </Box>

        <Box className="center-img">
          <Image
            src="/assets/2.png"
            alt="background-image"
            width={1193}
            height={626}
          />
        </Box>
      </Box>

      <Box className="title">
        <Typography variant="h2" component="h2">
          Boutique design studio
        </Typography>
      </Box>
    </Box>
  );
};

export default SecondPart;
