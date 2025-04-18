"use client";

import React, { useReducer, useCallback, useRef } from 'react';
import {
  Box,
  TextField,
  Grid,
  Button,
  MenuItem,
  Select,
  FormControl,
  FormHelperText,
  Checkbox,
  FormControlLabel,
  Typography,
  CircularProgress,
  Alert,
  useMediaQuery,
  useTheme,
  Container,
  Link,
  InputAdornment
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PublicIcon from '@mui/icons-material/Public';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
import WorkIcon from '@mui/icons-material/Work';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import { styled } from '@mui/material/styles';
import NextLink from 'next/link';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(151, 71, 255, 0.3)',
      transition: 'all 0.2s ease-in-out',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(151, 71, 255, 0.6)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#9747FF',
      borderWidth: '2px',
    },
    backgroundColor: 'rgba(15, 15, 30, 0.4)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    borderRadius: '12px',
  },
  '& .MuiInputLabel-root': {
    color: '#CCCCCC',
    fontFamily: 'Montserrat, sans-serif',
  },
  '& .MuiInputBase-input': {
    color: '#FFFFFF',
    padding: '16px 18px',
    fontFamily: 'Montserrat, sans-serif',
  },
  '& .MuiInputBase-input::placeholder': {
    fontFamily: 'Montserrat, sans-serif',
  },
  '& .MuiInputBase-input:-webkit-autofill': {
    WebkitBoxShadow: '0 0 0 100px #1a0033 inset !important',
    WebkitTextFillColor: '#FFFFFF !important',
    caretColor: '#FFFFFF',
    borderRadius: 'inherit',
    fontFamily: 'Montserrat, sans-serif',
  },
  '& .MuiFormHelperText-root': {
    fontFamily: 'Montserrat, sans-serif',
  }
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(151, 71, 255, 0.3)',
      transition: 'all 0.2s ease-in-out',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(151, 71, 255, 0.6)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#9747FF',
      borderWidth: '2px',
    },
    backgroundColor: 'rgba(15, 15, 30, 0.4)',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
  },
  '& .MuiInputLabel-root': {
    color: '#CCCCCC',
    fontFamily: 'Montserrat, sans-serif',
  },
  '& .MuiSelect-select': {
    padding: '16px 18px',
    fontFamily: 'Montserrat, sans-serif',
  },
  '& .MuiInputBase-input': {
    color: '#FFFFFF',
    padding: '16px 18px',
    fontFamily: 'Montserrat, sans-serif',
  },
  '& .MuiMenuItem-root': {
    fontFamily: 'Montserrat, sans-serif',
  },
  '& .MuiFormHelperText-root': {
    fontFamily: 'Montserrat, sans-serif',
  },
  '& .MuiSvgIcon-root': {
    color: '#9747FF',
  },
  '& .MuiInputBase-input:-webkit-autofill': {
    WebkitBoxShadow: '0 0 0 100px #1a0033 inset !important',
    WebkitTextFillColor: '#FFFFFF !important',
    fontFamily: 'Montserrat, sans-serif',
  },
}));

const SectionHeading = styled(Typography)({
  marginBottom: '1.5rem',
  color: '#fff',
  fontWeight: 600,
  fontSize: '1.5rem',
  borderBottom: '2px solid rgba(151, 71, 255, 0.25)',
  paddingBottom: '10px',
  letterSpacing: '0.5px',
  width: '100%',
  fontFamily: 'Montserrat, sans-serif',
});

const InputIcon = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '14px',
  '& .MuiSvgIcon-root': {
    color: '#9747FF',
    marginRight: '12px',
    fontSize: '1.5rem',
    filter: 'drop-shadow(0 2px 4px rgba(151, 71, 255, 0.4))',
  }
});

const floatAnimation = {
  '@keyframes float': {
    '0%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-10px)' },
    '100%': { transform: 'translateY(0px)' }
  }
};

const teamSizes = ['1-10', '11-50', '51-100', '101-500', '501-1000', '1000+'];
const timeSlots = ['Morning (9am - 12pm)', 'Afternoon (12pm - 3pm)', 'Evening (3pm - 6pm)', 'Flexible'];
const timezones = [
  'Pacific Time (PT)', 'Mountain Time (MT)', 'Central Time (CT)', 'Eastern Time (ET)',
  'Greenwich Mean Time (GMT)', 'Central European Time (CET)', 'Eastern European Time (EET)',
  'India Standard Time (IST)', 'Japan Standard Time (JST)', 'Australian Eastern Time (AET)'
];

const ResponsiveLabel = ({ icon, label, isMobile }) => {
  if (isMobile) return null;
  
  return (
    <InputIcon>
      {icon}
      <Typography variant="subtitle1" sx={{ fontWeight: 500, color: '#E0E0E0', fontFamily: 'Montserrat, sans-serif' }}>
        {label}
      </Typography>
    </InputIcon>
  );
};

const SuccessScreen = React.memo(({ onRequestAnother }) => {
  const animationRef = React.useRef(null);

  return (
    <Box 
      ref={animationRef}
      sx={{ 
        textAlign: 'center', 
        py: { xs: 5, md: 8 },
        px: 2,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '500px',
        isolation: 'isolate',
      }}
    >
      <Box 
        sx={{
          position: 'absolute',
          top: '-80px',
          left: '-80px',
          width: '180px',
          height: '180px',
          background: 'radial-gradient(circle, rgba(151, 71, 255, 0.15) 0%, rgba(151, 71, 255, 0) 70%)',
          borderRadius: '50%',
          zIndex: 0,
          filter: 'blur(30px)',
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          bottom: '-60px',
          right: '-60px',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0) 70%)',
          borderRadius: '50%',
          zIndex: 0,
          filter: 'blur(30px)',
        }}
      />
      
      <Box 
        sx={{ 
          position: 'relative', 
          zIndex: 1,
          mb: 4,
          width: '160px',
          height: '160px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(151, 71, 255, 0.1)',
          borderRadius: '50%',
        }}
      >
        <CheckCircleIcon 
          sx={{ 
            fontSize: { xs: 90, md: 100 }, 
            color: '#9747FF', 
            filter: 'drop-shadow(0 0 15px rgba(151, 71, 255, 0.6))'
          }} 
        />
      </Box>
      
      <Typography 
        variant="h3" 
        component="h2" 
        sx={{ 
          color: 'white', 
          mb: 3, 
          fontWeight: 700,
          fontSize: { xs: '1.9rem', sm: '2.2rem', md: '2.5rem' },
          background: 'linear-gradient(135deg, #FFFFFF 0%, #E0E0E0 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
        Your Demo Request Has Been Submitted!
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{ 
          color: '#E0E0E0', 
          maxWidth: 650, 
          mx: 'auto', 
          mb: 5,
          fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
          lineHeight: 1.7,
          opacity: 0.9,
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
        Thank you for your interest in OpsZ. Our team will contact you shortly 
        to schedule your personalized demo at your preferred time.
      </Typography>
      
      <Button 
        variant="outlined"
        onClick={onRequestAnother}
        sx={{
          borderColor: '#9747FF',
          color: 'white',
          padding: '14px 36px',
          fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
          transition: 'all 0.3s ease',
          background: 'rgba(151, 71, 255, 0.1)',
          borderRadius: '14px',
          fontWeight: 500,
          boxShadow: '0 4px 20px rgba(151, 71, 255, 0.2)',
          '&:hover': {
            borderColor: '#9333EA',
            backgroundColor: 'rgba(151, 71, 255, 0.2)',
            transform: 'translateY(-3px)',
            boxShadow: '0 10px 25px rgba(151, 71, 255, 0.3)'
          }
        }}
      >
        Request Another Demo
      </Button>
    </Box>
  );
}, (prevProps, nextProps) => true);

const DemoRequestForm = () => {
  const formRef = React.useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:600px)');
  
  const initialFormData = {
    fullName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    jobTitle: '',
    teamSize: '',
    preferredDate: '',
    preferredTime: '',
    timezone: '',
    message: '',
    agreeToTerms: false
  };

  const [formState, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case 'SET_FORM_DATA':
          return { ...state, formData: { ...state.formData, [action.field]: action.value } };
        case 'SET_LOADING':
          return { ...state, loading: action.value };
        case 'SET_SUCCESS':
          return { ...state, success: action.value };
        case 'SET_ERROR':
          return { ...state, error: action.value };
        case 'SET_ERRORS':
          return { ...state, errors: action.value };
        case 'CLEAR_FIELD_ERROR':
          return { ...state, errors: { ...state.errors, [action.field]: '' } };
        case 'RESET_FORM':
          return { 
            ...state, 
            formData: initialFormData,
            success: false,
            error: '',
            errors: {},
            loading: false
          };
        default:
          return state;
      }
    },
    {
      formData: initialFormData,
      loading: false,
      success: false,
      error: '',
      errors: {}
    }
  );
  
  const { formData, loading, success, error, errors } = formState;
  
  const handleChange = useCallback((e) => {
    const { name, value, checked, type } = e.target;
    dispatch({
      type: 'SET_FORM_DATA',
      field: name,
      value: type === 'checkbox' ? checked : value
    });
    
    if (errors[name]) {
      dispatch({ type: 'CLEAR_FIELD_ERROR', field: name });
    }
  }, [errors]);
  
  const validateForm = useCallback(() => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
    if (!formData.teamSize) newErrors.teamSize = 'Please select your team size';
    if (!formData.preferredDate.trim()) newErrors.preferredDate = 'Please enter a preferred date';
    if (!formData.preferredTime) newErrors.preferredTime = 'Please select a preferred time';
    if (!formData.timezone) newErrors.timezone = 'Please select your timezone';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    
    dispatch({ type: 'SET_ERRORS', value: newErrors });
    return Object.keys(newErrors).length === 0;
  }, [formData]);
  
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    dispatch({ type: 'SET_LOADING', value: true });
    dispatch({ type: 'SET_ERROR', value: '' });
    
    try {
      const response = await fetch('/api/send-demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send your request');
      }
      
      dispatch({ type: 'SET_SUCCESS', value: true });
      
    } catch (err) {
      dispatch({ 
        type: 'SET_ERROR', 
        value: err.message || 'Something went wrong. Please try again later.' 
      });
    } finally {
      dispatch({ type: 'SET_LOADING', value: false });
    }
  }, [formData, validateForm]);
  
  const handleReset = useCallback(() => {
    dispatch({ type: 'RESET_FORM' });
  }, []);

  const inputFieldHeight = { height: '52px' };
  const dateFieldHeight = { height: { xs: '50px', sm: '54px', md: '58px' } };
  
  return (
    <Box
      ref={formRef}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
      }}
    >
      <Box
        component="img"
        src="/unified/Mask group.svg"
        alt="OpsZ Background"
        sx={{
          position: 'absolute',
          top: '50%',
          right: { xs: '-40%', sm: '-20%', md: '-10%', lg: '0%' },
          width: { xs: '100%', sm: '80%', md: '60%', lg: '50%' },
          opacity: 0.8,
          transform: 'translateY(-50%)',
          zIndex: -1,
          filter: 'blur(1px)',
          pointerEvents: 'none',
          animation: 'float 6s ease-in-out infinite',
          transition: 'transform 0.5s ease-out',
          ':hover': {
            transform: 'translateY(-48%) scale(1.02)',
          },
          ...floatAnimation
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          top: '-15%',
          left: '-20%',
          width: '40%',
          height: '50%',
          background: 'radial-gradient(circle, rgba(151, 71, 255, 0.2) 0%, rgba(151, 71, 255, 0) 70%)',
          borderRadius: '50%',
          zIndex: -1,
          filter: 'blur(80px)',
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          bottom: '-20%',
          left: '15%',
          width: '50%',
          height: '40%',
          background: 'radial-gradient(circle, rgba(109, 40, 217, 0.15) 0%, rgba(109, 40, 217, 0) 70%)',
          borderRadius: '50%',
          zIndex: -1,
          filter: 'blur(100px)',
        }}
      />
      
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {success ? (
          <SuccessScreen onRequestAnother={handleReset} />
        ) : (
          <Box 
            component="form" 
            onSubmit={handleSubmit} 
            sx={{ 
              width: '100%', 
              maxWidth: '1400px', 
              mx: 'auto', 
              pt: { xs: 2, sm: 3, md: 4 },
              pb: { xs: 4, sm: 5, md: 6 }
            }}
          >
            {error && (
              <Alert 
                severity="error" 
                sx={{ 
                  mb: 4, 
                  backgroundColor: 'rgba(211, 47, 47, 0.15)', 
                  color: '#ff8a80',
                  border: '1px solid rgba(211, 47, 47, 0.3)',
                  borderRadius: '12px',
                  '& .MuiAlert-icon': {
                    color: '#ff8a80'
                  }
                }}
              >
                {error}
              </Alert>
            )}
            
            {/* Personal Information Section */}
            <Box sx={{ mb: 5 }}>
              <SectionHeading variant="h5">
                Personal Information
              </SectionHeading>
              
              <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', mx: { xs: -1, sm: -1.5, md: -2 } }}>
                <Box sx={{ 
                  px: { xs: 1, sm: 1.5, md: 2 }, 
                  width: { xs: '100%', sm: '45%', md: '30%' }, 
                  mb: { xs: 3, sm: 3,  } 
                }}>
                  <ResponsiveLabel 
                    icon={<PersonIcon />} 
                    label="Full Name" 
                    isMobile={isMobile} 
                  />
                  <StyledTextField
                    fullWidth
                    placeholder={isMobile ? "Full Name" : "Enter your full name"}
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    error={!!errors.fullName}
                    helperText={errors.fullName}
                    InputProps={{
                      sx: inputFieldHeight,
                      startAdornment: isMobile ? (
                        <InputAdornment position="start">
                          <PersonIcon sx={{ color: '#9747FF', opacity: 0.8 }} />
                        </InputAdornment>
                      ) : null
                    }}
                  />
                </Box>
                
                <Box sx={{ 
                  px: { xs: 1, sm: 1.5, md: 2 }, 
                  width: { xs: '100%', sm: '45%', md: '30%' }, 
                  mb: { xs: 3, sm: 3,  } 
                }}>
                  <ResponsiveLabel 
                    icon={<EmailIcon />} 
                    label="Email Address" 
                    isMobile={isMobile} 
                  />
                  <StyledTextField
                    fullWidth
                    placeholder={isMobile ? "Email Address" : "Enter your email"}
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    error={!!errors.email}
                    helperText={errors.email}
                    InputProps={{
                      sx: inputFieldHeight,
                      startAdornment: isMobile ? (
                        <InputAdornment position="start">
                          <EmailIcon sx={{ color: '#9747FF', opacity: 0.8 }} />
                        </InputAdornment>
                      ) : null
                    }}
                  />
                </Box>
                
                <Box sx={{ 
                  px: { xs: 1, sm: 1.5, md: 2 }, 
                  width: { xs: '100%', sm: '45%', md: '30%' } 
                }}>
                  <ResponsiveLabel 
                    icon={<PhoneIcon />} 
                    label="Phone Number (Optional)" 
                    isMobile={isMobile} 
                  />
                  <StyledTextField
                    fullWidth
                    placeholder={isMobile ? "Phone Number" : "Enter your phone number"}
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    variant="outlined"
                    InputProps={{
                      sx: inputFieldHeight,
                      startAdornment: isMobile ? (
                        <InputAdornment position="start">
                          <PhoneIcon sx={{ color: '#9747FF', opacity: 0.8 }} />
                        </InputAdornment>
                      ) : null
                    }}
                  />
                </Box>
              </Box>
            </Box>
            
            {/* Company Information Section */}
            <Box sx={{ mb: 5 }}>
              <SectionHeading variant="h5">
                Company Information
              </SectionHeading>
              
              <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', mx: { xs: -1, sm: -1.5, md: -2 } }}>
                <Box sx={{ 
                  px: { xs: 1, sm: 1.5, md: 2 }, 
                  width: { xs: '100%', sm: '45%', md: '30%' }, 
                  mb: { xs: 3, sm: 3,  } 
                }}>
                  <ResponsiveLabel 
                    icon={<BusinessIcon />} 
                    label="Company Name" 
                    isMobile={isMobile} 
                  />
                  <StyledTextField
                    fullWidth
                    placeholder={isMobile ? "Company Name" : "Enter your company name"}
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    error={!!errors.companyName}
                    helperText={errors.companyName}
                    InputProps={{
                      sx: inputFieldHeight,
                      startAdornment: isMobile ? (
                        <InputAdornment position="start">
                          <BusinessIcon sx={{ color: '#9747FF', opacity: 0.8 }} />
                        </InputAdornment>
                      ) : null
                    }}
                  />
                </Box>
                
                <Box sx={{ 
                  px: { xs: 1, sm: 1.5, md: 2 }, 
                  width: { xs: '100%', sm: '45%', md: '30%' }, 
                  mb: { xs: 3, sm: 3,  } 
                }}>
                  <ResponsiveLabel 
                    icon={<WorkIcon />} 
                    label="Job Title" 
                    isMobile={isMobile} 
                  />
                  <StyledTextField
                    fullWidth
                    placeholder={isMobile ? "Job Title" : "Enter your job title"}
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    error={!!errors.jobTitle}
                    helperText={errors.jobTitle}
                    InputProps={{
                      sx: inputFieldHeight,
                      startAdornment: isMobile ? (
                        <InputAdornment position="start">
                          <WorkIcon sx={{ color: '#9747FF', opacity: 0.8 }} />
                        </InputAdornment>
                      ) : null
                    }}
                  />
                </Box>
                
                <Box sx={{ 
                  px: { xs: 1, sm: 1.5, md: 2 }, 
                  width: { xs: '100%', sm: '45%', md: '30%' } 
                }}>
                  <ResponsiveLabel 
                    icon={<PeopleIcon />} 
                    label="Team Size" 
                    isMobile={isMobile} 
                  />
                  <StyledFormControl 
                    fullWidth 
                    error={!!errors.teamSize}
                  >
                    <Select
                      displayEmpty
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      sx={inputFieldHeight}
                      startAdornment={isMobile ? (
                        <InputAdornment position="start" sx={{ ml: 1, mr: -0.5 }}>
                          <PeopleIcon sx={{ color: '#9747FF', opacity: 0.8 }} />
                        </InputAdornment>
                      ) : null}
                    >
                      <MenuItem disabled value="">
                        {isMobile ? "Team Size" : "Select team size"}
                      </MenuItem>
                      {teamSizes.map((size) => (
                        <MenuItem key={size} value={size}>
                          {size}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.teamSize && (
                      <FormHelperText error>{errors.teamSize}</FormHelperText>
                    )}
                  </StyledFormControl>
                </Box>
              </Box>
            </Box>
            
            {/* Scheduling Information Section */}
            <Box sx={{ mb: 5 }}>
              <SectionHeading variant="h5">
                Scheduling Information
              </SectionHeading>
              
              <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', mx: { xs: -1, sm: -1.5, md: -2 } }}>
                <Box sx={{ 
                  px: { xs: 1, sm: 1.5, md: 2 }, 
                  width: { xs: '100%', sm: '45%', md: '30%' }, 
                  mb: { xs: 3, sm: 3,  } 
                }}>
                  <ResponsiveLabel 
                    icon={<EventIcon />} 
                    label="Preferred Date" 
                    isMobile={isMobile} 
                  />
                  <StyledTextField
                    fullWidth
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    error={!!errors.preferredDate}
                    helperText={errors.preferredDate}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      min: new Date().toISOString().split('T')[0],
                      style: { 
                        color: '#FFFFFF',
                        cursor: 'pointer'
                      }
                    }}
                    InputProps={{
                      sx: { 
                        ...dateFieldHeight,
                        "& input::-webkit-calendar-picker-indicator": {
                          filter: "invert(0.8) sepia(1) saturate(5) hue-rotate(220deg)",
                          opacity: "0.8",
                          cursor: "pointer",
                          "&:hover": {
                            opacity: "1"
                          }
                        }
                      },
                      startAdornment: isMobile ? (
                        <InputAdornment position="start">
                          <EventIcon sx={{ color: '#9747FF', opacity: 0.8, mr: 1 }} />
                          <Typography variant="body2" sx={{ color: 'rgba(224, 224, 224, 0.7)', mr: 1, fontFamily: 'Montserrat, sans-serif' }}>
                            Date:
                          </Typography>
                        </InputAdornment>
                      ) : null
                    }}
                  />
                </Box>
                
                <Box sx={{ 
                  px: { xs: 1, sm: 1.5, md: 2 }, 
                  width: { xs: '100%', sm: '45%', md: '30%' }, 
                  mb: { xs: 3, sm: 3,  } 
                }}>
                  <ResponsiveLabel 
                    icon={<AccessTimeIcon />} 
                    label="Preferred Time" 
                    isMobile={isMobile} 
                  />
                  <StyledFormControl 
                    fullWidth 
                    error={!!errors.preferredTime}
                  >
                    <Select
                      displayEmpty
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      sx={dateFieldHeight}
                      startAdornment={isMobile ? (
                        <InputAdornment position="start" sx={{ ml: 1, mr: -0.5 }}>
                          <AccessTimeIcon sx={{ color: '#9747FF', opacity: 0.8 }} />
                        </InputAdornment>
                      ) : null}
                    >
                      <MenuItem disabled value="">
                        {isMobile ? "Preferred Time" : "Select preferred time"}
                      </MenuItem>
                      {timeSlots.map((slot) => (
                        <MenuItem key={slot} value={slot}>
                          {slot}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.preferredTime && (
                      <FormHelperText>{errors.preferredTime}</FormHelperText>
                    )}
                  </StyledFormControl>
                </Box>
                
                <Box sx={{ 
                  px: { xs: 1, sm: 1.5, md: 2 }, 
                  width: { xs: '100%', sm: '45%', md: '30%' } 
                }}>
                  <ResponsiveLabel 
                    icon={<PublicIcon />} 
                    label="Your Timezone" 
                    isMobile={isMobile} 
                  />
                  <StyledFormControl 
                    fullWidth 
                    error={!!errors.timezone}
                  >
                    <Select
                      displayEmpty
                      name="timezone"
                      value={formData.timezone}
                      onChange={handleChange}
                      sx={dateFieldHeight}
                      startAdornment={isMobile ? (
                        <InputAdornment position="start" sx={{ ml: 1, mr: -0.5 }}>
                          <PublicIcon sx={{ color: '#9747FF', opacity: 0.8 }} />
                        </InputAdornment>
                      ) : null}
                    >
                      <MenuItem disabled value="">
                        {isMobile ? "Your Timezone" : "Select your timezone"}
                      </MenuItem>
                      {timezones.map((zone) => (
                        <MenuItem key={zone} value={zone}>
                          {zone}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.timezone && (
                      <FormHelperText>{errors.timezone}</FormHelperText>
                    )}
                  </StyledFormControl>
                </Box>
              </Box>
            </Box>
            
            {/* Message Section */}
            <Box sx={{ mb: 5 }}>
              <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', mx: { xs: -1, sm: -1.5, md: -2 } }}>
                <Box sx={{ 
                  px: { xs: 1, sm: 1.5, md: 2 }, 
                  width: '100%'
                }}>
                  <ResponsiveLabel 
                    icon={<MessageIcon />} 
                    label="Additional Message (Optional)" 
                    isMobile={isMobile} 
                  />
                  <StyledTextField
                    fullWidth
                    placeholder={isMobile ? "Additional Message (Optional)" : "Let us know if you have any specific requirements or questions..."}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    variant="outlined"
                    multiline
                    rows={4}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        height: 'auto',
                      },
                    }}
                    InputProps={{
                      startAdornment: isMobile ? (
                        <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1, ml: 1, mr: -0.5 }}>
                          <MessageIcon sx={{ color: '#9747FF', opacity: 0.8 }} />
                        </InputAdornment>
                      ) : null
                    }}
                  />
                </Box>
              </Box>
            </Box>
            
            {/* Terms and Submit section */}
            <Box sx={{ mt: 4, mx: { xs: -1, sm: -1.5, md: -2 } }}>
              <Box sx={{ 
                px: { xs: 1, sm: 1.5, md: 2 }, 
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      sx={{
                        color: '#9747FF',
                        '&.Mui-checked': {
                          color: '#9747FF',
                        },
                      }}
                    />
                  }
                  label={
                    <Typography sx={{ color: errors.agreeToTerms ? '#f44336' : '#E0E0E0', fontSize: '0.9rem', fontFamily: 'Montserrat, sans-serif' }}>
                      I agree to the{' '}
                      <Link 
                        component={NextLink} 
                        href="/terms-condition" 
                        sx={{ color: '#9747FF', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                        target="_blank"
                      >
                        Terms and Conditions
                      </Link>{' '}
                      and{' '}
                      <Link 
                        component={NextLink} 
                        href="/privacy-policy" 
                        sx={{ color: '#9747FF', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                        target="_blank"
                      >
                        Privacy Policy
                      </Link>
                    </Typography>
                  }
                  sx={{ mb: 3 }}
                />
                
                {errors.agreeToTerms && (
                  <Typography sx={{ color: '#f44336', fontSize: '0.75rem', mb: 2, fontFamily: 'Montserrat, sans-serif' }}>
                    {errors.agreeToTerms}
                  </Typography>
                )}
                
                <Button
                  type="submit"
                  variant="contained"
                  disabled={loading}
                  sx={{
                    background: 'linear-gradient(90deg, #6D28D9 0%, #9747FF 100%)',
                    color: 'white',
                    padding: '14px 40px',
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    fontWeight: 600,
                    borderRadius: '12px',
                    boxShadow: '0 8px 25px rgba(151, 71, 255, 0.25)',
                    transition: 'all 0.3s ease',
                    fontFamily: 'Montserrat, sans-serif',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #5D1ECB 0%, #8333EB 100%)',
                      boxShadow: '0 12px 30px rgba(151, 71, 255, 0.35)',
                      transform: 'translateY(-2px)',
                    },
                    minWidth: '200px',
                  }}
                >
                  {loading ? (
                    <CircularProgress size={24} sx={{ color: 'white' }} />
                  ) : (
                    'Schedule Your Demo'
                  )}
                </Button>
              </Box>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default React.memo(DemoRequestForm);