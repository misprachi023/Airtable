import React from "react";
import {
	Card,
	CardHeader,
	Text,
	Box,
	Image,
	CardBody,
	CardFooter,
	Container,
	Heading,
	Button,
	Flex,
} from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

export default function MarqueeSlider() {
	return (
		<Flex
			backgroundColor={"aliceblue"}
			padding={"50px"}
			marginTop={"0px"}
			
		>
			<Marquee style={{height:"600px"}} justifyContent={"space-around"} margin={"2%"}>
				<Box
					height={"500px"}
					marginRight={"5rem"}
					borderRadius={"1rem"}
					padding={"1rem"}
					boxShadow={
						"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
					}
					textAlign={"center"}
					backgroundColor={"white"}
				>
					<Heading color={"gray"} fontSize={"13px"}>
						REPORT
					</Heading>
					<Image
						width={"350px"}
						height={"300px"}
						borderRadius={"2rem"}
						objectFit={"cover"}
						src="https://images.ctfassets.net/wl95ljfippl8/3lSn5rp8Z7CUAXaspXY1zN/494a2222e3c1a61b6f296300eb246aff/Airtable_ForresterReport_AssetHub_1600x900.jpg"
					/>
					<Heading fontSize={"18px"}>
						Forrester Study: The Crisis of <br />
						Fractured Organizations
					</Heading>
					<Container fontSize={"15px"} color={"rgb(60, 60, 60)"}>
						Read the full study to learn about how silos
						<br />
						impact your business, and why it's time to
						<br />
						rebuild the connections between your
						<br />
						teams.
					</Container>
				</Box>
				<Box
					height={"500px"}
					marginRight={"5rem"}
					borderRadius={"1rem"}
					padding={"1rem"}
					backgroundColor={"white"}
					boxShadow={
						"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
					}
					textAlign={"center"}
				>
					<Heading color={"gray"} fontSize={"13px"}>
						BLOG
					</Heading>
					<Image
						width={"350px"}
						height={"300px"}
						object-position={"25% 25%"}
						borderRadius={"2rem"}
						objectFit={"cover"}
						src="https://images.ctfassets.net/wl95ljfippl8/26mWW00emxS52daLNbCwqz/4a809058255fc20059bfd1c43a1d1070/CustomerStories_Blog_1600x900.webp"
					/>
					<Heading fontSize={"18px"} color={"rgb(40, 40, 40)"}>
						How 6 world-class companies make <br />
						an outsized impact
					</Heading>
					<Container fontSize={"15px"} color={"rgb(60, 60, 60)"}>
						Discover how leading global companies are <br />
						using connected apps to dismantle silos.{" "}
					</Container>
				</Box>
				<Box
					height={"500px"}
					marginRight={"5rem"}
					borderRadius={"1rem"}
					padding={"1rem"}
					backgroundColor={"white"}
					boxShadow={
						"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
					}
					textAlign={"center"}
				>
					<Heading color={"gray"} fontSize={"13px"}>
						WEBNIAR
					</Heading>
					<Image
						width={"350px"}
						height={"300px"}
						borderRadius={"2rem"}
						objectFit={"cover"}
						src="https://images.ctfassets.net/wl95ljfippl8/Bh2I1AJHJw3TlYVAKc86I/cce5444a379c5086eb442928a12e5732/Ilan_.png"
					/>
					<Heading fontSize={"18px"} color={"rgb(40, 40, 40)"}>
						Airtable Leader Forum: Product <br />
						Roadmap{" "}
					</Heading>
					<Container fontSize={"15px"} color={"rgb(60, 60, 60)"}>
						Get a sneak peek of the roadmap from llan <br />
						Frank. VP of Product at Airtable, and see the <br />
						future of Airtable as a connected apps <br />
						platform
					</Container>
				</Box>
				<Box
					height={"500px"}
					marginRight={"5rem"}
					borderRadius={"1rem"}
					backgroundColor={"white"}
					padding={"1rem"}
					boxShadow={
						"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
					}
					textAlign={"center"}
				>
					<Heading color={"gray"} fontSize={"13px"}>
						WEBNIAR
					</Heading>
					<Image
						width={"350px"}
						height={"300px"}
						object-position={"25% 25%"}
						borderRadius={"2rem"}
						objectFit={"cover"}
						src="https://images.ctfassets.net/wl95ljfippl8/6LKDwEb3tGVTi7rku0TAFi/f6b8bc99c0c3e8aa65dc918172d74e2f/Product_Solution_Resource_2.png"
					/>
					<Heading fontSize={"18px"} color={"rgb(40, 40, 40)"}>
						Streamline product operations with
						<br />
						Airtable
					</Heading>
					<Container fontSize={"15px"} color={"rgb(60, 60, 60)"}>
						Learn how teams coonect data and
						<br /> workflow with a single source of truth and <br />
						automate work to free up time.
					</Container>
				</Box>
				<Box
					height={"500px"}
					marginRight={"5rem"}
					borderRadius={"1rem"}
					padding={"1rem"}
					backgroundColor={"white"}
					boxShadow={
						"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
					}
					textAlign={"center"}
				>
					<Heading color={"gray"} fontSize={"13px"}>
						KEYNOTE
					</Heading>
					<Image
						width={"350px"}
						height={"300px"}
						borderRadius={"2rem"}
						objectFit={"cover"}
						src="https://images.ctfassets.net/wl95ljfippl8/3WvqEjt9q7u9bIV0bH2Cio/3427146eda7c87500dff389e3e4251a4/ALF_NYC_Howie_Keynote_WIDE_V2.jpg"
					/>
					<Heading fontSize={"18px"} color={"rgb(40, 40, 40)"}>
						Airtable Leaders Forum: Keynote
					</Heading>
					<Container fontSize={"15px"} color={"rgb(60, 60, 60)"}>
						Hear how Howie Lui, CEO at Airtable, invites <br />
						leaders to imagine a fundamentally diffrent <br />
						way of operating through the use of <br />
						powerful apps.
					</Container>
				</Box>
				<Box
					height={"500px"}
					marginRight={"5rem"}
					borderRadius={"1rem"}
					padding={"1rem"}
					backgroundColor={"white"}
					boxShadow={
						"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
					}
					textAlign={"center"}
				>
					<Heading color={"gray"} fontSize={"13px"}>
						REPORT
					</Heading>
					<Image
						width={"350px"}
						height={"300px"}
						object-position={"25% 25%"}
						borderRadius={"2rem"}
						objectFit={"cover"}
						src="https://images.ctfassets.net/wl95ljfippl8/6AwqL7ZBmxCmi79ukx9g4E/4cdeef87a3ccbbcfbde2cd6ce3e970c4/Asset_Hub_1600x900.png"
					/>
					<Heading fontSize={"18px"} color={"rgb(40, 40, 40)"}>
						Benchmarks for product teams
					</Heading>
					<Container fontSize={"15px"} color={"rgb(60, 60, 60)"}>
						Explore data-backed insight from 700+ <br />
						product teams pros to learn how they <br />
						structure their teams and make roadmap <br />
						decisions.
					</Container>
				</Box>
				<Box
					height={"500px"}
					marginRight={"5rem"}
					borderRadius={"1rem"}
					padding={"1rem"}
					backgroundColor={"white"}
					boxShadow={
						"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
					}
					textAlign={"center"}
				>
					<Heading color={"gray"} fontSize={"13px"}>
						DEMO
					</Heading>
					<Image
						width={"350px"}
						height={"300px"}
						borderRadius={"2rem"}
						objectFit={"cover"}
						src="https://images.ctfassets.net/wl95ljfippl8/1KYBuli48wsG1As0cDJFRk/59a3d2aaa8f351cf77651a65769a15d0/product-marketing-digital-hero-image__1___1_.png"
					/>
					<Heading fontSize={"18px"} color={"rgb(40, 40, 40)"}>
						Modern marketing teams run on <br />
						Airtable
					</Heading>
					<Container fontSize={"15px"} color={"rgb(60, 60, 60)"}>
						Learn how Airtable's flexible platform allows <br />
						marketing teams to build exactly what they <br />
						need to deliver ambitious outcomes.
					</Container>
				</Box>
			</Marquee>
		</Flex>
	);
}
