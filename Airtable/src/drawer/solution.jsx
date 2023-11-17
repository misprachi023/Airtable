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
export default function Solution() {
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
					Solution
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
                        <span>TEAM</span><hr display={"inline"}/>
						<br />
						
						<h1 style={{fontWeight:"bold"}}>Product</h1>
							<br />
							<h4>create custom workflow to run campaigns and track successs</h4>
						
						<br />
						<h1 style={{fontWeight:"bold"}}> Marketing</h1>
						<br />
						<h4>Bring your data and processes into a single , well- organized palce</h4>
						<br />
						<h1 style={{fontWeight:"bold"}}>Operation</h1>
						<br />
                        <h4>Build roadmap and alignmant while creating product and track successs</h4>
						<br />
						<h1 style={{fontWeight:"bold"}}>Human Resource</h1>
						<br />
						<h4>Manage and streamline processes from hire to retrive</h4>
						<br />
						<h1 style={{fontWeight:"bold"}}>Sales</h1>
						<br />
						<h4>Win loyal customer with smater workflow and connected data</h4>
                       <br />

						<h1 style={{fontWeight:"bold"}}>Finance</h1>   
						<br />
						<h4>Stramline requests manage budgets and automate reporting</h4>    
						
					</DrawerBody>

					
				</DrawerContent>
			</Drawer>
		</>
	);
}
