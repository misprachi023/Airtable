import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	useDisclosure,
	DrawerContent,
	DrawerCloseButton,
	Button,
	Flex,
} from "@chakra-ui/react";
import { useRef } from "react";
export default function Platfrom() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();

	return (
		<>
			<Flex alignItems={"center"}>
				<Button
					ref={btnRef}
					marginBottom={"2.5rem"}
					variant="ghost"
					verticalAlign={"center"}
					onClick={onOpen}
				>
					Platform
				</Button>
			</Flex>
			<Drawer
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerContent style={{ marginTop: "7rem" }}>
					<DrawerCloseButton />
					<DrawerHeader></DrawerHeader>

					<DrawerBody>
                        <span>PLATFORM</span><hr display={"inline"}/>
						<Button size='lg' variant='ghost'> Platform Overview</Button>
						<br />
						<h4>Unblock the power of a next-gen app-building platform</h4>
						<br />
						<h1 style={{fontWeight:"bold"}}>App Building</h1>
						<br />
						<h4>Enable teams to build custom business apps-no code neended</h4>
						<br />
						<h1 style={{fontWeight:"bold"}}> AI</h1>
						<br />
						<h4>Tranform business workflow with the power of AI</h4>
						<br />
						<h1 style={{fontWeight:"bold"}}>Connected Data</h1>
						<br />
						<h4>Connect data from apps, workflow and , tools to create a source of truth</h4>
						<br />

						<h1 style={{fontWeight:"bold"}}>Goverance and Scale</h1>
						<br />
						<h4>Centrally amange security, permission and data protection at scale</h4>
						<br />
						<h1 style={{fontWeight:"bold"}}>Platform Features</h1>
						<br />
						<h4>Learn about Airtable views, interface , automations, and more</h4>
						<br />
                        <span>TOOLS</span><hr display={"inline"}/>

						<Button fontWeight={"bold"}>Intergation</Button>       
						<Button fontWeight={"bold"}>Extension Markplace</Button>
						<Button fontWeight={"bold"}>Download</Button>
						<br />
						<Button fontWeight={"bold"}>What's New</Button>
					</DrawerBody>

					
					
				</DrawerContent>
			</Drawer>
		</>
	);
}
