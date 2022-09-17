import { Box, Typography, Link, Divider } from "@mui/material";

import Svg from "next/image";

const FourthPart = () => {
  return (
    <Box className="container-4" width={1920} height={1080}>
      <Typography
        className="part4-title"
        variant="h2"
        component="h2"
        fontSize={84}
        fontWeight={500}
      >
        AWARD-WINNING
        <br />
        DESIGNS
      </Typography>

      <Box className="mesh-2">
        <Svg src="/assets/Mesh2.svg" width={796} height={625.42} />
      </Box>

      <Box className="links-info" width={892} height={770}>
        <Typography className="index-num" fontSize={12} fontWeight={400} mt={2}>
          [01]
        </Typography>
        <Box className="wrapper">
          <Link
            className="link-title"
            href="#"
            underline="none"
            fontSize={32}
            fontWeight={500}
          >
            CQS
          </Link>
          <Typography>29m DSS Super-Maxi Race Yatch</Typography>
        </Box>
        <Divider style={{ background: "black" }} />
      </Box>
    </Box>
  );
};

export default FourthPart;
