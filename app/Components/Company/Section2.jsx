'use client';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
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
  hidden: { opacity: 0, x: -50 }, 
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const fadeInFromRight = {
  hidden: { opacity: 0, x: 50 }, 
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const Section2 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <MotionBox
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: '#000',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/company-page/sec2.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.6,
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
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: { 
            xs: '56px 16px', 
            sm: '80px 32px', 
            md: '112px 64px' 
          },
          gap: { xs: '1rem', md: '4rem' },
          boxSizing: 'border-box',
        }}
      >
        {/* Left section */}
        <MotionBox
          variants={staggerContainer}
          sx={{
            width: { xs: '100%', md: '68%' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            boxSizing: 'border-box', 
            paddingRight: { xs: 0, md: '1rem' }, 
          }}
        >
          <MotionTypography 
            variant="h2"
            variants={fadeInFromLeft}
            sx={{
              color: '#FFF',
              fontFamily: 'Montserrat',
              fontSize: { xs: '22px', sm: '30px', md: '36px' },
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '84%',
              marginBottom: { xs: '1rem', md: '0.5rem' },
              width: '100%', 
            }}
          >
            Our Commitment to Transforming
          </MotionTypography>
          
          <MotionTypography 
            variant="h1"
            variants={fadeInFromLeft}
            sx={{
              background: 'linear-gradient(90deg, #FFF 0%, #9747FF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'Montserrat',
              fontSize: { xs: '40px', sm: '60px', md: '80px', lg: '100px' },
              fontStyle: 'normal',
              fontWeight: 700,
              width: '100%',
            }}
          >
            IT Operations
          </MotionTypography>
        </MotionBox>
        
        {/* Right section */}
        <MotionBox
          variants={staggerContainer}
          sx={{
            width: { xs: '100%', md: '32%' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', 
            gap: '2rem',
            boxSizing: 'border-box', 
            paddingLeft: { xs: 0, md: '1rem' }, 
          }}
        >
          <MotionTypography 
            variant="body1"
            variants={fadeInFromRight}
            sx={{
              color: '#FFF',
              fontFamily: 'Montserrat',
              fontSize: { xs: '16px', sm: '17px', md: '18px' },
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '150%',
              width: '100%', 
            }}
          >
            At OpsZ, we are dedicated to redefining IT operations management. Our mission is to provide solutions that not only meet today's demands but also anticipate the future needs of businesses.
          </MotionTypography>
          
          <MotionButton
            component={Link}
            href="#learn-more-about-us"
            variants={fadeInFromRight}
            sx={{
              display: 'flex',
              padding: '12px 24px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid #FFF',
              color: '#FFF',
              fontFamily: 'Montserrat',
              fontWeight: 600,
              textTransform: 'none',
              width: 'fit-content',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            Learn More
          </MotionButton>
        </MotionBox>
      </MotionBox>
    </MotionBox>
  );
};

export default Section2;