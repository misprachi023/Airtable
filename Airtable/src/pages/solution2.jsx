import { Box, Image, Button, Flex } from "@chakra-ui/react";
import { Heading, Container } from "@chakra-ui/react";
export default function SolutionSec() {
  return (
    <Box
      display={"flex"}
      padding={"90px"}
      alignItems={"center"}
      textAlign={"center"} 
    >
      <Box>
        <h1 style={{ display: "flex" }}>
          No matter your workflow, you can build it in Airtable
        </h1>

        <h3>
          Explore the ways you can get to better business outcomes with
          solutions for every type of team.
        </h3>
        <Flex>
          <Box
            display={"inline"}
            padding={"20px"}
            margin={"20px"}
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
            width={"20%"}
          >
            <Image src="https://images.ctfassets.net/wl95ljfippl8/2UJxTfSxC1Ee97OEqA2c3X/5adab2c9b86b6f03ac0003a758f062ab/Megaphone.svg?w=1920" />
            <Heading>Solution for Marketing Teams</Heading>
            <Button>Explore Marketing &rarr;</Button>
          </Box>
          <Box
            padding={"20px"}
            margin={"20px"}
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
            width={"20%"}
          >
            <Image src="https://images.ctfassets.net/wl95ljfippl8/5h8rgUHoqy5KWqQ2a5T6Gu/f39db3ef52bff6ba608ec9f8e8ec3e89/KanbanFeature.svg?w=1920" />
            <Heading>Solution for Product Teams</Heading>
            <Button>Explore Product &rarr;</Button>
          </Box>
          <Box
            padding={"20px"}
            margin={"20px"}
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
            width={"20%"}
          >
            <Image src="https://images.ctfassets.net/wl95ljfippl8/45mqA49OzCMRmDsArJwFe5/ab6626afddea914d799ca35c622a304b/Rocket.svg?w=1920" />
            <Heading>Solution for Operation Teams</Heading>
            <Button>Explore Operation &rarr;</Button>
          </Box>
          <Box
            padding={"30px"}
            margin={"20px"}
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
            width={"70%"}
          >
            <Image src="https://images.ctfassets.net/wl95ljfippl8/3q1Ooa2HoVsQaKyvF4qNkZ/8c8f43cc9729759ba2b71d609571a861/PersonBolt.svg?w=1920" />
            <Heading>Solution for HR Teams</Heading>
            <Button>Explore HR &rarr;</Button>
          </Box>
        </Flex>

        <Box
          padding={"50px"}
          marginRight={"70px"}
          marginLeft={"70px"}
          display={"flex"}
        >
          <h2>Simple to build. Intuitive to use.</h2>
          <h5>
            Enable those closest to the real-world details of your business to
            customize the apps that accelerate how work gets done.
          </h5>
        </Box>
        <Button
          padding={"5px"}
          border={"none"}
          borderRadius={"10px"}
          fontSize={"18px"}
          backgroundColor={"aliceblue"}
          color={" rgb(101, 101, 247)"}
          fontWeight={"bold"}
          cursor={"pointer"}
        >
          <p>Explore the platform &rarr;</p>
        </Button>

        <Box display={"block"}>
          <Image src="https://images.ctfassets.net/wl95ljfippl8/1MhsKH821zrTpAmLzgd6ab/d13ee73a965ac7f9381d9ef1b25dbda7/Image_1.png?w=1920" />
        </Box>
      </Box>
      <Box display={"inline"}>
        <Box display={"flex"}>
          <Image src="https://images.ctfassets.net/wl95ljfippl8/5n7LyoXgToR3kJp5mkNabA/1c5804a8743d6daf4d68571043945990/Image_2.png?w=1920" />
        </Box>
        <Heading>Solutions for Product teams</Heading>
        <Container>
          Set your roadmap, collect and act on customer feedback, and launch
          great products your customers love.
        </Container>
        <Button>Explore Product Solution &rarr;</Button>
      </Box>

      <Heading>Solutions for Operations teams</Heading>
      <Container>
        Connect initiatives across your business and streamline your team’s most
        important workflows to hit your goals.
      </Container>
      <Button>Explore Operation Solution &rarr;</Button>
      <Box display={"flex"}>
        <Image src="https://images.ctfassets.net/wl95ljfippl8/47BEedQa9whPOx2Q2Z2UTB/396758cdc039f2ab53fa13921d476936/Image_3.png?w=1920" />
      </Box>

      <Box display={"flex"}>
        <Image src="https://images.ctfassets.net/wl95ljfippl8/4hxvVbrBiIFPhr6T34ds07/73b8fddcf0988a29c270873d600a0354/Image_4.png?w=1920" />
      </Box>
      <Heading>Solutions for HR teams</Heading>
      <Container>
        Easily orchestrate everything from your candidate pipeline to your new
        hire onboarding, all from within Airtable.
      </Container>
      <Button>Explore HR Solution &rarr;</Button>
      <Box>
        <Heading>Solutions for Sales teams</Heading>
        <Container>
          Keep sales and account management teams in sync, manage accounts and
          track sales pipelines, and create lifelong champions.
        </Container>
        <Button>Explore Sales Solution &rarr;</Button>
        <Box display={"flex"}>
          <Image src="https://images.ctfassets.net/wl95ljfippl8/4ridDUt3J62imfOdnBeDg9/a0f061992850e9ed5bdfc210a219ff86/Image_5.png?w=1920" />
        </Box>
      </Box>
      <Box display={"flex"}>
        <Image src="https://images.ctfassets.net/wl95ljfippl8/DIjmpPvgmrX1vLmCo3AL9/d478ec217779e7146a23380f076925ab/Image_6.png?w=1920" />
      </Box>
      <Heading>Solutions for Finance teams</Heading>
      <Container>
        Streamline financial workflows from growth planning and reporting to
        budgeting and purchase approvals—all in Airtable.
      </Container>
      <Button>Explore Finanace Solution &rarr;</Button>

      <Box>
        <Heading>Start building on Airtable today</Heading>

        <Button>Contact Sales</Button>
        <Box display={"flex"}>
          <Image width={"250%"}
           src="https://images.ctfassets.net/wl95ljfippl8/6bxSdvjXa4ojmkyNduqFIX/e90e3ddb18d60d39e8609cb6840abe22/Project_planning_061422__1_.png?w=1920" />
        </Box>
      </Box>
    </Box>
  );
}
