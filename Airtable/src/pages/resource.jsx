import { Box, Container, Heading,Flex, Image, Button, Grid } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import { GridItem } from '@chakra-ui/react'

export default function Resource() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "25%",
    pauseOnHover: true,
    margin: 30
  };

  return (
    <Box>
      <Box backgroundColor={"#254fad"} padding={"20px"}>
        <h1 style={{ color: "DodgerBlue", textAlign: "center" , fontSize:"30px"}}>
          Resource Center
        </h1>
        <h1 style={{ color: "white", textAlign: "center", fontSize: "50px" }}>
          Stay one step ahead of the trends.
        </h1>
        <Slider
          backgroundColor={"#2d2d2d"}
          style={{
            width: "90%",
            margin: "auto",
            marginTop: "4rem",
            marginBottom: "4rem",
          }}
          {...settings}
        >
        <Box  position={'relative'} > 
        <Image  borderRadius={"2rem"} height={'500px'} width={"90%"} src='https://images.ctfassets.net/wl95ljfippl8/4YE0ZKYd2vZxhu6zqRywsd/dbf51b0cf935668ce83884d7651cb4a1/AdobeStock_163859909.jpg?w=1920'
        />
        <Flex zIndex={'100'} bottom={"3%"} left={'2%'} position={'absolute'}>

          <Heading color={'white'} size='lg'>Getting Started in Airtable</Heading>
          <Button variant='ghost'>Watch now</Button>
        </Flex>
        </Box>
        <Box position={'relative'}>
        <Image  borderRadius={"2rem"} height={'500px'} width={"90%"} src='https://images.ctfassets.net/wl95ljfippl8/Y098yCLRNL7EAnK4pTpdJ/0ab6313b86e3b3ca6bbd83ae52735973/CAP_10_1920x1080.png?w=1920'/>
        <Flex justifyContent={"space-between"} zIndex={'100'} bottom={"3%"} left={'2%'} position={'absolute'}>

          <Heading color={'white'} size='lg'>Getting Started in Airtable</Heading>
          <Button variant='ghost'>Watch now</Button>
        </Flex>

        </Box>
        <Box position={'relative'}>
        <Image     borderRadius={"2rem"} height={'500px'} width={"90%"} src='https://images.ctfassets.net/wl95ljfippl8/1KYBuli48wsG1As0cDJFRk/59a3d2aaa8f351cf77651a65769a15d0/product-marketing-digital-hero-image__1___1_.png?w=1920'/>
        <Flex zIndex={'100'} bottom={"3%"} left={'2%'} position={'absolute'}>

          <Heading color={'white'} size='lg'>Getting Started in Airtable</Heading>
          <Button variant='ghost'>Watch now</Button>
        </Flex>


        </Box>  
        


      </Slider>

      </Box>
      <Container color={"gray"} fontWeight={"bold"}>
        BROWSE
      </Container>
      <hr />
      <Grid
        margin={'auto'}
        flexWrap={"wrap"}
        width={'80%'}
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gap={6}
      >
      <Box
      
        borderRadius={"1rem"}
        padding={"1rem"}
        backgroundColor={"white"}
        boxShadow={
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        }
      > 
        <Image
          width={"350px"}
          height={"300px"}
          borderRadius={"2rem"}
          objectFit={"cover"}
          src="https://images.ctfassets.net/wl95ljfippl8/3Xw6IbpxPlpzC96Ywcs2D6/baca4df58eacc3313574686d4f6c8e86/Blog_Banner_1600x968.png?w=1920"
        />
        <Heading fontSize={"18px"}>
          Optimize your marketing
          <br />
          supply chain
        </Heading>
        <Container fontSize={"15px"} color={"rgb(60, 60, 60)"}>
          Leader looking for innovative
          <br />
          ways to accelerate marketing
          <br />
          work are finding insperation in...
        </Container>
      </Box>
      <Box
       borderRadius={"1rem"}
       padding={"1rem"}
       backgroundColor={"white"}
       boxShadow={
         "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
       }
      >
        <Image
          width={"350px"}
          height={"300px"}
          borderRadius={"2rem"}
          objectFit={"cover"}
          src="https://images.ctfassets.net/wl95ljfippl8/6hwO1KSphOKk6UvApqsHdY/bff9979cde0ec0eb159fb8f0189a6560/World-class-marketing-runs-on-Airtable.jpg?w=1920"
        />
        <Heading fontSize={"18px"}>
          World-class marketing
          <br />
          runs on Airtable
        </Heading>
        <Container fontSize={"15px"} color={"rgb(60, 60, 60)"}>
          Marketing leaders are at a <br />
          pivotal moment. Whether it's
          <br />
          driving more revenue,...
        </Container>
      </Box>
      <Box
        borderRadius={"1rem"}
        padding={"1rem"}
        backgroundColor={"white"}
        boxShadow={
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        }
      >
        <Image
          width={"350px"}
          height={"300px"}
          borderRadius={"2rem"}
          objectFit={"cover"}
          src="https://images.ctfassets.net/wl95ljfippl8/G5pWzCTFIKMGHV8rJaLEX/e7e820c738cfae456fd220637a1e6a48/AssetHub_1600x900.png?w=1920"
        />
        <Heading fontSize={"18px"}>
          How to accelerate your
          <br />
          work with Airtable AI
        </Heading>
        <Container fontSize={"15px"} color={"rgb(60, 60, 60)"}>
          Supercharge your team's
          <br />
          capabilities with the power of
          <br />
          Airtable AI. Watch this demo...
          <br />
          teams.
        </Container>
      </Box>
      <Box
        borderRadius={"1rem"}
        padding={"1rem"}
        backgroundColor={"white"}
        boxShadow={
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        }
      >
        <Image
          width={"350px"}
          height={"300px"}
          borderRadius={"2rem"}
          objectFit={"cover"}
          src="https://images.ctfassets.net/wl95ljfippl8/6N5RVf3U19texZzLNm8lLE/5d2ef8c5855eed33b6e52b47a01d780a/Asset_Hub_1600x900__1_.png?w=1920"
        />
        <Heading fontSize={"18px"}>
          Best practice for
          <br />
          campaign planning
        </Heading>
        <Container fontSize={"15px"} color={"rgb(60, 60, 60)"}>
          World-class campaign
          <br />
          planning should unite your
          <br />
          team from the outset. See ho...
        </Container>
      </Box>
      <Box
        borderRadius={"1rem"}
        padding={"1rem"}
        backgroundColor={"white"}
        boxShadow={
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        }
      >
        <Image
          width={"350px"}
          height={"300px"}
          borderRadius={"2rem"}
          objectFit={"cover"}
          src="https://images.ctfassets.net/wl95ljfippl8/7bNDyfzeemYBOdbWM9Pvpe/20c4d1a5087dc030ab1a362458288ef3/Asset_Hub_1600x900.png?w=1920"
        />
        <Heading fontSize={"18px"}>
          Streaming marketing <br />
          effort to bolster ROI
        </Heading>
        <Container fontSize={"15px"} color={"rgb(60, 60, 60)"}>
          Quantityfing the return on
          <br />
          marketing activities is always a
          <br />
          challenge, particularly if you...
        </Container>
      </Box>
      <Box
        borderRadius={"1rem"}
        padding={"1rem"}
        backgroundColor={"white"}
        boxShadow={
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        }
      >
        <Image
          width={"350px"}
          height={"300px"}
          borderRadius={"2rem"}
          objectFit={"cover"}
          src="https://images.ctfassets.net/wl95ljfippl8/28iwIxrHwIcwsY270zYdCC/26a2b720fa043378f5ee31f60d0dfb0d/Webinar_Blog_1600x968.png?w=1920"
        />
        <Heading fontSize={"18px"}>
          Maximize team efficiency <br />
          with Interfaces
        </Heading>
        <Container fontSize={"15px"} color={"rgb(60, 60, 60)"}>
          Tune in for a 45-minute <br />
          webniar designed to help you <br />
          set your team up for effective...
        </Container>
      </Box>

      <Box
        borderRadius={"1rem"}
        padding={"1rem"}
        backgroundColor={"white"}
        boxShadow={
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        }
      >
        <Image
          width={"350px"}
          height={"300px"}
          borderRadius={"2rem"}
          objectFit={"cover"}
          src="https://images.ctfassets.net/wl95ljfippl8/3t6BKD1l8ZqqAhuNGAwuj5/1d71bc55d12ae48aeee99f5352b57850/CAAC_Hotel_1.jpeg?w=1920"
        />
        <Heading fontSize={"18px"}>
          Airtable Builders Connect <br />
          Chicago
        </Heading>
        <Container fontSize={"15px"} color={"rgb(60, 60, 60)"}>
          Nov 15 at 8:30 a.m. CT
          <br />
          Chicago, IL
        </Container>
      </Box>
      <Box
        borderRadius={"1rem"}
        padding={"1rem"}
        backgroundColor={"white"}
        boxShadow={
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        }
      >
        <Image
          width={"350px"}
          height={"300px"}
          borderRadius={"2rem"}
          objectFit={"cover"}
          src="https://images.ctfassets.net/wl95ljfippl8/6XYMlsPVfZtJXIAdubdURF/558346ef00f153a71b7e92dfbcf19875/HcGwlfxh2IvJd0T5QRMu6_pmK5fSTvzE8R9ndRFgn8A.png?w=1920"
        />
        <Heading fontSize={"18px"}>
          How leaders orchestrate <br />
          content ops
        </Heading>
        <Container fontSize={"15px"} color={"rgb(60, 60, 60)"}>
          In todays's business landscape,
          <br />
          a robust content operation
          <br />
          startegy isn't a nice to have-i...
        </Container>
      </Box>
      <Box
        borderRadius={"1rem"}
        padding={"1rem"}
        backgroundColor={"white"}
        boxShadow={
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
        }
      >
        <Image
          width={"350px"}
          height={"300px"}
          borderRadius={"2rem"}
          objectFit={"cover"}
          src="https://images.ctfassets.net/wl95ljfippl8/3WUiDS2RLvsViWfrjY5cKg/9e984db7c639d323ce76f94a5c54b4e2/1_West_Hollywood.jpeg?w=1920"
        />
        <Heading fontSize={"18px"}>
          Airtable Builders Breakfast
          <br />
          Los Angales
        </Heading>
        <Container fontSize={"15px"} color={"rgb(60, 60, 60)"}>
          Dec 7 at 8:30 a.m. PT
          <br />
          West Hollywood, CA
        </Container>
      </Box>
      </Grid>
     <Box textAlign={'center'}>
      <Button
        fontSize={"22px"}
        padding={"8px"}
        border={"2px solid gray"}
        backgroundColor={"white"}
        color={"black"}
        width={"15%"}
      >
        Load More
      </Button>
      <Box/>

      <Box
        display={"flex"}
        alignItems={"center"}
        marginTop={"50px"}
        padding={"70px"}
        justifyContent={"space-between"}
        backgroundColor={"aliceblue"}
        borderRadius={"40px"}
      >
        <h1 style={{ fontSize: "35px" }}>Explore categories</h1>
        <Button>See all categories &rarr;</Button>
      </Box>
      <Box flexWrap={'wrap'} display={"flex"} backgroundColor={"aliceblue"}>
        <Box
          padding={"30px"}
          width={'20%'}
          height={"135px"}
          borderRadius={"20px"}
          backgroundColor={"white"}
          boxShadow={
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
          }
          margin={"20px"}
        >
          <Image
            width={"40%"}
            display={"block"}
            margin={"auto"}
            src="https://img.icons8.com/?size=96&id=KVvqEZ1GQYQ7&format=png"
          />
          <Container>Report</Container>
        </Box>
        <Box
        width={'20%'}
          padding={"30px"}
          height={"135px"}
          borderRadius={"20px"}
          backgroundColor={"white"}
          boxShadow={
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
          }
          margin={"20px"}
        >
          <Image
            width={"40%"}
            display={"block"}
            margin={"auto"}
            src="https://img.icons8.com/?size=160&id=IaCwgHEFn9aN&format=png"
          />
          <Container>eBook</Container>
        </Box>
        <Box
        width={'20%'}
          padding={"30px"}
          height={"135px"}
          borderRadius={"20px"}
          backgroundColor={"white"}
          boxShadow={
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
          }
          margin={"20px"}
        >
          <Image
            width={"40%"}
            display={"block"}
            margin={"auto"}
            src="https://img.icons8.com/?size=64&id=CjDiUIuQAoFN&format=png"
          />
          <Container>Webniars</Container>
        </Box>
        <Box
        width={'20%'}
          padding={"30px"}
        height={"135px"}
          borderRadius={"20px"}
          backgroundColor={"white"}
          boxShadow={
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
          }
          margin={"20px"}
        >
          <Image
           width={"40%"}
           display={"block"}
           margin={"auto"}
            src="https://img.icons8.com/?size=128&id=uNzoeGXjLfRM&format=png"
          />
          <Container>Quick Reads</Container>
        </Box>
        <Box
        width={'20%'}
          padding={"30px"}
         height={"135px"}
          borderRadius={"20px"}
          backgroundColor={"white"}
          boxShadow={
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
          }
          margin={"20px"}
        >
          <Image
           width={"40%"}
           display={"block"}
           margin={"auto"}
            src="https://img.icons8.com/parakeet/2x/test-account.png"
          />
          <Container>Demos</Container>
        </Box>
        <Box
        width={'20%'} 
          padding={"30px"}
          height={"135px"}
          borderRadius={"20px"}
          backgroundColor={"white"}
          boxShadow={
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
          }
          margin={"20px"}
        >
          <Image
            width={"40%"}
            display={"block"}
            margin={"auto"}
            src="https://img.icons8.com/?size=96&id=3ARwAGoH8mgi&format=png"
          />
          <Container>Events</Container>
        </Box>
      </Box>
    </Box>
    </Box>
  );
}
