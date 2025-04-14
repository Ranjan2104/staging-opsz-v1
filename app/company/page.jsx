'use client';
import React from 'react';

const CompanyPage = () => {

  return (
    <>
      {/* <Box
        sx={{
          position: 'relative',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          pt: { xs: '2rem', sm: '2rem', md: '5rem' },
        }}
      >
        <Box
          component="img"
          src="/product-page/productHeroBack.jpeg"
          alt="Company Hero Background"
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
            background: 'linear-gradient(90deg, rgba(26, 0, 51, 0.85) 0%, rgba(26, 0, 51, 0.6) 50%, rgba(26, 0, 51, 0.3) 100%)',
            zIndex: 1,
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'left' },
            maxWidth: { xs: '100%', md: '60%' },
            px: { xs: 2, md: 0 }
          }}>
            <Typography 
              variant="h1" 
              sx={{
                color: '#EEE',
                fontFamily: 'Montserrat',
                fontSize: { xs: '36px', sm: '48px', md: '64px' },
                fontWeight: 700,
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              We're Building the{' '}
              <Box 
                component="span" 
                sx={{
                  background: 'linear-gradient(90deg, #FFF 0%, #9747FF 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Future of IT Operations
              </Box>
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                color: '#D0D0D0',
                fontFamily: 'Montserrat',
                fontSize: { xs: '16px', sm: '18px', md: '20px' },
                lineHeight: 1.5,
                mb: 4,
                maxWidth: '90%',
              }}
            >
              OpsZ brings together brilliant minds with a shared mission to transform how enterprises manage their IT ecosystems through intelligent automation.
            </Typography>
            
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(to right, #a855f7, #003F68)',
                color: 'white',
                fontWeight: 550,
                borderRadius: '7px',
                padding: '0.75rem 1.5rem',
                textTransform: 'none',
                fontSize: '16px',
                '&:hover': {
                  background: 'linear-gradient(to right, #9747FF, #003F68)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                },
              }}
            >
              Join Our Team
            </Button>
          </Box>
        </Container>
      </Box>
      
      <Box sx={{ 
        py: { xs: 6, md: 10 },
        background: 'linear-gradient(180deg, #0B0B0B 0%, #1A0033 100%)',
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  bgcolor: 'rgba(0, 0, 0, 0.3)',
                  p: 4,
                  borderRadius: 2,
                  height: '100%',
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: '#FFFFFF',
                    fontFamily: 'Montserrat',
                    fontSize: { xs: '28px', md: '36px' },
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  Our Mission
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: '#D0D0D0',
                    fontFamily: 'Montserrat',
                    fontSize: { xs: '16px', md: '18px' },
                    lineHeight: 1.7,
                    mb: 3,
                  }}
                >
                  At OpsZ, we're on a mission to eliminate the chaos and complexity of IT operations. We believe that by combining advanced AI with deep operational expertise, we can create self-orchestrating systems that free IT teams to focus on innovation instead of firefighting.
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: '#D0D0D0',
                    fontFamily: 'Montserrat',
                    fontSize: { xs: '16px', md: '18px' },
                    lineHeight: 1.7,
                  }}
                >
                  Our platform represents a fundamental shift in how organizations manage their technology ecosystems—bringing intelligence, automation, and adaptability to environments of any scale or complexity.
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  bgcolor: 'rgba(0, 0, 0, 0.3)',
                  p: 4,
                  borderRadius: 2,
                  height: '100%',
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: '#FFFFFF',
                    fontFamily: 'Montserrat',
                    fontSize: { xs: '28px', md: '36px' },
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  Our Vision
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: '#D0D0D0',
                    fontFamily: 'Montserrat',
                    fontSize: { xs: '16px', md: '18px' },
                    lineHeight: 1.7,
                    mb: 3,
                  }}
                >
                  We envision a world where IT teams are no longer constrained by the limitations of their tools or the complexity of their environments. Where systems can self-heal, automatically scale, and intelligently adapt to changing conditions without constant human intervention.
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: '#D0D0D0',
                    fontFamily: 'Montserrat',
                    fontSize: { xs: '16px', md: '18px' },
                    lineHeight: 1.7,
                  }}
                >
                  By building technology that understands the full context of IT operations, we're creating a future where infrastructure becomes an enabler of innovation rather than a constraint.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      <Box sx={{ 
        py: { xs: 6, md: 8 },
        background: 'linear-gradient(to bottom, #0B0B0B, #14002A)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <Box
          sx={{
            position: 'absolute',
            top: { xs: '5%', md: '10%' },
            right: { xs: '5%', md: '8%' },
            width: { xs: 150, md: 250 },
            height: { xs: 150, md: 250 },
            background: 'radial-gradient(circle, rgba(151, 71, 255, 0.12) 0%, rgba(151, 71, 255, 0) 70%)',
            borderRadius: '50%',
            filter: 'blur(30px)',
            animation: 'pulse 8s infinite alternate',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: { xs: '8%', md: '15%' },
            left: { xs: '5%', md: '10%' },
            width: { xs: 180, md: 300 },
            height: { xs: 180, md: 300 },
            background: 'radial-gradient(circle, rgba(0, 63, 104, 0.12) 0%, rgba(0, 63, 104, 0) 70%)',
            borderRadius: '50%',
            filter: 'blur(35px)',
            animation: 'pulse 10s infinite alternate-reverse',
            '@keyframes pulse': {
              '0%': { opacity: 0.5, transform: 'scale(0.95)' },
              '100%': { opacity: 0.8, transform: 'scale(1.05)' }
            },
          }}
        />
        
        <Box 
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.035,
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")',
            backgroundSize: '5px',
            zIndex: 0,
          }}
        />

        <Container maxWidth="xl">
          <Box 
            sx={{
              position: 'relative',
              mb: { xs: 4, md: 6 },
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: 3,
                py: 1,
                mb: 3,
                borderRadius: 30,
                background: 'rgba(151, 71, 255, 0.1)',
                border: '1px solid rgba(151, 71, 255, 0.3)',
                boxShadow: '0 2px 10px rgba(151, 71, 255, 0.1)',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to right, rgba(0,0,0,0), rgba(151, 71, 255, 0.1), rgba(0,0,0,0))',
                  borderRadius: 30,
                  animation: 'shine 2s infinite',
                },
                '@keyframes shine': {
                  '0%': { transform: 'translateX(-100%)' },
                  '100%': { transform: 'translateX(100%)' }
                },
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
                <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="#9747FF" strokeWidth="1.5" fill="#9747FF" fillOpacity="0.15"/>
                <circle cx="12" cy="9" r="3" stroke="#9747FF" strokeWidth="1.5" fill="#9747FF" fillOpacity="0.2"/>
                <path d="M17 15C17 12.7909 14.7614 11 12 11C9.23858 11 7 12.7909 7 15" stroke="#9747FF" strokeWidth="1.5"/>
                <path d="M12 2V5" stroke="#9747FF" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M4 7L7 9" stroke="#9747FF" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M20 7L17 9" stroke="#9747FF" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <Typography
                sx={{
                  fontSize: { xs: '14px', md: '16px' },
                  fontWeight: 600,
                  color: '#9747FF',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}
              >
                Leadership Team
              </Typography>
            </Box>
            
            <Typography
              variant="h2"
              sx={{
                color: '#FFFFFF',
                fontFamily: 'Montserrat',
                fontSize: { xs: '32px', md: '48px' },
                fontWeight: 700,
                mb: 2,
                background: 'linear-gradient(90deg, #FFF, #9747FF, #FFF)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60%',
                  height: 3,
                  background: 'linear-gradient(90deg, rgba(151, 71, 255, 0.1), rgba(151, 71, 255, 0.7), rgba(151, 71, 255, 0.1))',
                  borderRadius: 2,
                }
              }}
            >
              Visionary Leadership
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: '#E0E0E0',
                fontFamily: 'Montserrat',
                fontSize: { xs: '16px', md: '18px' },
                lineHeight: 1.6,
                maxWidth: '750px',
                mx: 'auto',
                mb: 1,
              }}
            >
              Our leadership team brings together decades of expertise from the world's top technology companies, unified by a vision to transform enterprise IT operations.
            </Typography>
          </Box>
          
          <Box sx={{ 
            mt: { xs: 4, md: 6 }, 
            mb: { xs: 6, md: 8 }, 
            position: 'relative',
          }}>
            <Grid container spacing={3} alignItems="stretch">
              {teamMembers.map((member, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box
                    sx={{
                      position: 'relative',
                      height: { xs: 400, md: 380 },
                      aspectRatio: '1 / 1.333',
                      background: 'rgba(15, 14, 23, 0.7)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 3,
                      overflow: 'hidden',
                      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                      transition: 'all 0.45s cubic-bezier(0.25, 1, 0.33, 1)',
                      willChange: 'transform, box-shadow',
                      '&:hover': {
                        transform: 'translateY(-12px) scale(1.02)',
                        boxShadow: '0 25px 50px rgba(151, 71, 255, 0.3)',
                        '& .card-mesh': {
                          opacity: 0.3,
                          backgroundSize: '125%',
                          backgroundPosition: '45% 45%',
                          filter: 'brightness(1.2) contrast(1.1)',
                        },
                        '& .card-content': {
                          transform: 'translateY(-8px)',
                        },
                        '& .card-image img': {
                          transform: 'scale(1.08)',
                        },
                        '& .card-shine': {
                          opacity: 0.25,
                          transform: 'rotate(-15deg) translate(-60%, -100%) scale(2.5)',
                        },
                        '& .card-tag': {
                          background: 'rgba(151, 71, 255, 0.4)',
                          color: '#fff',
                          transform: 'translateY(-3px)',
                          boxShadow: '0 5px 15px rgba(151, 71, 255, 0.25)',
                        },
                        '& .card-social-link': {
                          opacity: 1,
                          transform: 'translateY(0)',
                        },
                        '& .card-divider': {
                          width: 60,
                          opacity: 1,
                        }
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: 'linear-gradient(90deg, #9747FF, #003F68)',
                        zIndex: 5,
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                          animation: 'shimmer 3s infinite',
                        },
                        '@keyframes shimmer': {
                          '0%': { left: '-100%' },
                          '100%': { left: '100%' }
                        }
                      }}
                    />
                    
                    <Box
                      className="card-mesh"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        opacity: 0.2,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%239747FF' stroke-width='2'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3C/g%3E%3Cg fill='%23003F68'%3E%3Ccircle cx='769' cy='229' r='8'/%3E%3Ccircle cx='539' cy='269' r='8'/%3E%3Ccircle cx='603' cy='493' r='8'/%3E%3Ccircle cx='731' cy='737' r='8'/%3E%3Ccircle cx='520' cy='660' r='8'/%3E%3Ccircle cx='309' cy='538' r='8'/%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '110%', 
                        backgroundPosition: 'center',
                        transition: 'all 0.6s cubic-bezier(0.25, 1, 0.33, 1)',
                        zIndex: 1,
                        animation: 'meshPulse 8s ease-in-out infinite alternate',
                        '@keyframes meshPulse': {
                          '0%': { opacity: 0.18, backgroundPosition: '50% 50%' },
                          '100%': { opacity: 0.22, backgroundPosition: '51% 49%' }
                        }
                      }}
                    />
                    
                    <Box sx={{ 
                      position: 'relative', 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      zIndex: 2,
                    }}>
                      <Box
                        className="card-image"
                        sx={{
                          position: 'relative',
                          height: '45%',
                          overflow: 'hidden',
                          borderRadius: '12px 12px 0 0',
                        }}
                      >
                        <Box 
                          component="img"
                          src={[
                            "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=800&fit=crop&q=80",
                            "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop&q=80",
                            "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=800&fit=crop&q=80",
                            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=800&fit=crop&q=80"
                          ][index]}
                          alt={member.name}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center 25%',
                            transition: 'transform 0.7s cubic-bezier(0.25, 1, 0.33, 1)',
                            willChange: 'transform',
                          }}
                        />
                        
                        <Box
                          className="card-tag"
                          sx={{
                            position: 'absolute',
                            top: 12,
                            left: 12,
                            px: 1.5,
                            py: 0.5,
                            borderRadius: '4px',
                            background: 'rgba(151, 71, 255, 0.25)',
                            backdropFilter: 'blur(4px)',
                            transition: 'all 0.4s cubic-bezier(0.25, 1, 0.33, 1)',
                            zIndex: 3,
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              background: '#fff',
                              mr: 0.8,
                              animation: 'pulse 2s infinite',
                              '@keyframes pulse': {
                                '0%': { boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.7)' },
                                '70%': { boxShadow: '0 0 0 6px rgba(255, 255, 255, 0)' },
                                '100%': { boxShadow: '0 0 0 0 rgba(255, 255, 255, 0)' }
                              }
                            }}
                          />
                          <Typography
                            sx={{
                              fontSize: '12px',
                              fontWeight: 600,
                              color: 'rgba(255, 255, 255, 0.95)',
                            }}
                          >
                            {member.position}
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Box
                        className="card-content"
                        sx={{
                          flex: 1,
                          p: 2.5,
                          display: 'flex',
                          flexDirection: 'column',
                          transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.33, 1)',
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            color: '#FFFFFF',
                            fontFamily: 'Montserrat',
                            fontSize: '20px',
                            fontWeight: 700,
                            lineHeight: 1.3,
                            mb: 1.5,
                          }}
                        >
                          {member.name}
                        </Typography>
                        
                        <Box
                          className="card-divider"
                          sx={{
                            width: 40,
                            height: 2,
                            background: 'linear-gradient(to right, #9747FF, #003F68)',
                            mb: 1.5,
                            transition: 'width 0.5s cubic-bezier(0.25, 1, 0.33, 1), opacity 0.3s ease',
                            opacity: 0.8,
                            borderRadius: 1,
                          }}
                        />
                        
                        <Typography
                          sx={{
                            color: 'rgba(255, 255, 255, 0.85)',
                            fontSize: '14px',
                            lineHeight: 1.5,
                            mb: 'auto',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            flexGrow: 1,
                          }}
                        >
                          {member.bio}
                        </Typography>
                        
                        <Box
                          sx={{
                            display: 'flex',
                            gap: 1.5,
                            mt: 2,
                          }}
                        >
                          {['linkedin', 'twitter', 'mail'].map((platform, i) => (
                            <Box
                              key={i}
                              component="a"
                              href="#"
                              className="card-social-link"
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 32,
                                height: 32,
                                borderRadius: '8px',
                                background: 'rgba(255, 255, 255, 0.08)',
                                border: '1px solid rgba(255, 255, 255, 0.15)',
                                color: '#FFF',
                                transition: 'all 0.4s cubic-bezier(0.25, 1, 0.33, 1)',
                                opacity: 0.7,
                                transform: 'translateY(8px)',
                                transitionDelay: `${i * 75}ms`,
                                '&:hover': {
                                  background: 'rgba(151, 71, 255, 0.25)',
                                  borderColor: 'rgba(151, 71, 255, 0.4)',
                                  transform: 'translateY(-5px) scale(1.1)',
                                  boxShadow: '0 5px 15px rgba(151, 71, 255, 0.2)',
                                }
                              }}
                            >
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                {platform === 'linkedin' && <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>}
                                {platform === 'twitter' && <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>}
                                {platform === 'mail' && <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>}
                              </svg>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        width: 15,
                        height: 15,
                        borderTop: '2px solid rgba(151, 71, 255, 0.5)',
                        borderRight: '2px solid rgba(151, 71, 255, 0.5)',
                        zIndex: 4,
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 10,
                        left: 10,
                        width: 15,
                        height: 15,
                        borderBottom: '2px solid rgba(151, 71, 255, 0.5)',
                        borderLeft: '2px solid rgba(151, 71, 255, 0.5)',
                        zIndex: 4,
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          
          <Box sx={{ mt: 8 }}>
            <Typography
              variant="h4"
              sx={{
                color: '#FFFFFF',
                fontFamily: 'Montserrat',
                fontSize: { xs: '24px', md: '28px' },
                fontWeight: 600,
                mb: 3,
                textAlign: 'center',
              }}
            >
              Extended Leadership
            </Typography>
            
            <Grid container spacing={2}>
              {[...Array(8)].map((_, i) => (
                <Grid item xs={6} sm={3} md={1.5} key={i}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      py: 2,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 70,
                        height: 70,
                        mb: 1,
                        border: '2px solid rgba(151, 71, 255, 0.3)',
                      }}
                      alt={`Team member ${i+5}`}
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i+5}.jpg`}
                    />
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: '14px',
                        color: '#FFF',
                        mb: 0.5,
                      }}
                    >
                      {i % 2 === 0 ? 'John Smith' : 'Jane Doe'}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '12px',
                        color: '#9747FF',
                        fontWeight: 500,
                      }}
                    >
                      {['VP Product', 'Director of AI', 'UX Lead', 'Solutions Architect', 'DevOps Lead', 'Data Scientist', 'Engineering Lead', 'Security Officer'][i]}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          
          <Box
            sx={{
              mt: 8,
              position: 'relative',
              borderRadius: 3,
              overflow: 'hidden',
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Team collaboration"
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.2,
                filter: 'blur(1px)',
              }}
            />
            <Box
              sx={{
                position: 'relative',
                textAlign: 'center',
                p: { xs: 3, md: 5 },
                background: 'linear-gradient(to right, rgba(11, 11, 11, 0.8), rgba(26, 0, 51, 0.8), rgba(11, 11, 11, 0.8))',
                backdropFilter: 'blur(5px)',
                border: '1px solid rgba(151, 71, 255, 0.2)',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: '#FFFFFF',
                  fontFamily: 'Montserrat',
                  fontSize: { xs: '24px', md: '30px' },
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Join Our Growing Team
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: '#E0E0E0',
                  fontFamily: 'Montserrat',
                  fontSize: { xs: '16px', md: '18px' },
                  lineHeight: 1.7,
                  mb: 4,
                  maxWidth: '800px',
                  mx: 'auto',
                }}
              >
                We're looking for passionate innovators ready to transform the future of IT operations. Join us in building intelligent systems that redefine what's possible.
              </Typography>
              
              <Button
                variant="contained"
                startIcon={
                  <Box
                    component="img"
                    src="https://img.icons8.com/fluency/48/briefcase.png"
                    alt="Careers"
                    sx={{ width: 20, height: 20 }}
                  />
                }
                sx={{
                  background: 'linear-gradient(to right, #a855f7, #003F68)',
                  color: 'white',
                  fontWeight: 550,
                  borderRadius: '7px',
                  padding: '0.75rem 2rem',
                  textTransform: 'none',
                  fontSize: '16px',
                  '&:hover': {
                    background: 'linear-gradient(to right, #9747FF, #003F68)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                View Open Positions
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      
      <Box sx={{ 
        py: { xs: 6, md: 10 },
        background: 'linear-gradient(180deg, #0B0B0B 0%, #1A0033 100%)',
      }}>
        <Container maxWidth="md">
          <Box
            sx={{
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              p: { xs: 3, md: 5 },
              borderRadius: 2,
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: '#FFFFFF',
                fontFamily: 'Montserrat',
                fontSize: { xs: '28px', md: '36px' },
                fontWeight: 700,
                mb: 3,
              }}
            >
              Get in Touch
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: '#D0D0D0',
                fontFamily: 'Montserrat',
                fontSize: { xs: '16px', md: '18px' },
                lineHeight: 1.7,
                mb: 4,
                maxWidth: '700px',
                mx: 'auto',
              }}
            >
              Ready to transform your IT operations? Have questions about our platform or company? We'd love to hear from you. Reach out to schedule a demo or learn more about career opportunities at OpsZ.
            </Typography>
            
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(to right, #a855f7, #003F68)',
                color: 'white',
                fontWeight: 550,
                borderRadius: '7px',
                padding: '0.75rem 1.5rem',
                textTransform: 'none',
                fontSize: '16px',
                mr: 2,
                '&:hover': {
                  background: 'linear-gradient(to right, #9747FF, #003F68)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                },
              }}
            >
              Contact Us
            </Button>
            
            <Button
              variant="outlined"
              sx={{
                borderColor: '#a855f7',
                color: '#FFFFFF',
                fontWeight: 550,
                borderRadius: '7px',
                padding: '0.75rem 1.5rem',
                textTransform: 'none',
                fontSize: '16px',
                '&:hover': {
                  borderColor: '#9747FF',
                  background: 'rgba(151, 71, 255, 0.1)',
                },
              }}
            >
              Schedule a Demo
            </Button>
          </Box>
        </Container>
      </Box> */}
      <h1>Comming Soon...</h1>
    </>
  );
};

export default CompanyPage;
