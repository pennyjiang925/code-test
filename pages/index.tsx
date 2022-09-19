import FirstPart from "./firstPart";
import SecondPart from "./secondPart";
import ThirdPart from "./thirdPart";
import FourthPart from "./fourthPart";
import Footer from "./footer";
import { Box } from "@mui/material";

const Homepage = () => {
  return (
    <Box>
      <FirstPart />
      <SecondPart />
      <ThirdPart />
      <FourthPart />
      <Footer />
    </Box>
  );
};

export default Homepage;
