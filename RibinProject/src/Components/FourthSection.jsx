import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import Image from './Image'
import BusinessCooperateImg from '../assets/BusinessImg.png'
import EyeImg from '../assets/EyeImg.png'
import GraphImg from '../assets/GraphImg.png'
import PencilImg from '../assets/Pencil-Img.png'

const ImageBoxStyles = {
    transform: 'translateX(-112%)', width: { xs: '100%', md: '50%' }, display: 'flex', justifyContent: 'center', animationFillMode: 'forwards', animationTimingFunction: 'linear', animationName: 'ImgSlide', animationDuration: '1s', animationDelay: '12s'
}

const ContentBoxStyles = {
    width: { xs: '100%', md: '50%' }, transform: 'translateX(112%)', animationName: 'ContentSlide', animationDelay: '12s', animationDuration: '1s', animationTimingFunction: 'linear',animationFillMode: 'forwards'
}
const FourthSection = () => {
    return (
        <Stack sx={{ paddingX: '5%', paddingY: '2%', mt: { xs: '10rem', md: '5rem' }, overflow: 'hidden' }}>
            <Stack>
                <Typography sx={{ textAlign: 'center', fontWeight: '600', fontSize: { xs: '34px', md: '64px' }, color: '#581781' }}>Ribin For Business</Typography>
                <Stack direction={{ xs: 'column', md: 'row' }} alignItems='center' justifyContent='space-between' mt='1rem' rowGap={4}>
                    <Box sx={ImageBoxStyles}>
                        <Image src={BusinessCooperateImg} alt='BusinessImage' sx={{ width: '70%' }} />
                    </Box>
                    <Box sx={ContentBoxStyles}>
                        <Stack direction='column' justifyContent='center' flexWrap='wrap' gap={5}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                                <Box sx={{ bgcolor: '#581781', borderRadius: '50%', width: 'fit-content', padding: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image src={EyeImg} alt='discount' sx={{ width: '26px' }} />
                                </Box>
                                <Box>
                                    <Typography sx={{ fontWeight: '600', fontSize: '16px' }}>Enhanced Visibility</Typography>
                                    <Typography>Stand out in any season and attract more customers,even during slow periods.</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                                <Box sx={{ bgcolor: '#581781', borderRadius: '50%', width: 'fit-content', padding: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image src={GraphImg} alt='discount' sx={{ width: '26px' }} />
                                </Box>
                                <Box>
                                    <Typography sx={{ fontWeight: '600', fontSize: '16px' }}>Increased Football</Typography>
                                    <Typography>Experience a boost in customer visits, ensuring consistent business flow.</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                                <Box sx={{ bgcolor: '#581781', borderRadius: '50%', width: 'fit-content', padding: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image src={PencilImg} alt='discount' sx={{ width: '26px' }} />
                                </Box>
                                <Box>
                                    <Typography sx={{ fontWeight: '600', fontSize: '16px' }}>Personalized Offerings</Typography>
                                    <Typography>Tailor your offerings to match your audience's preferences and  needs.</Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Typography sx={{ color: '#581781', fontSize: '22px', fontWeight: '500' }}>Join Ribin Business - Elevate Your Brand's Reach!</Typography>
                                <Box sx={{ marginTop: '15px' }}>
                                    <Button variant='contained' sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: { xs: '14px', md: '1.2vw' }, borderRadius: '50px', bgcolor: '#581781', color: 'white', '&:hover': { bgcolor: '#581781' } }}>Download Brochure</Button>
                                </Box>
                            </Box>
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default FourthSection
