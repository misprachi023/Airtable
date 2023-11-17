import { Heading, Button, Container} from "@chakra-ui/react";


export default function Solution(){
    return(
        
        <Heading textAlign={"center"} backgroundColor={"black"} padding={"30px"}>
          <h1 style={{color:"white"}}>Solutions to empower every team</h1> 
          
           <Container style={{color:"CornflowerBlue", padding:"10px"}}>Customize the right workflows to fit your needs and help your team find success with Airtable.</Container>
          
           <Button
            width={"12rem"}
           
            height={"3rem"}
            borderColor={"none"}
            fontWeight={"bold"}
            border={"none"}
            padding={"15px"}
            margin={"5px"}
            fontSize={"18px"}
            variant="outline"
            backgroundColor={"#254fad"}
            borderRadius={".7rem"}
            color={"white"}
          >
            Watch Demo
          </Button>
          <Button
            width={"12rem"}
            height={"3rem"}
            fontWeight={"bold"}
            padding={"15px"}
            margin={"8px"}
            fontSize={"18px"}
            border={"1px solid gray"}
            backgroundColor={"rgb(50,50,50)"}
            borderRadius={".7rem"}
            color={"white"}
          >
            Contact sales 
          </Button>
        </Heading>
        
       
    )
}