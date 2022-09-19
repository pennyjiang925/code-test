import { AppBar, Toolbar, Typography, Stack, Button, Box } from "@mui/material";

import Image from "next/image";
import Svg from "next/image";

const FirstPart = () => {
  return (
    <Box>
      <Box className="container-1">
        <AppBar position="static" className="navbar">
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            width="90%"
          >
            <Button color="inherit" className="nav-link">
              EXPERTISE
            </Button>
            <Button color="inherit" className="nav-link">
              PORTFOLIO
            </Button>
            <Box>
              <Svg id="logo" src="/assets/Logo.svg" width={329} height={18} />
            </Box>
            <Button color="inherit" className="nav-link">
              AWARDS
            </Button>
            <Button color="inherit" className="nav-link">
              CONTACT US
            </Button>
          </Box>
        </AppBar>

        <Box className="logo-info">
          <Box className="lg-logo" width="93.75%">
            <Image src="/assets/LogoLarge.svg" alt="Logo Large" layout="fill" />
          </Box>

          <Box className="info">
            <Box className="p1-info">
              <Typography
                variant="h6"
                component="h6"
                fontSize={12}
                fontWeight={400}
                lineHeight={3}
                letterSpacing={1.6}
                mr={51}
              >
                +64 9 480 6800
                <br />
                INFO@BAKEWELL-WHITE.COM
              </Typography>
            </Box>

            <Box className="p2-info">
              <Typography
                variant="h6"
                component="h6"
                fontSize={12}
                fontWeight={400}
                lineHeight={3}
                letterSpacing={1.6}
              >
                BAKEWELL-WHITE YACHT DESIGN LTD
                <br />
                PACEWITH GRACE / &copy; 2022
              </Typography>
            </Box>

            <Box className="p3-info">
              <Typography
                variant="h6"
                component="h6"
                fontSize={12}
                fontWeight={400}
                lineHeight={3}
                letterSpacing={1.6}
                ml={51}
              >
                EST . 1994
                <br />
                AUCKLAND / NEW ZEALAND
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FirstPart;
