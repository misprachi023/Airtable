import { Spacer } from "@chakra-ui/react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Slider from "../component/slider";
import Cover from "../component/cover";
import CoverVideo from "../component/covervideo";
import Video from "../component/covervideo2";
import Read from "../component/cover2";
import AccordionWithImage from "../component/dynamicAccordion";
import Coverlast from "../component/cover4";
import MarqueeSlider from "../component/marquee";
import Resource from "./resource";
import CoverReso from './../component/cover3';
import Solution from "./solution";
import SolutionSec from "./solution2";
export function Home() {
  return (
    <>
      <Navbar />
      <Spacer />
      <Spacer />
      <Cover />
      <AccordionWithImage />
      <CoverVideo />
      <Read />
      <Video />
      <Slider />
      <CoverReso/>
      <MarqueeSlider />
      <Coverlast/>
    </>
  );
}
