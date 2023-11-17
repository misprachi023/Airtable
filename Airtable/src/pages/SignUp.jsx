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
export function SignUp() {
	return (
		<>
			<Box textAlign={"center"} margin={"auto"} marginTop={"5%"} width={"40%"}>
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
					Create your free account
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
				<Text fontSize={".8rem"}> Continue With Google ID</Text>
				<Container marginTop={"5rem"}>
					By creating an account, you agree to the{" "}
				</Container>
				<Spacer />
				<Text fontSize={".9rem"}>
					Already have an Account? <Link color={"#166ee1"}>sign in</Link>
				</Text>
			</Box>
		</>
	);
}
