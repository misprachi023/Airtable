import {
  Flex,
  Image,
  Box,
  Button,
  Heading,
  
  AspectRatio,
} from "@chakra-ui/react";
import {Link} from 'react-router-dom'
// import { Card, CardHeader, CardBody, Heading } from "@chakra-ui/react";
import "./marquee.css";

export default function Cover() {
  return (
    <>
      <Box
        backgroundImage={
          "https://images.ctfassets.net/wl95ljfippl8/6s30DfY3zlqEuWBCdRVAfi/e5ec1f21636e7eb10387608d82fba11a/Homepage_0503_3000x970_v2.webp"
        }
        width={"100%"}
        height={"100% "}
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        marginTop={"7rem"}
        padding={"5%"}
        display={"flex"}
        fontSize={"35px"}
      >
        <Box padding={"0px"} gap={"10px"}>
          <Heading as="h1" size="3xl" color={"MidnightBlue"}>
            The fastest <br />
            way to build <br />
            apps
          </Heading>
          <h6 style={{ color: "#254fad" }}>
            Empower your team to work faster and more <br />
            confidently than ever before.
          </h6>

         <Link to='/SignUp'><Button
            width={"12rem"}
            height={"3rem"}
            borderColor={"teal"}
            fontWeight={"bold"}
            border={"none"}
            padding={"7px"}
            margin={"5px"}
            fontSize={"15px"}
            variant="outline"
            backgroundColor={"#254fad"}
            borderRadius={".7rem"}
            color={"white"}
          >
            Sign up for free
          </Button></Link>
          <Link to='/sales'><Button
            width={"12rem"}
            height={"3rem"}
            fontWeight={"bold"}
            padding={"5px"}
            margin={"8px"}
            fontSize={"1rem"}
            border={"1px solid gray"}
            backgroundColor={"white"}
            borderRadius={".7rem"}
            color={"black"}
          >
            Contact sales 
          </Button></Link>
        </Box>
      </Box>
      <Flex
        width={"100%"}
        marginTop={"0px"}
        justifyContent={"space-between"}
        backgroundColor={"AliceBlue"}
        padding={"50px"}
        boxShadow={"rgba(35, 214, 245, 0.06) 0px 2px 4px 0px inset"}
      >
        <img
          src="https://images.ctfassets.net/wl95ljfippl8/5NsQDhM8mFERomtb0YnTyy/eaf010080126335cd1c3ff6d44d03adf/coleHaan-grayscale.svg"
          alt=""
        />
        <img
          src="https://images.ctfassets.net/wl95ljfippl8/3d0dgz7cuh8WMJvduMtnB0/7f6476017b9c8e04aac6454056aa5ab7/expedia-grayscale.svg"
          alt=""
        />
        <img
          src="https://images.ctfassets.net/wl95ljfippl8/38Mb9jhrpeEPTjXoP435aU/0ddee3d6a19f78f75cdf34ff2c604e08/levis-grayscale.svg"
          alt=""
        />
        <img
          src="https://images.ctfassets.net/wl95ljfippl8/1FY36Z77bS6isAXbe68cMV/ddf540991fd643c6333c0689dd3ce42d/time-grayscale.svg"
          alt=""
        />
        <img
          src="https://images.ctfassets.net/wl95ljfippl8/2rX3B5VldAdP4SqQpZTJgh/026b1e9f3045f8a2b58e3b7c63606d10/shopify-grayscale.svg"
          alt=""
        />
        <img
          src="https://images.ctfassets.net/wl95ljfippl8/6IvvinEh0VFlx2K00AUSwP/11dce8816d7b671f8d98ac2d66eb2a0b/medium-grayscale.svg"
          alt=""
        />
      </Flex>
      <Box
        display={"flex"}
        marginTop={"80px"}
        alignItems={"center"}
        fontSize={"30px"}
        color={"rgb(30,30, 30)"}
		padding={"10px"}
      >
        {" "}
        <h2>
          Operationalize your critical data, move beyond rigid tools, and
          reimagine workflows with AI. No code required.
        </h2>
        <img
          width={"40%"}
          padding={"10px"}
          src="https://images.ctfassets.net/wl95ljfippl8/4eQHSrJaUSTb0M97YNX5bU/02f7f7dc8d982631d24ac9cab257e34c/Platform4x3.webp"
          alt=""
        />
      </Box>

      <Box
        display={"flex"}
        marginTop={"50px"}
        alignItems={"center"}
        fontSize={"30px"}
        marginLeft={"50px"}
        padding={"30px"}
      >
        <video
          width={"40%"}
          ratio={1}
          margin={"auto"}
          autoPlay
          loop
          mute
          controls={false}
          title=""
          style={{ borderRadius: "2rem" }}
          src="https://videos.ctfassets.net/wl95ljfippl8/7zF9WY7AzMowHl5XcvOxFj/537c723d733d71843b824337ef3e515e/PlatformOverview-2000x1500.mp4"
        ></video>

        <Box padding={"50px"} marginRight={"70px"} marginLeft={"70px"}>
          <h2>Simple to build. Intuitive to use.</h2>
          <h5>
            Enable those closest to the real-world details of your business to
            customize the apps that accelerate how work gets done.
          </h5>
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
        </Box>
      </Box>
      <Flex justifyContent={"center"}  marginTop={"80px"}>
        <Heading marginRight={"5rem"} fontSize={"3rem"}>
          No matter your <br />
		   workflow,you can build 
          <br /> it in Airtable
        </Heading>
        <Heading color={"gray"}>
          End silos with a unique platform that <br />
          connects every part ofyour work.{" "}
        </Heading>
      </Flex>

      {/* <Flex justifyContent={"space-between"} display={"flex"}>
				<Box>
					<h1>Integrate critical workflows</h1>
					<h4>
						Link Airtable to your existing tools, connect important business
						processes, and build more powerful applications.
					</h4>
					<Button>View all Integration</Button>
				</Box>
				<Box
					className="marquee-conatiner"
					border={"1px solid red"}
					height={"100px"}
				>
					<Box className="marquee-item">
						<img src="https://images.ctfassets.net/wl95ljfippl8/55GS3KDNw95J3ygcfxmQII/4ecefe320b4e0bb50804e020e11d981a/googleCalendar.svg" />
						<h3>Google Calender</h3>
						<p>Events</p>
					</Box>
				</Box>
				<Box className="marquee-conatiner" border={"1px solid red"}>
					<Box className="marquee-item">
						<img src="https://images.ctfassets.net/wl95ljfippl8/bUyJCuV0U9wzHyH0xIPam/e98947d53fed24f0a0c03d4120c70d93/outlook.svg" />
						<h3>Outlook Calender</h3>
						<p>Communication</p>
					</Box>
				</Box>
				<Box className="marquee-conatiner" border={"1px solid red"}>
					<Box className="marquee-item">
						<img
							width={"50%"}
							height={"45px"}
							src="https://images.ctfassets.net/wl95ljfippl8/2u2Rp7WfgH4QnU6gZGByvc/6c945c1c830e3844568b2611f2bd84ed/box.webp"
						/>
						<h3>Google Calender</h3>
						<p>Events</p>
					</Box>
				</Box>
				<Box className="marquee-conatiner" border={"1px solid red"}>
					<Box className="marquee-item">
						<img src="https://images.ctfassets.net/wl95ljfippl8/4hlnF6upnGNPGBjurBxT1l/b9c2a8499adf91be698879df50a79295/slack.svg" />
						<h3>Slack</h3>
						<p>Events</p>
					</Box>
				</Box>
				<Box className="marquee-conatiner" border={"1px solid red"}>
					<Box className="marquee-item">
						<img
							width={"50%"}
							height={"45px"}
							src="https://images.ctfassets.net/wl95ljfippl8/pujuHN1IivPoZHYJcNrlM/d561d3e4c57246bd17ae5eeeb82560a4/yt_icon_rgb_adobe_express.svg"
						/>
						<h3>YouTube</h3>
						<p>Media</p>
					</Box>
				</Box>
				<Box className="marquee-conatiner" border={"1px solid red"}>
					<Box className="marquee-item">
						<img src="https://images.ctfassets.net/wl95ljfippl8/4oJQCipVlZjGl5vaMbWBU4/2c3181abf117f7d8013fb14771c735fa/googleDrive.svg" />
						<h3>Google Drive</h3>
						<p>File Management</p>
					</Box>
				</Box>
				<Box className="marquee-conatiner" border={"1px solid red"}>
					<Box className="marquee-item">
						<img src="https://images.ctfassets.net/wl95ljfippl8/3SF8zNY21ZMzPlhEIvT6lk/157fb2c5b195cc69e84df8d9bf2e54f2/zendesk.svg" />
						<h3>Zendesk</h3>
						<p>Customer Support</p>
					</Box>
				</Box>
				<Box className="marquee-conatiner" border={"1px solid red"}>
					<Box className="marquee-item">
						<img src="https://images.ctfassets.net/wl95ljfippl8/1ZlbGBOFrZQZrt3sGPGfVF/132bf395c900993b91b20c37cd95434d/miro.svg" />
						<h3>Micro</h3>
						<p>Collaboration</p>
					</Box>
				</Box>
				<Box className="marquee-conatiner" border={"1px solid red"}>
					<Box className="marquee-item">
						<img
							width={"50%"}
							height={"45px"}
							src="https://images.ctfassets.net/wl95ljfippl8/227taekzJ9UfuM9knHRa7B/29b6f61d6fc9cd1e2c3fdf409dca8b0b/Vector.webp"
						/>
						<h3>Jira</h3>
						<p>Project manager</p>
					</Box>
				</Box>
				<Box className="marquee-conatiner" border={"1px solid red"}>
					<Box className="marquee-item">
						<img src="https://images.ctfassets.net/wl95ljfippl8/49cRKieoNarRQ3lO04U0ep/43f0955d51b6b38f1cd6d18dbff1bab6/stripe.svg" />
						<h3>Stripe</h3>
						<p>Payments</p>
					</Box>
				</Box>
				<Box className="marquee-conatiner" border={"1px solid red"}>
					<Box className="marquee-item">
						<img
							width={"50%"}
							height={"45px"}
							src="https://images.ctfassets.net/wl95ljfippl8/5GZ6xgzexsJ4X7DZTzR5zf/e69afd37d5f88be1cfc922c6d8dab749/Vector-1.webp"
						/>
						<h3>Salesforce</h3>
						<p>CRM</p>
					</Box>
				</Box>
				<Box className="marquee-conatiner" border={"1px solid red"}>
					<Box className="marquee-item">
						<img src="https://images.ctfassets.net/wl95ljfippl8/6UeNsJK5hcwIMf93kvJtr6/45c15e663bf109bcfc221da4afd686a4/email.svg" />
						<h3>Email</h3>
						<p>Communication</p>
					</Box>
				</Box>
				<Box className="marquee-conatiner" border={"1px solid red"}>
					<Box className="marquee-item">
						<img src="https://images.ctfassets.net/wl95ljfippl8/2qFcRilGJDiZt6mcpyNpR6/febf63a7d618c30eb891a1f14b1d5608/github.svg" />
						<h3>Github</h3>
						<p>File Management</p>
					</Box>
				</Box>
			</Flex> */}
    </>
  );
}
