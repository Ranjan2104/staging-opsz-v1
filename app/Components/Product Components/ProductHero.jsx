import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const fadeInFromRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const ProductHero = () => {
  const [heroRef, heroInView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [secondSectionRef, secondSectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <Container maxWidth={false} disableGutters>
      <MotionBox
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={staggerContainer}
        sx={{
          position: 'relative',
          minHeight: '100vh',
          overflow: 'hidden',
          paddingTop: { xs: '2rem', sm: '2rem', md: '5rem' },
        }}
      >
        <Box
          component="img"
          src="/product-page/productHeroBack.jpeg"
          alt="Product Hero Background"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0,
          }}
        />
        
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: {
              xs: 'linear-gradient(180deg, rgba(26, 0, 51, 0.3) 0%, rgba(26, 0, 51, 0.85) 100%)',
              sm: 'linear-gradient(180deg, rgba(26, 0, 51, 0.3) 0%, rgba(26, 0, 51, 0.85) 100%)',
              md: 'linear-gradient(90deg, rgba(26, 0, 51, 0.3) 0%, rgba(26, 0, 51, 0.6) 50%, rgba(26, 0, 51, 0.85) 100%)',
            },
            zIndex: 1,
          }}
        />
        
        <MotionBox
          variants={fadeIn}
          sx={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingTop: { xs: '1rem', sm: '1rem', md: '2rem' },
            px: { xs: 2, md: 4 },
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: { xs: '95%', sm: '95%', md: '1400px' },
              margin: '0 auto',
              display: 'flex',
              flexDirection: { xs: 'column-reverse', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'center', md: 'center' },
              px: { xs: '0', sm: '0.5rem', md: '1rem' },
              py: { xs: '1rem', sm: '1.5rem', md: '2rem' },
              gap: '2rem',
            }}
          >
            <MotionBox
              variants={fadeInFromLeft}
              sx={{
                width: { xs: '100%', md: 'calc(55% - 1rem)' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: { xs: '2rem', md: 0 },
                mt: { xs: 0, md: 0 },
                pl: { xs: '0', md: '0' },
              }}
            >
              <MotionBox
                variants={scaleIn}
                sx={{
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  borderRadius: '8px',
                  width: '100%',
                  maxWidth: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                  padding: { xs: '8px', sm: '10px', md: '12px' },
                  boxShadow: '0 10px 30px rgba(151, 71, 255, 0.15)',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                  marginRight: { xs: '1rem'}
                }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: '0 15px 40px rgba(151, 71, 255, 0.25)',
                  transition: { duration: 0.3 }
                }}
              >
                <Box
                  component="video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="/product-page/DemoVideo.mp4"
                  alt="Demo Video"
                  sx={{
                    maxWidth: '100%',
                    maxHeight: { xs: '260px', sm: '350px', md: '480px', lg: '600px' },
                    objectFit: 'contain',
                    width: '100%',
                  }}
                />
              </MotionBox>
            </MotionBox>
            
            <MotionBox
              variants={staggerContainer}
              sx={{
                width: { xs: '100%', md: 'calc(45% - 1rem)' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: { xs: 'center', md: 'flex-start' },
                textAlign: { xs: 'center', md: 'left' },
                height: { xs: 'auto', md: '100%' },
                p: 0,
              }}
            >
              <MotionTypography 
                variant="h1"
                variants={fadeInFromRight}
                sx={{
                  alignSelf: 'stretch',
                  color: '#EEE',
                  fontFamily: 'Montserrat',
                  fontSize: { xs: '30px', sm: '36px', md: '46px', lg: '58px' },
                  fontWeight: 700,
                  lineHeight: 1.1,
                  textTransform: 'capitalize',
                  overflowWrap: 'break-word',
                  wordWrap: 'break-word',
                  hyphens: 'auto',
                  maxWidth: { xs: '100%', md: '90%' },
                  paddingRight: { xs: 0, sm: 0, md: '1rem' },
                }}
              >
                Force
              </MotionTypography>
              
              <MotionTypography 
                variant="h1"
                variants={fadeInFromRight}
                sx={{
                  alignSelf: 'stretch',
                  background: 'linear-gradient(90deg, #FFF 0%, #9747FF 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'Montserrat',
                  fontSize: { xs: '38px', sm: '48px', md: '58px', lg: '80px' },
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: { xs: '-0.5px', md: 'normal' },
                  marginBottom: { xs: '0.5rem', md: '0.5rem' },
                  paddingRight: { xs: 0, sm: 0, md: '1rem' },
                  textTransform: 'capitalize',
                  overflowWrap: 'break-word',
                  wordWrap: 'break-word',
                  whiteSpace: { xs: 'normal', md: 'normal' },
                  maxWidth: '100%',
                  display: 'inline-block',
                }}
              >
                Multiplied
              </MotionTypography>
              
              <MotionTypography 
                variant="h2"
                variants={fadeInFromRight}
                sx={{
                  alignSelf: 'stretch',
                  color: '#9BA5B7',
                  fontFamily: 'Montserrat',
                  fontSize: { xs: '16px', sm: '20px', md: '24px', lg: '32px' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  marginBottom: '0.7rem',
                  display: 'block',
                  overflowWrap: 'break-word',
                  maxWidth: '100%',
                  paddingRight: { xs: 0, sm: 0, md: '1rem' },
                }}
              >
                With Real-Time Intelligence
              </MotionTypography>
              
              <MotionBox
                variants={fadeIn}
                sx={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: { xs: '10px', sm: '15px' },
                  marginTop: { xs: '0.5rem', md: '1rem' },
                  maxWidth: { xs: 'calc(100% - 40px)', sm: 'calc(100% - 40px)', md: 'calc(100% - 60px)' }, // Adjust width to leave space on right
                  width: 'auto',
                  borderRadius: '4px',
                  backdropFilter: 'blur(4px)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                  marginRight: '1rem',
                }}
                whileHover={{ 
                  boxShadow: '0 8px 25px rgba(151, 71, 255, 0.15)', 
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  transition: { duration: 0.3 }
                }}
              >
                <Typography 
                  variant="body1" 
                  sx={{
                    color: '#D0D0D0',
                    fontFamily: 'Montserrat',
                    fontSize: { xs: '13px', sm: '15px', md: '16px', lg: '18px' },
                    lineHeight: 1.5,
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  Discover how our platform redefines IT operations through advanced real-time insights and seamless integration. Experience unparalleled efficiency and adaptability in managing your infrastructure.
                </Typography>
              </MotionBox>
            </MotionBox>
          </Box>
        </MotionBox>
        
        <MotionBox
          ref={secondSectionRef}
          initial="hidden"
          animate={secondSectionInView ? "visible" : "hidden"}
          variants={staggerContainer}
          sx={{
            position: 'relative',
            width: '100%',
            minHeight: { xs: 'auto', md: '80vh' },
            zIndex: 2,
            mt: { xs: '0', md: '3rem' },
            px: { xs: 1, md: 2 },
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(11, 11, 11, 0.62)',
              zIndex: 1,
            }}
          />
          
          <MotionBox
            variants={fadeIn}
            sx={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              padding: { xs: '1.5rem 0', sm: '2rem 0', md: '3rem 0' },
            }}
          >
            <Box
              sx={{
                width: '100%',
                maxWidth: { xs: '98%', sm: '98%', md: '1400px' },
                margin: '0 auto',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { xs: 'center', md: 'center' },
                justifyContent: 'space-between',
                gap: { xs: '2rem', md: '2.5rem' },
              }}
            >
              <MotionBox
                variants={staggerContainer}
                sx={{
                  width: { xs: '100%', md: 'calc(50% - 1.5rem)' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: { xs: 'flex-start', md: 'flex-start' },
                  textAlign: { xs: 'left', md: 'left' },
                  px: { xs: '0.25rem', md: '0.5rem' },
                }}
              >
                <MotionTypography 
                  variant="subtitle1"
                  variants={fadeIn}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontFamily: 'Montserrat',
                    fontSize: '16px',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                    textAlign: { xs: 'center', md: 'left' },
                    width: '100%',
                  }}
                >
                  True Platform Agnosticity
                </MotionTypography>
                
                <MotionTypography 
                  variant="h2"
                  variants={fadeInFromLeft}
                  sx={{
                    alignSelf: 'stretch',
                    background: 'linear-gradient(90deg, #FFF 0%, #9747FF 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontFamily: 'Montserrat',
                    fontSize: { xs: '28px', sm: '36px', md: '46px', lg: '58px' },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    marginBottom: '0.3rem',
                    overflowWrap: 'break-word',
                    wordWrap: 'break-word',
                    hyphens: 'auto',
                    textAlign: { xs: 'center', md: 'left' },
                    width: '100%',
                    maxWidth: '100%',
                  }}
                >
                  Seamless Orchestration
                </MotionTypography>
                
                <MotionTypography 
                  variant="h3"
                  variants={fadeInFromLeft}
                  sx={{
                    color: '#9BA5B7',
                    fontFamily: 'Montserrat',
                    fontSize: { xs: '18px', sm: '22px', md: '28px', lg: '32px' },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    marginBottom: '1.5rem',
                    overflowWrap: 'break-word',
                    textAlign: { xs: 'center', md: 'left' },
                    width: '100%',
                  }}
                >
                  Across Any Environment
                </MotionTypography>
                
                <MotionTypography 
                  variant="body1"
                  variants={fadeIn}
                  sx={{
                    color: '#D0D0D0',
                    fontFamily: 'Montserrat',
                    fontSize: { xs: '14px', sm: '15px', md: '16px', lg: '18px' },
                    lineHeight: 1.5,
                    marginBottom: '1.5rem',
                    maxWidth: '100%',
                    textAlign: { xs: 'left', md: 'left' },
                    pr: { xs: 0, md: '0.5rem' },
                  }}
                >
                  <Box component="span" sx={{ fontWeight: 'bold' }}>OpsZ</Box> is the system of intelligent agents that transforms your fragmented IT ecosystem into a synchronized, self-orchestrating operation—no matter how complex or distributed.
                </MotionTypography>
                
                <MotionBox 
                  variants={fadeIn}
                  sx={{ 
                    width: '100%',
                    maxWidth: '100%',
                    pr: { xs: 0, md: '0.25rem' },
                  }}
                >
                  <Typography 
                    variant="h6" 
                    sx={{
                      color: '#FFF',
                      fontFamily: 'Montserrat',
                      fontSize: { xs: '15px', sm: '17px', md: '18px' },
                      fontWeight: 600,
                      marginBottom: '0.75rem',
                    }}
                  >
                    Plug into your existing:
                  </Typography>
                  
                  <Box
                    component="ul"
                    sx={{
                      listStyleType: 'disc',
                      pl: { xs: 1.5, md: 2.5 },
                      color: '#EAEAEA',
                      fontFamily: 'Montserrat',
                      fontSize: { xs: '13px', sm: '14px', md: '16px' },
                      fontWeight: 500,
                      '& li': {
                        marginBottom: { xs: '0.75rem', md: '0.5rem' },
                        paddingLeft: '0',
                        paddingRight: { xs: '0.25rem', md: 0 },
                      },
                      '& li::marker': {
                        color: '#A865FF',
                        fontSize: { xs: '1.3em', md: '1.2em' },
                        fontWeight: 'bold',
                      },
                    }}
                  >
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={secondSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      Automation tools (e.g., Terraform, Ansible)
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={secondSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      Monitoring systems (e.g., Datadog, Prometheus)
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={secondSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 1.0, duration: 0.5 }}
                    >
                      Sources of truth (e.g., CMDBs, Inventory APIs, IAM platform)
                    </motion.li>
                  </Box>
                </MotionBox>
              </MotionBox>
              
              <MotionBox
                variants={fadeInFromRight}
                sx={{
                  width: { xs: '100%', md: 'calc(50% - 1.5rem)' },
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  px: { xs: '0', md: '0.25rem' },
                }}
                whileHover={{ 
                  scale: 1.03, 
                  transition: { duration: 0.4 }
                }}
              >
                <Box
                  component="img"
                  src="/product-page/Placeholder Image.svg"
                  alt="Seamless Orchestration"
                  sx={{
                    maxWidth: '100%',
                    maxHeight: { xs: '260px', sm: '300px', md: '400px', lg: '500px' },
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))',
                  }}
                />
              </MotionBox>
            </Box>
          </MotionBox>
        </MotionBox>
      </MotionBox>
    </Container>
  );
};

export default ProductHero;