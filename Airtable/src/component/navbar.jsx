import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Button,
	BreadcrumbSeparator,
	Flex,
	
	Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Platform from "../drawer/platform";
import Solution from "../drawer/solution";
export default function Navbar() {
	return (
		<>
			<Box
				backgroundColor={"white"}
				position={"fixed"}
				top={"0px"}
				left={"0px"}
				right={"0px"}
				zIndex={"1000"}
			>
				<Box
					justifyContent={"center"}
					alignItems={"center"}
					display={"flex"}
					textAlign={"center"}
					padding={"0px"}
					backgroundColor={"BlanchedAlmond"}
				>
					<p>
						Grow with Airtable:&nbsp;Integrate workflows within Airtable to help
						drive rapid iteration
					</p>
					<p>Learn more &rarr;</p>
				</Box>
				<Flex justifyContent={"space-between"}>
					<Flex alignItems={"center"} justifyContent={"space-around"}>
						<Box>
							<img src="https://www.airtable.com/favicon.ico" alt="" />
						</Box>
						<Box margin={"0 0 0 3px"} fontWeight={"bold"}>
							<h1>Airtable</h1>
						</Box>
						<Breadcrumb
							spacing="8px"
							cursor={"pointer"}
							separator={<ChevronRightIcon color="gray.500" />}
						>
							<BreadcrumbItem isCurrentPage fontSize={"19px"}>
								<Platform/>
							</BreadcrumbItem>
							<BreadcrumbItem isCurrentPage fontSize={"19px"}>
								<Solution/>
							</BreadcrumbItem>
							<BreadcrumbItem isCurrentPage fontSize={"19px"}>
								<Link to='/resources'><BreadcrumbLink href="#">Resource</BreadcrumbLink>
								</Link>
							</BreadcrumbItem>
							<BreadcrumbItem isCurrentPage fontSize={"19px"}>
								<BreadcrumbLink href="#">Pricing</BreadcrumbLink>
							</BreadcrumbItem>
						</Breadcrumb>
					</Flex>
					<Flex justifyContent={"space-around"} alignItems={"center"}>
						<Link to='/sales'><Button
							size="xs"
							fontWeight={"bold"}
							padding={"5px"}
							margin={"8px"}
							fontSize={"15px"}
							border={"1ps solid lightgray"}
							backgroundColor={"white"}
							borderRadius={".7rem"}
							color={"black"}
						>
							Contact sales
						</Button></Link>
						<Link to="/SignUp">
							<Button
								borderColor={"teal"}
								border={"none"}
								margin={"5px"}
								variant="outline"
								backgroundColor={"#254fad"}
								borderRadius={".7rem"}
								color={"white"}
							>
								Sign up for free
							</Button>
						</Link>
						<Link to="/Signin">
							<Button
								size="md"
								border={"none"}
								borderColor={"gray"}
								backgroundColor={"white"}
								margin={"0"}
								borderRadius={".5rem"}
								color={"black"}
							>
								Sign in
							</Button>
						</Link>
					</Flex>
				</Flex>
			</Box>
		</>
	);
}
