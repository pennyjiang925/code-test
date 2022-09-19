import { Box, Typography, Link, Divider } from "@mui/material";

import Svg from "next/image";

const FourthPart = () => {
  const linkInfo = [
    {
      index: "01",
      title: "CQS",
      description: "29m DSS Super-Maxi Race Yatch",
    },
    {
      index: "02",
      title: "ANARCHY",
      description: "YD 37.11M Club Racer",
    },
    {
      index: "03",
      title: "A FORK IN THE ROAD",
      description: "13.7M IRC Race Yacht",
    },
    {
      index: "04",
      title: "General Lee",
      description: "11.3M IRC Race Yacht",
    },
    {
      index: "05",
      title: "Zana/Konica Minolta/Lahana",
      description: "13.7M IRC Race Yacht",
    },
    {
      index: "06",
      title: "Wired",
      description: "15.85m Canting Keel Racer/Cruiser",
    },
    {
      index: "07",
      title: "Jazz Player",
      description: "12m Production One Design Racer / Cruiser",
    },
    {
      index: "08",
      title: "Braveheart /Valkyrie",
      description: "15.85m TP52 Carbon Race Yacht",
    },
    {
      index: "08",
      title: "NZL-403",
      description: "Mini 650 Carbon Race Yacht",
    },
    {
      index: "09",
      title: "Time to Burn",
      description: "12.5m Cruiser / Racer",
    },
  ];

  return (
    <Box>
      <Box className="container-4">
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

        <Box
          sx={{
            marginTop: "140px",
          }}
        >
          {linkInfo.map((link) => {
            return (
              <Box
                className="links-info"
                width={892}
                padding="5px"
                key={link.index}
              >
                <Divider style={{ border: "1px solid black" }} />
                <Typography
                  className="index-num"
                  fontSize={12}
                  fontWeight={400}
                  marginTop="10px"
                >
                  [{link.index}]
                </Typography>
                <Box className="wrapper">
                  <Link
                    className="link-title"
                    href="#"
                    underline="none"
                    fontSize={32}
                    fontWeight={500}
                    marginLeft="20px"
                  >
                    {link.title}
                  </Link>
                  <Typography>{link.description}</Typography>
                </Box>
              </Box>
            );
          })}

          <Box
            display="flex"
            flexDirection={"row-reverse"}
            marginLeft="300px"
            width={892}
            sx={{
              borderTop: "2px solid black",
              borderBottom: "2px solid black",
            }}
          >
            <Box padding="15px">
              <Link
                className="link-title"
                href="#"
                underline="none"
                fontSize={32}
                fontWeight={500}
              >
                View More
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FourthPart;
