import { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Select, Textarea, Button, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Sales() {
  const [formData, setFormData] = useState({
    businessName: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    companyName: '',
    jobLevel: '',
    team: '',
    additionalInfo: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    
      <Box display={{ base: 'flex', md: 'flex',sm:'block' }} backgroundColor={'#063041'} p={1}>
         <Box width={'50%'} color='white' >
            <Heading marginTop={"7rem"} size='2xl'>Explore how Airtable can work for you.</Heading>
            <Heading marginTop={'5rem'} size='sm'>Airtable has helped 450,000+ organizations build countless workflows across marketing, product development, design, operations, and more.</Heading>
            <Link>Trusted by 50% of the Fortune 1000</Link>
        
         </Box>

        <form as='form'  style={{backgroundColor:'white',width:'40%',padding:'4rem',borderRadius:"1rem"}}
        width={{ base: '40%', md: '40%',sm:'70%' }}
          
         onSubmit={handleSubmit}>
          <h1 style={{fontSize:"25px"}}>Contact our Sales Teams</h1>
          <hr />
          <br />

          <FormControl mb={4}>
            <FormLabel>Business Name</FormLabel>
            <Input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Company Name</FormLabel>
            <Input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Job Level</FormLabel>
            <Select
              name="jobLevel"
              value={formData.jobLevel}
              onChange={handleInputChange}
            >
              <option value="entry">Entry Level</option>
              <option value="mid">Mid Level</option>
              <option value="senior">Senior Level</option>
            </Select>
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Team</FormLabel>
            <Select
              name="team"
              value={formData.team}
              onChange={handleInputChange}
            >
              <option value="marketing">Marketing</option>
              <option value="sales">Sales</option>
              <option value="development">Development</option>
            </Select>
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Additional Information</FormLabel>
            <Textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
            />
          </FormControl>

          <Button type="submit" colorScheme="teal">
            Submit
          </Button>
        </form>
      </Box>
   
  );
}

export default Sales;
