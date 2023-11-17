// import { EmailIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  space,
  IconButton,
} from "@chakra-ui/react";
import {
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <> 
      <Flex alignItems={"center"} marginTop={"30px"}>
        <Box>
          <img src="https://www.airtable.com/favicon.ico" alt="" />
        </Box>
        <Breadcrumb
          spacing="10px"
          separator={<space color="gray.500" />}
          fontWeight={"bold"}
          fontSize={"18px"}
          color={"rgb(30,30, 30)"}
        >
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Platform</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Solution</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            {" "}
            
            <BreadcrumbLink href="#">Resources</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Pricing</BreadcrumbLink>
          </BreadcrumbItem>
         
        </Breadcrumb>
        <Flex alignItems={"center"} marginLeft={"34%"} >
          <Image
            width={"10%"}
            
            padding={"10px"}
            src="https://cdn-icons-png.flaticon.com/128/1384/1384005.png"
          />

          <Image
            width={"10%"}
            
            padding={"10px"}
            src="https://cdn-icons-png.flaticon.com/128/3536/3536569.png"
          />

          <Image
            width={"10%"}
           
            padding={"10px"}
            src="https://cdn-icons-png.flaticon.com/128/733/733635.png"
          />
          <Image
            width={"10%"}
           
            padding={"10px"}
            src="https://cdn-icons-png.flaticon.com/128/1077/1077042.png"
          />

          <Image
            width={"10%"}
           
            padding={"10px"}
            src="https://cdn-icons-png.flaticon.com/128/717/717426.png"
          />
        </Flex>
      </Flex>

      <hr />
      <Flex justifyContent={"space-around"}>
        <Box>
          <UnorderedList listStyleType={"none"} lineHeight={"40px"}>
            <h3>Platform</h3>
            <ListItem>Platform Overview</ListItem>
            <ListItem>Integration</ListItem>
            <ListItem>Extensions</ListItem>
            <ListItem>App Building</ListItem>
            <ListItem>AI</ListItem>
            <ListItem>Connected Data</ListItem>
            <ListItem>See more</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <UnorderedList listStyleType={"none"} lineHeight={"40px"}>
            <h3>Solution</h3>
            <ListItem>Product</ListItem>
            <ListItem>Marketing</ListItem>
            <ListItem>Operation</ListItem>
            <ListItem>Human Resources</ListItem>
            <ListItem>Sales</ListItem>
            <ListItem>Finance</ListItem>
            <ListItem>See more</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <UnorderedList listStyleType={"none"} lineHeight={"40px"}>
            <h3>Learn</h3>
            <ListItem>Learning Center</ListItem>
            <ListItem>Events</ListItem>
            <ListItem>Vedio Center</ListItem>
            <ListItem>Demos</ListItem>
            <ListItem>Customer Stories</ListItem>
            <ListItem>Webinars</ListItem>
            <ListItem>See more</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <UnorderedList listStyleType={"none"} lineHeight={"40px"}>
            <h3>Resources</h3>
            <ListItem>Partners</ListItem>
            <ListItem>Services</ListItem>
            <ListItem>Developers</ListItem>
            <ListItem>Community</ListItem>
            <ListItem>Templates</ListItem>
            <ListItem>Airtable Universe</ListItem>
            <ListItem>See more</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <UnorderedList listStyleType={"none"} lineHeight={"40px"}>
            <h3>Company</h3>
            <ListItem>About</ListItem>
            <ListItem>Carrers</ListItem>
            <ListItem>Blog</ListItem>
            <ListItem>Status</ListItem>
            <ListItem>Newsroom</ListItem>
            <ListItem>Try Airtable for free</ListItem>
          </UnorderedList>
        </Box>
      </Flex>

      <Breadcrumb
        spacing="12px"
        separator={<space color="gray.500" />}
        fontWeight={"bold"}
        marginLeft={"45px"}
        fontSize={"15px"}
        color={"rgb(40,40, 40)"}
        cursor={"pointer"}
        marginTop={"60px"}
      >
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Security</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">API</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Sitemap</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Privacy</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Terms</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Do Not Sell/Share My Info</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
}
