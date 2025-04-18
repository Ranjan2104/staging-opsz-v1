"use client";
import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Paper, useTheme, useMediaQuery } from '@mui/material';
import DemoRequestForm from './DemoRequestForm';

export default function ScheduleDemo() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const BackgroundParallax = React.useMemo(() => (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        opacity: 0.7,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: `translateY(${scrollY * 0.1}px)`,
        pointerEvents: 'none',
      }}
    >
      <Box
        component="img"
        src="/unified/Mask group.svg"
        alt="Background Graphic"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.6,
        }}
      />
    </Box>
  ), [scrollY]);

  const DemoFormComponent = React.useMemo(() => <DemoRequestForm />, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#060316',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          backgroundImage: 'linear-gradient(180deg, rgba(25, 10, 40, 0.85) 0%, rgba(6, 3, 22, 0.95) 100%)',
        }}
      />
      
      {BackgroundParallax}

      <Container 
        maxWidth="xl"
        sx={{ 
          position: 'relative',
          zIndex: 2,
          pt: { xs: 12, sm: 14, md: 15 },
          pb: { xs: 10, sm: 12, md: 14 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box 
          sx={{ 
            position: 'relative',
            mb: { xs: 8, md: 10 },
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              fontWeight: 700,
              mb: 3,
              color: '#FFFFFF',
              lineHeight: 1.2,
              zIndex: 1,
              position: 'relative',
              backgroundImage: 'linear-gradient(90deg, #FFFFFF 0%, #9747FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Schedule Your Personalized Demo
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              fontWeight: 500,
              color: 'grey',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.6,
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Experience firsthand how OpsZ can transform your organization's operational efficiency and security posture with a personalized demonstration tailored to your specific needs.
          </Typography>
        </Box>

        <Paper
          elevation={24}
          sx={{
            backgroundColor: 'rgba(15, 10, 40, 0.85)',
            borderRadius: '24px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)',
            width: '100%',
            maxWidth: '1000px',
            mx: 'auto',
            position: 'relative',
            zIndex: 3,
          }}
        >
          {DemoFormComponent}
        </Paper>
      </Container>
    </Box>
  );
}