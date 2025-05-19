import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
 
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Badge, Wrap, WrapItem, List, ListIcon } from '@chakra-ui/react';
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5'
import Image from 'next/image'
import { MdStar } from 'react-icons/md';
const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const skills = ['Cisco', 'Mikrotik', 'VMware', 'Linux', 'Networking', 'Firewall'];
const Home = () => (
  
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hey there! I keep the servers calm and the cables untangled.
      </Box>

      <Box data-aos="fade-up" display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
           Satrio Janara Arafa
          </Heading>
          <p>Network Administrator</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/ganteng-banget.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading data-aos="fade-up" as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph data-aos="fade-up">
         👋 Hey there!
I'm a passionate Network Administrator who loves keeping systems secure, connections stable, and downtime at zero. I work behind the scenes to make sure networks run smoothly — from configuring routers and managing firewalls to monitoring traffic and troubleshooting issues.

I speak fluent TCP/IP, treat every ping like a check-in, and see every alert as a challenge to solve. Whether it's maintaining uptime or optimizing performance, I’m here to keep the digital world connected.

When I’m not managing networks, you’ll probably find me exploring new tech tools, scripting automation, or helping friends fix their Wi-Fi.

Let’s stay connected — the signal is strong!
        </Paragraph>
        <Box data-aos="fade-up" align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section data-aos="fade-up" delay={0.2}>
        <Heading data-aos="fade-up" as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection data-aos="fade-up">
          <BioYear>2008</BioYear>
          Born in Cilacap, Indonesia.
        </BioSection>
        <BioSection data-aos="fade-up">
          <BioYear>2023</BioYear>
          Network Computer Engineering student on SMK Darussalam Karangpucung
        </BioSection>
      
        
      </Section>

   <Section data-aos="fade-up" delay={0.3}>
  <Heading data-aos="fade-up" as="h3" variant="section-title" mb={4}>
    I ♥
  </Heading>

  <Stack data-aos="fade-up" spacing={3}>
    <Text>💻 Networking</Text>
    <Text>🖥️ Linux CLI</Text>
    <Text color="pink.400">🛡️ Cybersecurity</Text>
    <Text>📊 Monitoring Systems</Text>
    <Text>☕ Coffee</Text>
    <Text>🛠️ Troubleshooting at 2 AM</Text>
  </Stack>
</Section>
  <Heading data-aos="fade-up" as="h3" variant="section-title" mb={4}>
    Skill
  </Heading>

<Section data-aos="fade-up">
  <Wrap spacing={3}>
      {skills.map((skill) => (
        <WrapItem data-aos="fade-up" key={skill}>
          <Badge 
            variant="solid" 
            colorScheme="teal" 
            fontSize="1em"
            px={3}
            py={1}
            borderRadius="full"
          >
            {skill}
          </Badge>
        </WrapItem>
      ))}
    </Wrap>
</Section>



      <Section delay={0.3} data-aos="fade-up">
        <Heading as="h3" variant="section-title">
          Achievements
        </Heading>
        
         <List spacing={3}>
      <ListItem data-aos="fade-up">
        <ListIcon as={MdStar} color="yellow.400" />
        5th Place Winner at IT Network System Administration LKS 2025, Cilacap Regency
      </ListItem>
      {/* Bisa tambah item lain di sini */}
    </List>
        
            
        
      </Section>

      <Section data-aos="fade-up" delay={0.3}>
        <Heading as="h3" variant="section-title">
       Social Media
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Vishwas-10" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Satrionjay
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/vishwas-saini-384212218/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Vishwas Saini
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/vishwas10/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @Vishwas10
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="https://drive.google.com/file/d/1f8wTm2_UAicf9EZ5vJ4tMVEmUMLiXR2k/view?usp=sharing" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            <a href="https://drive.google.com/file/d/1f8wTm2_UAicf9EZ5vJ4tMVEmUMLiXR2k/view?usp=sharing">Download Resume</a> 
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
