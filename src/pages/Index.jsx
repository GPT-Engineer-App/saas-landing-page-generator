import React from "react";
import { Box, Button, Center, Container, Flex, Heading, Image, Stack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaRocket, FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.800")} minH="100vh">
      <Container maxW="container.xl">
        <Stack spacing={8} py={16}>
          {/* Hero Section */}
          <Center>
            <VStack spacing={2} textAlign="center">
              <Heading as="h1" size="2xl">
                Supercharge Your Workflow
              </Heading>
              <Text fontSize="xl" color={useColorModeValue("gray.600", "gray.200")}>
                The ultimate SaaS toolkit to help streamline your processes and boost productivity.
              </Text>
              <Button size="lg" colorScheme="teal" leftIcon={<FaRocket />}>
                Get Started
              </Button>
            </VStack>
          </Center>

          {/* Image Section */}
          <Center>
            <Image src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBpbGx1c3RyYXRpb258ZW58MHx8fHwxNzA4ODY5MTcwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Dashboard illustration" borderRadius="lg" shadow="2xl" />
          </Center>

          {/* Features Section */}
          <Box>
            <Heading as="h2" size="xl" textAlign="center" mb={6}>
              Features
            </Heading>
            <Flex justify="center" direction={{ base: "column", md: "row" }} gap={6}>
              <Feature icon={<FaCheckCircle />} title="Seamless Integration" description="Integrate with your existing tools quickly and without hassle." />
              <Feature icon={<FaCheckCircle />} title="Real-time Analytics" description="Get insights and metrics in real-time to make informed decisions." />
              <Feature icon={<FaCheckCircle />} title="Team Collaboration" description="Collaborate with your team efficiently in a shared workspace." />
            </Flex>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

const Feature = ({ icon, title, description }) => (
  <VStack p={5} bg={useColorModeValue("white", "gray.700")} shadow="md" borderRadius="lg" width={{ base: "100%", md: "30%" }} alignItems="flex-start" spacing={2}>
    <Flex w={10} h={10} align="center" justify="center" color="teal.500" rounded="full" bg="teal.100">
      {icon}
    </Flex>
    <Heading as="h3" size="md">
      {title}
    </Heading>
    <Text color={useColorModeValue("gray.600", "gray.200")}>{description}</Text>
  </VStack>
);

export default Index;
