import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Flex, Image, Heading, Container, Button } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const CustomNextArrow = ({ onClick }) => (
  <Box
    position="absolute"
    top="50%"
    right="0"
    transform="translateY(-50%)"
    onClick={onClick}
    cursor="pointer"
    zIndex="1"
  >
    <ChevronRightIcon boxSize={8} color="white" />
  </Box>
);

const CustomPrevArrow = ({ onClick }) => (
  <Box
    position="absolute"
    top="50%"
    left="0"
    transform="translateY(-50%)"
    onClick={onClick}
    cursor="pointer"
    zIndex="1"
  >
    <ChevronLeftIcon boxSize={8} color="white" />
  </Box>
);

export default function Carousel({ arr, width, margin }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />, // Use the custom arrow components here
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <>
      <Slider
        backgroundColor={"#2d2d2d"}
        style={{
          marginTop: "4rem",
          marginBottom: "4rem",
        }}
        {...settings}
      >
        <Box>
          <Flex
            padding={"5rem"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box marginRight={"10%"} padding={"5rem"}>
              <Heading>
                "We were able to produce and deliver
                <br /> so much more than we ever had before."
              </Heading>

              <Container margin={"1rem"} marginLeft={"0px"}></Container>
            </Box>
            <Image
              width={"400px"}
              height={"220px"}
              style={{ borderRadius: "1.5rem" }}
              src="https://images.ctfassets.net/wl95ljfippl8/3B2KEtekXWpw9iXwE0KtBI/63f7191d7a9d6f9e400641cb272a706f/Final_Homepage_Graphic__Equinox.png"
            />
          </Flex>
        </Box>
        <Box>
          <Flex
            padding={"5rem"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box marginRight={"10%"} padding={"5rem"}>
              <Heading>
                "I knew we needed Airtable. I knew <br />
                the volume of photography I was up <br />
                against and the scale we were up <br />
                against"
              </Heading>
              <Container margin={"1rem"} marginLeft={"0px"}></Container>
            </Box>
            <Image
              width={"400px"}
              height={"220px"}
              style={{ borderRadius: "1.5rem" }}
              src="https://images.ctfassets.net/wl95ljfippl8/2ayq8Gt1jAb5OSeAOTdKab/1a618fb846b59ef323aca0676c3b8472/Final_Homepage_Graphic__West_Elm.png"
            />
          </Flex>
        </Box>
        <Box>
          <Flex
            padding={"5rem"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box marginRight={"10%"} padding={"5rem"}>
              <Heading>
                "In the production department alone <br />
                we saved more than 5,000 hours in <br />
                one year."
              </Heading>
              <Container margin={"1rem"} marginLeft={"0px"}></Container>
            </Box>
            <Image
              width={"400px"}
              height={"220px"}
              style={{ borderRadius: "1.5rem" }}
              src="https://images.ctfassets.net/wl95ljfippl8/3T4ZC5qBFvV0QFtsT0iSRi/b46e0ef2fadd469ca6634caaa68d84f8/Final_Homepage_Graphic__Code_and_Theory__1_.png"
            />
          </Flex>
        </Box>
      </Slider>
    </>
  );
}
