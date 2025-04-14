'use client';

import { Box, Card, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';

const Visibility = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('./visibiltybg.jpeg')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        px: { xs: 2, md: 6 },
        py: { xs: 4, md: 8 },
        gap: { xs: 4, md: 8 },
        // minHeight: '90vh',
        color: 'white',
        fontFamily: `'Inter', sans-serif`,
      }}
    >
      {/* Left Content */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 2,
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: '#aaa',
              letterSpacing: 1,
              fontFamily: `'Space Grotesk', sans-serif`,
              mb:2
            }}
          >
            Instant Insights
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Typography
            variant={isMobile ? 'h4' : 'h1'}
            sx={{
              background: 'linear-gradient(to right, #ffffff, #7A1FA1, #1A0033)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
              fontFamily: `'Space Grotesk', sans-serif`,
            }}
          >
            Visibility
          </Typography>
           <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: '#9BA5B7',
              fontFamily: `'Inter', sans-serif`,
              mb: 2,
            }}
          >
            of your entire fleet in real-time
          </Typography>
        </motion.div>

      

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Typography sx={{ color: '#9BA5B7', fontSize: '1rem', maxWidth: '50%' }}>
            <span style={{ color: 'white' }}>OpsZ’s </span>flexible design lets enterprises unify current automation tools
            within one platform, enhancing efficiency without disrupting operations.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              p: 2,
              mt: 2,
              color: '#9BA5B7',
              fontFamily: `'Inter', sans-serif`,
              boxShadow: '0px 0px 12px rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
            }}
          >
            <Typography>
              Gain instant insight into every agent, system, and service across your
              infrastructure. OpsZ provides a unified view of your entire operational
              fleet—on-prem, cloud, hybrid—so you can detect issues, track performance,
              and act with confidence in real time.
            </Typography>
          </Card>
        </motion.div>
      </Box>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
      >
        <Box
          component="img"
          src="./image.svg"
          alt="Product Preview"
          sx={{
            width: '100%',
            maxWidth: '500px',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </motion.div>
    </Box>
  );
};

export default Visibility;
