'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, useMediaQuery, List, ListItem } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ProductVerticalCarousel = () => {
  // Carousel data from the provided content
  const carouselData = [
    {
      title: "Unified Intelligence Dashboard",
      tagline: "Turn Chaos into Clarity",
      description: "This is your OpsZ mission control. From AI-driven insights and automation ROI to incident reduction and asset growth, this dashboard brings everything into one view. Know exactly how OpsZ is saving time, reducing toil, and scaling your operations — all at a glance.",
      image: "/product-vertical-carousal/Unified Intelligence Dashboard.png"
    },
    {
      title: "AI Log Analysis",
      tagline: "Actionable Intelligence from Every Log Line",
      description: "OpsZ performs real-time log analysis directly at the edge — where the data lives. By detecting anomalies and surfacing critical patterns as they happen, OpsZ helps teams cut through the noise instantly. Get high-signal insights with recommended actions, without waiting for centralized aggregation or delayed processing.",
      image: "/product-vertical-carousal/AI Log Analysis.png"
    },
    {
      title: "Causality Timeline",
      tagline: "See the Story, Not Just the Symptoms",
      description: "The OpsZ Event Timeline reconstructs incidents as a sequence of related events — across services, networks, and databases. By connecting the dots in time, it helps teams understand root cause faster and act with confidence, not guesswork.",
      image: "/product-vertical-carousal/Causality Timeline.png"
    },
    {
      title: "Operational Audit Trail",
      tagline: "Everything That Happened, When It Happened, and Why It Matters",
      description: "OpsZ captures every operational event across your environment — from deployments to patches and resource shifts. Filter by type, severity, user, or time range to audit changes, validate compliance, or pinpoint what led to a failure or slowdown.",
      image: "/product-vertical-carousal/Operational Audit Trail.png"
    },
    {
      title: "Intelligent Activity Heatmap",
      tagline: "Understand When Your Infrastructure Is Actually Working",
      description: "OpsZ captures operational activity over time, giving you a heatmap view of your infrastructure's heartbeat. See when updates, config changes, or migrations occur — and spot unusual spikes or silent periods that may point to opportunity or risk.",
      image: "/product-vertical-carousal/Intelligent Activity Heatmap.png"
    },
    {
      title: "ROI That's Ready When You Are",
      tagline: "Every Workflow. Every Dollar. Every Win — Accounted For.",
      description: "OpsZ puts ROI on display. Track cost savings, success rates, labor hours saved, and failure reductions — all tied to your automation efforts. With built-in filters and exportable reports, your Ops team becomes a data-backed engine of efficiency. Show the board exactly how your workflows are delivering real, measurable value.",
      image: "/product-vertical-carousal/ROI That's Ready When You Are.png"
    },
    {
      title: "Templates Built for Real Ops",
      tagline: "Launch Faster. Customize Easily. Automate Anything.",
      description: "The Workflow Template Gallery gives your team a head start on solving real-world IT challenges — from hybrid handoffs to full-stack troubleshooting. Each template is built with best practices, mapped to your infrastructure, and ready to run or adapt. Just launch, tweak, and automate — no boilerplate, no guesswork.",
      image: "/product-vertical-carousal/Templates Built for Real Ops.png"
    },
    {
      title: "The OpsZ Workflow Engine",
      tagline: "Build Once. Run Everywhere.",
      description: "This is OpsZ's command center for automation — where any task, across any infrastructure, can be modeled, orchestrated, and executed with ease. Whether you're triggering an incident, scaling a service, or diagnosing a system failure, workflows run securely across hybrid and multi-cloud estates, in parallel, at scale. Drag. Drop. Deploy. It's automation made for real-world ops.",
      image: "/product-vertical-carousal/The OpsZ Workflow Engine.png"
    }
  ];

  // State management
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const autoPlayTimeoutRef = useRef(null);
  const navigationRef = useRef(null);
  
  // Responsive helpers
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(max-width: 900px)");
  
  // Intersection observer for animation triggering
  const [ref, inView] = useInView({ 
    triggerOnce: false, 
    threshold: 0.1 
  });
  
  // Animation interval
  const intervalTime = 7000; // 7 seconds per slide

  // Progress bar animation effect
  useEffect(() => {
    let startTime;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const newProgress = Math.min(elapsed / intervalTime, 1);
      
      setProgress(newProgress);
      
      if (newProgress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    if (isAutoPlaying && inView) {
      animationFrameId = requestAnimationFrame(animate);
      
      autoPlayTimeoutRef.current = setTimeout(() => {
        // Before changing index, prevent automatic scrolling to avoid screen shifting
        const prevShift = window.scrollX;
        
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
        setProgress(0);
        
        // Fix any scroll position change that might have occurred
        setTimeout(() => {
          if (window.scrollX !== prevShift) {
            window.scrollTo(prevShift, window.scrollY);
          }
        }, 10);
      }, intervalTime);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current);
      }
    };
  }, [currentIndex, isAutoPlaying, carouselData.length, inView]);

  // Handle item selection
  const handleSelect = (index) => {
    // Store current scroll position
    const prevShift = window.scrollX;
    
    // Stop auto-playing when user manually selects an item
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setProgress(0);

    // Scroll selected item into view on mobile/tablet with improved positioning that doesn't shift the screen
    if (navigationRef.current && (isMobile || isTablet)) {
      const navItems = navigationRef.current.querySelectorAll('li');
      if (navItems && navItems[index]) {
        // Use a gentler scroll approach that won't cause page shift
        setTimeout(() => {
          const container = navigationRef.current;
          const item = navItems[index];
          const containerRect = container.getBoundingClientRect();
          const itemRect = item.getBoundingClientRect();
          
          // Calculate scroll position to center the item without shifting the whole page
          const scrollLeft = item.offsetLeft - (containerRect.width / 2) + (itemRect.width / 2);
          
          // Smooth scroll within the container only
          container.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
          });
          
          // Fix any page shift that might have occurred
          if (window.scrollX !== prevShift) {
            window.scrollTo(prevShift, window.scrollY);
          }
        }, 50);
      }
    }
  };

  // Revised effect to ensure selected item is visible without screen shifting
  useEffect(() => {
    // Store current scroll position
    const prevShift = window.scrollX;
    
    if (navigationRef.current && (isMobile || isTablet)) {
      const navItems = navigationRef.current.querySelectorAll('li');
      if (navItems && navItems[currentIndex]) {
        // Use the same gentler scroll approach
        setTimeout(() => {
          const container = navigationRef.current;
          const item = navItems[currentIndex];
          const containerRect = container.getBoundingClientRect();
          const itemRect = item.getBoundingClientRect();
          
          // Calculate scroll position to center the item
          const scrollLeft = item.offsetLeft - (containerRect.width / 2) + (itemRect.width / 2);
          
          // Smooth scroll within the container only
          container.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
          });
          
          // Fix any page shift
          if (window.scrollX !== prevShift) {
            window.scrollTo(prevShift, window.scrollY);
          }
        }, 100);
      }
    }
  }, [currentIndex, isMobile, isTablet]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const slideFromBottom = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Add a smooth crossfade variant
  const smoothCrossfade = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.7, ease: "easeInOut" }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" } 
    }
  };

  // Add state for content height management
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);
  
  // Update content height when the content changes or on window resize
  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    // Update on index change with a slight delay to ensure content is rendered
    const timer = setTimeout(updateHeight, 50);

    // Also listen for window resize events
    window.addEventListener('resize', updateHeight);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateHeight);
    };
  }, [currentIndex]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        background: 'linear-gradient(to right, #2D0052, #7A1FA2, #1A0033)',
      }}
      ref={ref}
    >
      {/* Background elements */}
      <Box
        component={motion.div}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.15,
          backgroundImage: 'linear-gradient(135deg, rgba(45, 0, 82, 0.8) 0%, rgba(55, 12, 73, 0.8) 50%, rgba(26, 0, 51, 0.8) 100%)',
          backgroundSize: '200% 200%',
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.1,
          backgroundImage: 'url("/productHeroBack.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />

      {/* Main container */}
      <Container 
        maxWidth={false}
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1400px",
          margin: "0 auto",
          padding: { 
            xs: "3rem 1.5rem", 
            sm: "3.5rem 2rem", 
            md: "4rem 1rem" 
          },
          overflowX: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 4 },
            width: "100%",
            maxWidth: "100%",
            position: "relative", // Added to contain absolutely positioned elements
          }}
        >
          {/* Navigation Section */}
          <Box
            sx={{
              width: { xs: "100%", md: "25%" },
              order: { xs: 1, md: 1 },
              mb: { xs: 2, md: 0 },
              maxWidth: "100%",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "Montserrat",
                  fontSize: { xs: "20px", md: "22px" },
                  fontWeight: 700,
                  mb: 2,
                  background: "linear-gradient(90deg, #FFF 30%, #9747FF 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Innovation Suite
              </Typography>
            </motion.div>
            
            {/* Navigation List Container - Remove gradient fade edges */}
            <Box 
              sx={{ 
                position: 'relative',
                // Removing the gradient purple shades completely
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  right: { xs: 0, md: 'unset' },
                  top: { xs: '50%', md: 0 },
                  transform: { xs: 'translateY(-50%)', md: 'none' },
                  width: { xs: '0', md: 0 }, // Set width to 0 to hide it
                  height: { xs: '100%', md: 0 },
                  zIndex: 2,
                  pointerEvents: 'none'
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: { xs: 0, md: 'unset' },
                  top: { xs: '50%', md: 0 },
                  transform: { xs: 'translateY(-50%)', md: 'none' },
                  width: { xs: '0', md: 0 }, // Set width to 0 to hide it
                  height: { xs: '100%', md: 0 },
                  zIndex: 2,
                  pointerEvents: 'none'
                }
              }}
            >
              {/* Mobile Scroll Indicator */}
              <Box
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  mb: 1
                }}
              >
                <Box 
                  component={motion.div}
                  animate={{ 
                    x: [0, 10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '12px'
                  }}
                >
                  <Typography 
                    component="span" 
                    sx={{ 
                      mr: 1, 
                      fontSize: '12px',
                      fontWeight: 400,
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}
                  >
                    Swipe to see more features
                  </Typography>
                  <Box 
                    component="span"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center'
                    }}
                  >
                    ⟶
                  </Box>
                </Box>
              </Box>

              <List
                ref={navigationRef}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'row', md: 'column' },
                  overflowX: { xs: 'auto', md: 'visible' },
                  overflowY: { xs: 'hidden', md: 'auto' },
                  maxHeight: { xs: 'auto', md: '60vh' },
                  pb: { xs: 1.5, md: 0 },
                  pt: { xs: 0.5, md: 0 },
                  px: { xs: 1, md: 0 },
                  mx: { xs: -1, md: 0 },
                  gap: { xs: 2, md: 0 },
                  msOverflowStyle: 'none',
                  scrollbarWidth: 'none',
                  '&::-webkit-scrollbar': { 
                    display: 'none',
                  },
                  // Improved scroll snapping on mobile
                  scrollSnapType: { xs: 'x proximity', md: 'none' },
                  scrollPadding: { xs: '0 24px', md: 0 },
                  scrollBehavior: 'smooth',
                  width: { xs: "100%", md: "auto" },
                  maxWidth: "100%",
                  position: { xs: "static", md: "relative" },
                }}
              >
                {carouselData.map((item, index) => {
                  // Ensure that button highlight only happens when its content is actually showing
                  const isSelected = index === currentIndex;
                  
                  return (
                    <ListItem
                      key={index}
                      component={motion.li}
                      onClick={() => handleSelect(index)}
                      whileHover={{ 
                        scale: 1.02,
                        backgroundColor: 'rgba(151, 71, 255, 0.25)',
                      }}
                      whileTap={{ scale: 0.98 }}
                      sx={{
                        cursor: 'pointer',
                        padding: { xs: '10px 16px', md: '12px 16px' },
                        borderLeft: { 
                          xs: 'none', 
                          md: `3px solid ${isSelected ? '#9747FF' : 'transparent'}` 
                        },
                        // Only highlight background when this is the active item
                        backgroundColor: isSelected ? 'rgba(151, 71, 255, 0.25)' : 'transparent',
                        transition: 'all 0.3s ease',
                        borderRadius: { xs: '8px', md: '0 8px 8px 0' },
                        minWidth: { xs: 'auto', md: 'auto' },
                        // Ensure button isn't too wide on mobile but has enough room for text
                        maxWidth: { xs: '70vw', md: '100%' }, 
                        flexShrink: 0,
                        mr: { xs: 0, md: 0 },
                        mb: { xs: 0, md: 1 },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: { xs: 'auto', md: '100%' },
                        // Improved scroll snap alignment
                        scrollSnapAlign: { xs: 'center', md: 'none' },
                        // Only apply highlight effects when this is the active item
                        boxShadow: isSelected
                          ? { xs: '0 0 12px rgba(151, 71, 255, 0.5)', md: '0 0 15px rgba(151, 71, 255, 0.3)' } 
                          : 'none',
                        border: isSelected
                          ? '1px solid rgba(151, 71, 255, 0.6)' 
                          : '1px solid transparent',
                        whiteSpace: { xs: 'normal', md: 'normal' },
                        wordBreak: { xs: 'break-word', md: 'normal' },
                        // Add transform to make sure content is visible in scroll area
                        transform: { xs: 'translateZ(0)', md: 'none' },
                      }}
                    >
                      <Typography
                        sx={{
                          color: isSelected
                            ? '#FFFFFF' 
                            : 'rgba(255, 255, 255, 0.6)',
                          fontFamily: "Montserrat",
                          fontSize: { xs: '14px', md: '15px' },
                          fontWeight: isSelected ? 600 : 500,
                          transition: 'all 0.3s ease',
                          whiteSpace: { xs: 'normal', md: 'normal' },
                          wordBreak: 'break-word',
                          lineHeight: 1.4,
                          maxWidth: '100%',
                        }}
                      >
                        {item.title}
                      </Typography>
                      
                      {isSelected && (
                        <ArrowForwardIosIcon 
                          sx={{ 
                            color: '#9747FF', 
                            fontSize: '12px',
                            ml: 1,
                            flexShrink: 0,
                          }}
                        />
                      )}
                    </ListItem>
                  );
                })}
              </List>

              {/* Add button indicators showing which direction user can scroll */}
              <Box
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  justifyContent: 'space-between',
                  width: '100%',
                  mt: 1,
                  mb: 1
                }}
              >
                <Box
                  component={motion.div}
                  animate={{ 
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  onClick={() => {
                    if (navigationRef.current) {
                      navigationRef.current.scrollBy({
                        left: -200,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(151, 71, 255, 0.2)',
                    cursor: 'pointer',
                  }}
                >
                  <Box sx={{ transform: 'rotate(180deg)' }}>⟶</Box>
                </Box>
                <Box
                  component={motion.div}
                  animate={{ 
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  onClick={() => {
                    if (navigationRef.current) {
                      navigationRef.current.scrollBy({
                        left: 200,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(151, 71, 255, 0.2)',
                    cursor: 'pointer',
                  }}
                >
                  ⟶
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Content and Image Container */}
          <Box
            sx={{
              width: { xs: "100%", md: "75%" },
              display: "flex",
              flexDirection: "column",
              order: { xs: 2, md: 2 },
              maxWidth: "100%",
              overflowX: "hidden", // Prevent horizontal scrolling
              position: "relative", // Keep content contained
            }}
          >
            {/* Content Section with fixed height container - Reduced height */}
            <Box
              sx={{
                position: "relative", 
                height: { 
                  xs: contentHeight > 0 ? contentHeight + 'px' : 'auto', 
                  md: contentHeight > 0 ? contentHeight + 'px' : 'auto' 
                },
                minHeight: { xs: '180px', sm: '200px', md: '220px' },
                transition: "height 0.4s ease-in-out", // Smooth height transition
                mb: { xs: 1, md: 2 }, // Reduced bottom margin to close the gap
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${currentIndex}`}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={smoothCrossfade}
                  ref={contentRef}
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                    overflow: "hidden",
                    position: "absolute", // Position content absolutely
                    top: 0,
                    left: 0,
                    right: 0,
                  }}
                >
                  <Box>
                    <motion.div variants={slideUp}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#FFFFFF80",
                          fontFamily: "Montserrat",
                          fontSize: "14px",
                          fontWeight: 500,
                          textTransform: "uppercase",
                          mb: 1,
                          letterSpacing: '1px',
                          textAlign: { xs: "center", md: "left" }
                        }}
                      >
                        {carouselData[currentIndex].tagline}
                      </Typography>
                    </motion.div>

                    <motion.div variants={slideUp}>
                      <Typography
                        variant="h1"
                        sx={{
                          background: "linear-gradient(90deg, #FFF 0%, #9747FF 100%)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontFamily: "Montserrat",
                          fontSize: { xs: "32px", sm: "36px", md: "42px" },
                          fontWeight: 700,
                          lineHeight: 1.2,
                          marginBottom: { xs: "1rem", md: "1.5rem" },
                          textTransform: "capitalize",
                          textAlign: { xs: "center", md: "left" },
                          // Ensure text wrapping to prevent overflow
                          wordWrap: "break-word",
                          overflowWrap: "break-word",
                          width: "100%",
                          maxWidth: "100%",
                        }}
                      >
                        {carouselData[currentIndex].title}
                      </Typography>
                    </motion.div>

                    {isAutoPlaying && (
                      <Box
                        sx={{
                          width: '100%',
                          height: '4px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '2px',
                          mb: 3,
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      >
                        <motion.div
                          animate={{ width: `${progress * 100}%` }}
                          transition={{ ease: "linear" }}
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            height: '100%',
                            background: 'linear-gradient(90deg, #FFF 0%, #9747FF 100%)',
                            borderRadius: '2px',
                          }}
                        />
                      </Box>
                    )}

                    <motion.div variants={slideUp}>
                      <Typography
                        sx={{
                          color: "#EAEAEA",
                          fontFamily: "Montserrat",
                          fontSize: { xs: "15px", sm: "16px", md: "17px" },
                          fontWeight: 400,
                          lineHeight: 1.7,
                          mb: { xs: 3, md: 4 },
                          textAlign: { xs: "center", md: "left" },
                          maxWidth: { xs: "500px", md: "100%" },
                          mx: { xs: "auto", md: 0 },
                          // Ensure text wrapping to prevent overflow
                          wordWrap: "break-word",
                          overflowWrap: "break-word",
                        }}
                      >
                        {carouselData[currentIndex].description}
                      </Typography>
                    </motion.div>
                  </Box>
                </motion.div>
              </AnimatePresence>
            </Box>

            {/* Image Section - Enhanced smooth transitions */}
            <Box
              sx={{
                position: "relative",
                height: { xs: '260px', sm: '340px', md: '400px' },
                width: "100%",
                overflow: "hidden",
                mt: { xs: 0, md: 0 }, // Remove top margin
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`img-container-${currentIndex}`}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={smoothCrossfade}
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                >
                  {/* Pre-load the next image to prevent flickering */}
                  <Box
                    sx={{
                      position: 'absolute',
                      width: 0,
                      height: 0,
                      opacity: 0,
                      visibility: 'hidden',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={carouselData[(currentIndex + 1) % carouselData.length].image}
                      alt="Preload next"
                    />
                  </Box>
                  
                  {/* Image with smoother transition */}
                  <motion.div
                    key={`img-${currentIndex}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: { duration: 0.7, ease: "easeOut" }
                    }}
                    exit={{ 
                      opacity: 0, 
                      scale: 0.95,
                      transition: { duration: 0.5, ease: "easeInOut" }
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      component="img"
                      src={carouselData[currentIndex].image}
                      alt={carouselData[currentIndex].title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        borderRadius: '10px',
                        filter: 'drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25))',
                      }}
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </Box>

            {/* Mobile indicator dots - Enhanced for better visibility */}
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1.5,
                mt: 2, // Reduced top margin
                mb: 1
              }}
            >
              {carouselData.map((_, index) => (
                <Box
                  key={`indicator-${index}`}
                  component={motion.div}
                  onClick={() => handleSelect(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  sx={{
                    width: currentIndex === index ? '12px' : '8px',
                    height: currentIndex === index ? '12px' : '8px',
                    borderRadius: '50%',
                    backgroundColor: currentIndex === index ? '#9747FF' : 'rgba(255, 255, 255, 0.4)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    // Add a subtle pulse animation to the active dot
                    boxShadow: currentIndex === index ? '0 0 8px 1px rgba(151, 71, 255, 0.7)' : 'none',
                  }}
                />
              ))}
            </Box>
            
            {/* Add mobile instructions text */}
            <Typography
              sx={{
                display: { xs: 'block', md: 'none' },
                textAlign: 'center',
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '12px',
                fontWeight: 400,
                mt: 1
              }}
            >
              Tap dots or swipe feature cards to navigate
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Enhanced fix for screen shifting - Fixed position for edge cases */}
      <style jsx global>{`
        body {
          overflow-x: hidden;
          position: relative;
          width: 100%;
        }
        html {
          overflow-x: hidden;
        }
      `}</style>
    </Box>
  );
};

export default ProductVerticalCarousel;