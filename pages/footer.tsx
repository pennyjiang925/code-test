import { Box, Typography } from "@mui/material";
import Svg from "next/image";

const Footer = () => {
  return (
    <Box className="footer">
      <Box className="footer-info">
        <Typography
          className="contact-info"
          variant="h6"
          component="h6"
          fontSize={12}
          fontWeight={400}
          lineHeight={3}
          letterSpacing="0.1em"
        >
          INFO@BAKEWELL - WHITE.COM
          <br />
          +64 9 480 6800
          <br />
          EST. 1994
        </Typography>

        <Typography
          className="title"
          variant="h2"
          component="h2"
          fontSize={84}
          fontWeight={500}
        >
          GET IN TOUCH
        </Typography>

        <Typography
          className="contact-info"
          variant="h6"
          component="h6"
          fontSize={12}
          fontWeight={400}
          lineHeight={3}
          letterSpacing="0.1em"
        >
          PRIVACY POLICY
          <br />
          FACEBOOK
          <br />
          LINKEDIN
        </Typography>
      </Box>

      <Box className="button-3">
        <Box className="contact-box">
          <Typography
            variant="h5"
            component="h5"
            fontSize={16}
            fontWeight={700}
            letterSpacing={3}
            lineHeight={2}
          >
            CONTACT US
          </Typography>

          <Svg src="/assets/Arrow.svg" width={53} height={18} />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
