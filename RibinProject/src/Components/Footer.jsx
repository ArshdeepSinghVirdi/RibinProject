import { Box, Stack, Typography, Link } from '@mui/material'
import React from 'react'
import Image from './Image'
import AppStoreBtn from '../assets/AppStoreBtn.png'
import GooglePlayBtn from '../assets/GooglePlayBtn.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RibinLogo from '../assets/RibinLogoWhite.png'

const Footer = () => {
    return (
        <Stack direction='column' alignItems='center' position='relative' mt='5rem'>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', paddingX: '5%', paddingY: { xs: '10px', md: '1%' }, bgcolor: '#581781', width: '75%', borderRadius: '40px', position: 'absolute', top: { xs: '-7%', md: '-16%' } }}>
                <Box>
                    <Typography sx={{ color: 'white', fontSize: { xs: '14px', md: '2vw' } }}>Ribin: Experience Gifting App</Typography>
                    <Typography sx={{ color: 'white', textAlign: { xs: 'center', md: 'left' } }}>India ka Gifting App</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'end' } }}>
                    <Image src={AppStoreBtn} alt='appstorebtn' sx={{ cursor: 'pointer', width: '40%' }} />
                    <Image src={GooglePlayBtn} alt='googleplaybtn' sx={{ cursor: 'pointer', width: '40%' }} />
                </Box>
            </Box>

            <Stack direction="row"
                justifyContent="space-between"
                alignItems="end"
                bgcolor="#0E0E2C" // Customize the background color
                color="#fff"   // Customize the text color
                sx={{
                    padding: { xs: '10%', md: '5%' },
                    paddingX: '8%',
                    paddingY: { xs: '20%', md: '5%' },
                    textAlign: 'left',
                    width: '100%',
                }}>
                <Stack direction={{ xs: 'column', md: 'row' }} gap={6}>
                    {/* Company Section */}
                    <Stack sx={{ marginRight: '20px' }}>
                        <Typography variant="h6" gutterBottom>
                            Company
                        </Typography>
                        <Stack gap={1}>
                            <Link href="#" color="inherit" variant="body2" underline="hover">
                                About Us
                            </Link>
                            <Link href="#" color="inherit" variant="body2" underline="hover">
                                Careers
                            </Link>
                            <Link href="#" color="inherit" variant="body2" underline="hover">
                                FAQs
                            </Link>
                            <Link href="#" color="inherit" variant="body2" underline="hover">
                                Teams
                            </Link>
                            <Link href="#" color="inherit" variant="body2" underline="hover">
                                Ribin for Business
                            </Link>
                            <Link href="#" color="inherit" variant="body2" underline="hover">
                                Employee Benefits
                            </Link>
                        </Stack>
                    </Stack>

                    {/* Legal Section */}
                    <Stack
                        sx={{
                            marginRight: '20px',
                        }}
                    >
                        <Typography variant="h6" gutterBottom>
                            Legal
                        </Typography>
                        <Stack gap={1}>
                            <Link href="#" color="inherit" variant="body2" underline="hover">
                                Terms & Conditions
                            </Link>
                            <Link href="#" color="inherit" variant="body2" underline="hover">
                                Cookie Policy
                            </Link>
                            <Link href="#" color="inherit" variant="body2" underline="hover">
                                Privacy Policy
                            </Link>
                            <Link href="#" color="inherit" variant="body2" underline="hover">
                                Refund Policy
                            </Link>
                        </Stack>
                    </Stack>

                    {/* Follow Us Section */}
                    <Stack>
                        <Typography variant="h6" gutterBottom>Follow Us</Typography>
                        <Stack direction='row' gap='10px'>
                            <Link href="https://www.instagram.com/yourusername" color="inherit" variant="body2" underline="hover">
                                <InstagramIcon />
                            </Link>
                            <Link href="https://www.facebook.com/yourusername" color="inherit" variant="body2" underline="hover">
                                <FacebookIcon />
                            </Link>
                            <Link href="https://www.linkedin.com/in/yourusername" color="inherit" variant="body2" underline="hover">
                                <LinkedInIcon />
                            </Link>
                        </Stack>

                    </Stack>
                </Stack>
                <Box sx={{}}>
                    <Image src={RibinLogo} alt='Ribin' sx={{ width: { xs: '10rem', md: '12rem' } }} />
                </Box>
            </Stack>

        </Stack>
    )
}

export default Footer
