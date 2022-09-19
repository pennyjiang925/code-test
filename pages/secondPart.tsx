import { Box, Typography } from "@mui/material";
import Image from "next/image";

import Svg from "next/image";

const SecondPart = () => {
  return (
    <Box>
      <Box className="container-2">
        <Box
          className="mesh"
          width="100%"
          height="100%"
          sx={{
            position: "absolute",
          }}
        >
          <Image
            alt="mesh"
            src="/assets/Mesh.svg"
            width={1920}
            height={1080}
            layout="responsive"
          />
        </Box>

        <Box
          className="title"
          sx={{
            zIndex: "100",
            position: "relative",
            top: "-400px;",
            width: "800px",
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            color="white"
            width={823}
            height={145}
            fontWeight={500}
            fontSize={84}
            marginBottom="-20px"
            marginLeft="18px"
          >
            WE ARE AN
            <br />
            AWARD-WINNING
          </Typography>
        </Box>

        <Box className="content">
          <Box className="content-1" width={710} height={77} marginTop="128px">
            <Typography variant="h5" component="h5">
              We can offer a complete design service to all vessels, power and
              sail. Whether it is conceptual design work or full naval
              architecture and engineering, no job is too big or too small for
              our team.
            </Typography>
          </Box>

          <Box
            className="content-2"
            display="flex"
            justifyContent="space-evenly"
          >
            <Typography
              width={281}
              height={137}
              fontSize={16}
              fontWeight={300}
              variant="h6"
              component="h6"
              marginLeft="274px"
              textAlign="right"
            >
              We believe that success is to a large part a matter of design
              process, and a good designer will have a design process that will
              produce a successful outcome whether it be a yacht, a powerboat,
              an aeroplane, or a ballpoint pen.
            </Typography>

            <Typography
              width={285}
              height={236}
              fontSize={16}
              fontWeight={300}
              variant="h6"
              component="h6"
              marginRight="273px"
            >
              We undertake a wide variety of craft from radio yachts, to racing
              yachts, offshore powerboats, to 90m motoryachts, pilotboats,
              kayaks, Arabian dhows, cargo barges and fishing boats. As a result
              we are exposed to a wide variety of conditions, design problems
              and novel solutions, and if we were restricted to designing only
              one type of craft then we would not see this rich variety of
              thinking.
            </Typography>
          </Box>
        </Box>

        <Box className="title">
          <Typography
            variant="h1"
            component="h1"
            color="white"
            position={"relative"}
            top="400px"
            width={878}
            height={144}
            fontWeight={500}
            fontSize={84}
            textAlign="right"
            marginTop="-120px"
            marginLeft="200px"
          >
            BOUTIQUE DESIGN
            <br />
            STUDIO
          </Typography>
        </Box>
      </Box>
      {/* 
      <Box className="button-1">
        <Box className="button-info">
          <Typography
            variant="h5"
            component="h5"
            fontSize={16}
            fontWeight={700}
            letterSpacing={3}
            lineHeight={2}
            zIndex={100}
          >
            SEE EXPERTISE
          </Typography>

          <Svg src="/assets/Arrow.svg" width={53} height={18} />
        </Box>
      </Box> */}
    </Box>
  );
};

export default SecondPart;
