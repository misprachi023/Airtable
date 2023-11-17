import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	Button,
	Container,
	Heading,
	Box,
	Link,
	Image,
	Flex,
	Text,
	Spacer,
} from "@chakra-ui/react";
export function Signin() {
	return (
		<>
			<Flex padding={"5rem"} style={{ justifyContent: "space-around" }}>
				<Box
					textAlign={"center"}
					margin={"auto"}
					marginTop={"5%"}
					width={"25%"}
				>
					<Flex justifyContent={"center"}>
						<img
							width={"10%"}
							display={"inline"}
							src="https://www.airtable.com/favicon.ico"
							alt=""
						/>
						<Heading>Airtable</Heading>
					</Flex>
					<Heading marginTop={"5%"} as="h3" size="lg" textAlign={"left"}>
						SingIn
					</Heading>
					<FormLabel marginTop={"4%"} fontSize={"1.5rem"} as="legend">
						Work email
					</FormLabel>
					<Input
						placeholder="name@company"
						size="lg"
						width={"100%"}
						type="email"
					/>
					<Button
						color="white"
						backgroundColor={"#166ee1"}
						width={"100%"}
						display={"block"}
					>
						continue
					</Button>
					<hr />
					or
					<hr />
					<Button variant="outline" width={"100%"}>
						Continue with <span>Single Sign On</span>
					</Button>
					<Button variant="outline" width={"100%"}>
						<Image
							width={"5%"}
							marginRight={"5%"}
							src="https://img.icons8.com/?size=48&id=17949&format=png"
						/>
						Continue with Google
					</Button>
					<Text fontSize={".8rem"}> Continue With Apple ID</Text>
					<Container marginTop={"5rem"}>
						By creating an account, you agree to the{" "}
					</Container>
					<Spacer />
					<Text fontSize={".9rem"}>
						Already have an Account? <Link color={"#166ee1"}>sign in</Link>
					</Text>
				</Box>
				<Box
					height={"700px"}
					width={"380px"}
					borderRadius={"2rem"}
					backgroundImage={
						"https://static.airtable.com/images/sign_in_page/vara_medium.webp"
					}
					backgroundSize={"cover"}
				>
					<Box margin={"10%"} marginTop={"30%"}>
						<Heading color={"#0076A8"} marginTop={"10%"} flexWrap={"wrap"}>
							Get an overview of our latest platform features
						</Heading>
						<Button variant={"outline"}>Learn more</Button>
					</Box>
				</Box>
			</Flex>
		</>
	);
}
