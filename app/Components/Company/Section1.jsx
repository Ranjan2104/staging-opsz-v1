'use client';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

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

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const Section1 = () => {
  return (
    <MotionBox
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      sx={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#000',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: { xs: '0%', sm: '15%', md: '20%' }, 
          width: { xs: '100%', sm: '85%', md: '80%' },
          height: '100%',
          zIndex: 0,
          backgroundImage: 'url(/company-page/sec1.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: { xs: 'center', md: 'left center' },
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
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
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: { 
            xs: '56px 16px', 
            sm: '80px 32px', 
            md: '112px 64px' 
          },
          gap: { 
            xs: '40px', 
            sm: '60px', 
            md: '80px' 
          },
        }}
      >
        <MotionBox
          variants={staggerContainer}
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: '2rem', md: 0 },
          }}
        >
          <MotionBox
            variants={staggerContainer}
            sx={{
              width: { xs: '100%', md: '70%' },
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: '1rem', md: '1rem' },
            }}
          >
            <MotionTypography 
              variant="subtitle1"
              variants={fadeInFromLeft}
              sx={{
                color: '#FFF',
                fontFamily: 'Montserrat',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '150%',
              }}
            >
              Innovative
            </MotionTypography>
            
            <MotionTypography 
              variant="h2"
              variants={fadeInFromLeft}
              sx={{
                color: '#EEE',
                fontFamily: 'Montserrat',
                fontSize: { xs: '40px', md: '64px' },
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '83%',
                margin: 0,
              }}
            >
              Our Vision for the
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
                fontSize: { xs: '50px', sm: '70px', md: '100px' },
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '83%',
                margin: 0,
              }}
            >
              Future of IT
            </MotionTypography>
            
            <MotionTypography 
              variant="body1"
              variants={fadeInFromLeft}
              sx={{
                color: '#FFF',
                fontFamily: 'Montserrat',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '150%',
                maxWidth: "60%",
                mt: { xs: 2, md: 3 },
                mb: { xs: 2, md: 3 },
              }}
            >
              We are transforming IT operations with cutting-edge solutions that drive efficiency and collaboration.
            </MotionTypography>
            
            <MotionButton
              component={Link}
              href="#learn-more"
              variants={fadeInFromLeft}
              sx={{
                display: 'flex',
                padding: '12px 24px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                border: '1px solid #FFF',
                background: '#FFF',
                color: '#000',
                fontFamily: 'Montserrat',
                fontWeight: 600,
                textTransform: 'none',
                width: 'fit-content',
                borderRadius: '4px',
                '&:hover': {
                  background: 'transparent',
                  color: '#FFF',
                }
              }}
            >
              Learn More
            </MotionButton>
          </MotionBox>
          
          <Box sx={{ 
            width: { xs: '100%', md: '50%' },
            display: { xs: 'none', md: 'block' } 
          }} />
        </MotionBox>
      </MotionBox>
    </MotionBox>
  );
};

export default Section1;