import {
    Body,
    Link,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  

  
  
  export const Welcome = () => {
  
    return (
      <Html>
        <Head />
        <Preview>A Message from PortraitWizard Founder</Preview>
        <Body style={main}>
          <Container>
            <Section style={logo}>
              <Img   width="42"
                  height="42" src={`https://www.portraitwizard.com/favicon.png`} />
            </Section>
  
            <Section style={content}>
             
  
              <Row style={{ ...boxInfos, paddingBottom: "0" }}>
                <Column>
                 
                  <Heading
                    as="h2"
                    style={{
                      fontSize: 26,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                   Welcome To PortraitWizard Tribe!
                 
                  </Heading>
  
                  <Row>
                  <Img
                  
                  style={{...image,margin:"auto"}}
                  width={200}
                  height={200}
                  src={`https://res.cloudinary.com/dxmv2fgjt/image/upload/v1707644561/rajat3_efal5d.jpg`}
                />
              
                  <Text style={{ ...paragraph,   fontSize: 18, lineHeight:1.5, letterSpacing:"1px",
                      marginTop: 20 }}>
                  <b>Have you ever wondered about the heartbeat behind PortraitWizard? Let me share the heartfelt truth to you. </b>
                  </Text>
              </Row>
                
               
                  <Text style={{...paragraph}}>
                  After dedicating four years to tackling the climate emergency, it became clear that real change required more than just words. PortraitWizard is my entrepreneurial journey, and every creation you receive is a step towards healing our planet.
                  </Text>
                  <Text style={{...paragraph}}>
                  Every portrait is a promise. Crafted from <b>recycled materials and infused with water-based inks</b>, each piece contributes to a <b>greener, cleaner future with zero plastic waste</b>.
                  </Text>
                  <Text style={{...paragraph}}>
                  For every transaction you make, <b>trees are planted on your behalf</b>, and you will receive updates on your planted trees in a seperate email.
                  </Text>
                  <Text style={{...paragraph}}>
                  Your role? More than a user, you&apos;re a hero in this narrative. Together, we&apos;re not just creating art, we&apos;re saving our home. Every ounce of savings from PortraitWizard is devoted to the fight against the climate emergency. 
                  </Text>
                  <Text style={{ ...paragraph,marginTop: -5 }}>
                  <b>Join me in this mission.</b> Your support isn&apos;t just appreciated; it&apos;s a vital brushstroke in the canvas of change.
                  </Text>
                  <Text style={{ ...paragraph, marginTop: 20 }}>
                  <b>With Gratitude,</b>
                  </Text>    
                  <Text style={{ ...paragraph, marginTop: 0 }}>
                  Rajat Ratewal
                  </Text>
               
                </Column>
              </Row>
              
            </Section>
  
            <Section style={containerImageFooter}>
            <Link
                  href="https://www.portraitwizard.com"
                >
                <Img
                  src={`https://res.cloudinary.com/dxmv2fgjt/image/upload/v1707812245/updatedphotomemory_voy5s7.jpg`}
                  width="800"
                  height="400"
                  alt="Cover Image"
                />
                </Link>
            </Section>

            <Text style={footerCopyright}>
            Copyright © 2024 Portrait Wizard<br />{" "}
            <Link href="https://www.portraitwizard.com/terms">All rights reserved</Link>
           
          </Text>
          <Section style={socialIcons}>
            <Link href={'https://www.tiktok.com/@portraitwizard'} style={{ ...socialIcon, ...linkStyle }}>
              <img src={'https://res.cloudinary.com/dxmv2fgjt/image/upload/v1708638335/hex0smc2dhw3kusjvt0w.png'} alt="TikTok" style={{ width: 40, height: 40 }} />
            </Link>
            <Link href={'https://www.youtube.com/@rajatratewalportraitwizard'} style={{ ...socialIcon, ...linkStyle }}>
              <img src={'https://res.cloudinary.com/dxmv2fgjt/image/upload/v1708638335/oinyagg7rushuivur2jk.png'} alt="YouTube" style={{ width: 40, height: 40 }} />
            </Link>
            <Link href={'https://www.instagram.com/pwizardai/'} style={{ ...socialIcon, ...linkStyle }}>
              <img src={'https://res.cloudinary.com/dxmv2fgjt/image/upload/v1708638335/oehepxgowe7qnklediqv.png'} alt="Instagram" style={{ width: 40, height: 40 }} />
            </Link>
            <Link href={'https://chat.whatsapp.com/FYIDbS45XGxHK5HJRWcNt0'} style={{ ...socialIcon, ...linkStyle }}>
              <img src={'https://res.cloudinary.com/dxmv2fgjt/image/upload/v1711056583/mkulxi3agwga21pxdqnu.png'} alt="Whatsapp" style={{ width: 40, height: 40 }} />
            </Link>
            
          </Section>
         
          </Container>
       
        </Body>
      </Html>
    );
  };
  
  
  export default Welcome;
  
  const main = {
    backgroundColor: "#fff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const paragraph = {
    fontSize: 16,
  };
  
  const logo = {
    padding: "30px 20px",
  };
  

  const content = {
    border: "1px solid rgb(0,0,0, 0.1)",
    borderRadius: "3px",
    overflow: "hidden",
  };
  
  const image = {
    maxWidth: "100%",
  };
  
  const boxInfos = {
    padding: "20px",
  };
  
  const containerImageFooter = {
    padding: "45px 0 0 0",
  };
  
  const footerCopyright = {
    margin: "25px 0 0 0",
    textAlign: "center" as const,
    fontSize: "12px",
    color: "rgb(102,102,102)",
  };

  const socialIcons = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  };

  const socialIcon = {
    margin: "0 10px", // Adjust the margin for spacing
  };

  const linkStyle = {
    color: "#000", // Change this to your desired color
    textDecoration: "none",
  };