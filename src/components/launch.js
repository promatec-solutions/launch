//import local resources and assets
import "../assets/css/launch.scss"
import logo from "../assets/icons/Promatec.png"
import pic from "../assets/images/cctv.jpeg"
import pic1 from "../assets/images/cctv-2.jpeg"
import pic2 from "../assets/images/cctv-3.jpeg"
import pic3 from "../assets/images/cctv-4.jpeg"
import pic4 from "../assets/images/cctv-5.jpg"
import pic5 from "../assets/images/security.jpg"

//partner's logos
import cathexis from "../assets/icons/Cathexis-logo.svg"
import defendoor from "../assets/icons/defendoor-2.png"
import gotYou from "../assets/icons/GYTlogo1.png"
import impro from "../assets/icons/impro_logo.svg"
import isitaki from "../assets/icons/isitaki.png"
import jablotron from "../assets/icons/jablotron_logo.svg"
import turnstar from "../assets/icons/turnstar-logo-header.png"
import connect from "../assets/icons/cash-connect.png"
import boomgate from "../assets/icons/boomgateSystems.svg"

//import installed packages and libraries 
import React, { useEffect, useState } from "react";
import { Flex, Grid, GridItem, Box, Text, Tooltip, useDisclosure, FormControl, FormLabel, Input, Stack, ButtonGroup, Button, Textarea, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { useForm, ValidationError } from "@formspree/react"

const Launch = () => {
  const [picWidth, setWidth] = useState("45%");
  const { onOpen, onClose, isOpen } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const [state, handleSubmit] = useForm("moqgjogn")  

  {/*
  const {
    isOpen: isVisible,
    onClose :closeAlert,
    onOpen : openAlert,
  } = useDisclosure()

  const showAlert = () => {
    return (
      <>
        <Alert status='success'>
          <AlertIcon />
          <Box>
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Thanks for reserving your spot. We look forward to seeing you at the event.
            </AlertDescription>
          </Box>
          <CloseButton
            alignSelf='flex-start'
            position='relative'
            right={-1}
            top={-1}
            onClick={closeAlert}
          />
        </Alert>
      </>
    )
  }*/}
  useEffect(()=>{
    window.addEventListener('resize',()=>{
      if (window.outerWidth <=768){
        setWidth("0");
      }else{
        setWidth("45%");
      }
    })
  },[])

  useEffect(()=>{
    if (state.succeeded){
      //showAlert()
      onClose()
    }
  },[state])


  // Set the date we're counting down to
  const countDownDate = new Date("Feb 12, 2024 08:00:00");
  
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  
  const phoneIcon = <FontAwesomeIcon className="icon" icon={faPhone} beatFade size="x3"/>
  const emailIcon = <FontAwesomeIcon className="icon" icon={faEnvelope} beatFade/>

  useEffect(() => {
    const now = new Date().getTime();
    //const countDownDate = new Date('2022-01-01').getTime();

    const intervalId = setInterval(() => {
      const distance = countDownDate - now;
      if (distance < 0) {
        clearInterval(intervalId); // Clear interval when countdown finishes
      } else {
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [days, hours, minutes, seconds]); // Add dependencies to trigger re-render
  

  return (
    <>
      <Grid
        templateAreas={`"header pics"
                        "main pics"
                        "footer pics"`}
        gridTemplateRows={'80px 1fr 200px'}
        gridTemplateColumns={`1fr ${picWidth}`}
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
        className="page-layout"
      >
        <GridItem pl='2'  area={'header'} className="header">
          <Flex className="inner-header">
              
              <a  href="https://promatecgroup.com/home" className="logo" >
                <Tooltip label='Redirect to Promatec Solutions' hasArrow='true' color={'#23408f'} bg={'#f4a916'}  placement='bottom' defaultIsOpen openDelay={250}>
                  <img src={logo} alt="Promatec Solutions"/>
                </Tooltip>
              </a>

              <Flex className="slogan-container">
                  <Text className="slogan">A Secure World <span>Together</span></Text>
              </Flex>
            </Flex>
        </GridItem>

        <GridItem pl='2' area={'main'} className="main">

          <Flex className="main-content">
            {/*<Text className="main-heading">Join us for a week-long journey into the future of security technology.</Text>*/}
            <h1 className="main-heading">Promatec’s Grand Launch: A Revolutionary Leap in Security Technology</h1>
            <Text className="main-subheading">Don&apos;t miss the grand finale of Promatec&apos;s Launch. Witness the unveiling of the latest innovations in security technology, enjoy live entertainment, and network with experts and peers. <br/> This is the climax of a four-day exhibition where you can explore and test Promatec&apos;s cutting-edge products, watch live demos, and learn from industry leaders.</Text>
            <Text className="main-subheading blue">12<sup>th</sup>-15<sup>th</sup> February (Exhibition) |  8AM-5PM  |  32 Knightsbridge, Newlands, Harare. <br/> 16<sup>th</sup> February (Launch Day) |  8AM-8PM  | 32 Knightsbridge, Newlands, Harare. </Text>
            {/*<Text className="main-subheading">The Promatec Solutions Security Expo is a week-long event that will showcase the latest in security technology. The event will feature live demonstrations, industry leaders, and hands-on experience with state-of-the-art security technology.</Text>*/}
          </Flex>

          <Flex className="countdown">
            <Flex id="clock" className="time-count">
              <Flex className="time-entry days">
                <Text className="time">{days}</Text>
                <Text className="time-label">Days</Text>
              </Flex>

              <Flex className="time-entry hours">
                <Text className="time">{hours}</Text>
                <Text className="time-label">Hours</Text>
              </Flex>

              <Flex className="time-entry minutes">
                <Text className="time">{minutes}</Text>
                <Text className="time-label">Minutes</Text>
              </Flex>

              <Flex className="time-entry seconds">
                <Text className="time">{seconds}</Text>
                <Text className="time-label">Seconds</Text>
              </Flex>
            </Flex>
          </Flex>

          {/*}
          <Flex className="value-proposition">
            <Text className="proposition">Get hands-on experience with state-of-the-art security technology, live demonstrations, and gain insights from industry leaders</Text>
  </Flex>*/}

          <Flex className="register">
            <Text className="register-text">RSVP Now!</Text>
            <Flex className="rsvp">
              <Button><a href="tel:+263777956346">{phoneIcon}</a></Button>

              <Button onClick={onOpen}>{emailIcon}</Button>
              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Promatec Zimbabwe Launch RSVP</ModalHeader>
                  <ModalCloseButton />
                  <form onSubmit={handleSubmit} >

                    <ModalBody pb={6} > 
                      <Flex margin={"16px 0"}>
                        <FormControl mr={"4px"}>
                          <FormLabel htmlFor="Title">Title</FormLabel>
                          <Input name="Title"  type="text" placeholder='Title' />
                        </FormControl>
                        <ValidationError prefix="Title" field="Title" errors={state.errors} />


                        <FormControl ml={"4px"}>
                          <FormLabel htmlFor="Fullname">Full Name</FormLabel>
                          <Input name="Fullname" type="text" placeholder='John Doe' />
                        </FormControl>
                        <ValidationError prefix="Fullname" field="Fullname" errors={state.errors} />
                        
                      </Flex>

                      <Flex margin={"16px 0"}>
                        <FormControl mr={"4px"}>
                          <FormLabel htmlFor="Phone">Phone</FormLabel>
                          <Input name="Phone" type="text" placeholder='+2631233456789' />
                        </FormControl>
                        <ValidationError prefix="Phone" field="Phone" errors={state.errors} />

                        <FormControl ml={"4px"}>
                          <FormLabel htmlFor="Email">Email</FormLabel>
                          <Input name="Email"  type="email" placeholder='email@example.com' />
                        </FormControl>
                        <ValidationError prefix="Email" field="Email" errors={state.errors} />
                      </Flex>

                      <Flex margin={"16px 0"}>
                        <FormControl mr={"4px"}>
                          <FormLabel htmlFor="Company">Company</FormLabel>
                          <Input name="Company" type="text" placeholder='Company Name' />
                        </FormControl>
                        <ValidationError prefix="Company" field="Company" errors={state.errors} />

                        <FormControl ml={"4px"}>
                          <FormLabel htmlFor="Position">Position/Role</FormLabel>
                          <Input name="Position" type="text" placeholder='Position' />
                        </FormControl>
                        <ValidationError prefix="Position" field="Position" errors={state.errors} />
                      </Flex>

                      <Flex margin={"16px 0"}>
                        <FormControl>
                          <FormLabel htmlFor="Dietary Requirements">Special Dietary Requirements</FormLabel>
                          <Textarea name="Dietary Requirements" placeholder="Special Dietary Requirements" />  
                        </FormControl>
                        <ValidationError prefix="Dietary Requirements" field="Dietary Requirements" errors={state.errors} />
                      </Flex>
            
                      <Input type="hidden" name="_subject" value="Promatec Zimbabwe Launch RSVP" />
                      <Input type="hidden" name="_next" value="https://promatecgroup.com/" />
                    </ModalBody>

                    <ModalFooter>
                      <Button type="submit" colorScheme='blue' mr={3}>
                        Submit
                      </Button>
                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </form>
                </ModalContent>
              </Modal>
            </Flex>
          </Flex>

        </GridItem>
        

        <GridItem pl='2' area={'pics'} className="pics">
          <Flex className="company-pics">
            <img src={pic3} alt="CCTV Security"/>
          </Flex>
        </GridItem>

        <GridItem area={'footer'} className="footer">
          <section className="logo-slider">
            <Box className="slide-track">
                <Box className="logo-slide">
                    <img src={boomgate} alt="Boomgate Systems"/>
                </Box>
                <Box className="logo-slide">
                    <img src={connect} alt="Cash Connect"/>
                </Box>
                <Box className="logo-slide">
                    <img src={cathexis} alt="Cathexis logo"/>
                </Box>
                <Box className="logo-slide">
                    <img src={defendoor} alt="DefenDoor"/>
                </Box>
                <Box className="logo-slide">
                    <img src={gotYou} alt="Got You Telematics"/>
                </Box>
                <Box className="logo-slide">
                    <img src={impro} alt="Impro Technologies logo"/>
                </Box>
                <Box className="logo-slide">
                    <img src={isitaki} alt="Isitaki logo"/>
                </Box>
                <Box className="logo-slide">
                    <img src={jablotron} alt="Jablotron Logo"/>
                </Box>
            </Box>
          </section>
        </GridItem>
      </Grid>
    </>
  )
}

export default Launch