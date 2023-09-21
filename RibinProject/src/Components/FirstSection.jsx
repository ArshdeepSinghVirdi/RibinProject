import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import Image from './Image'
import ShoppingGirlsImg from '../assets/ShoppingGirls.png'
import RingGirlImg from '../assets/RingGirl.png'
import BoatingBoyImg from '../assets/BoatingBoy.png'
import PlayingGirlsImg from '../assets/PlayingGirls.png'
import Twodash from '../assets/TwoDash.png'
import RoundingArrow from '../assets/RoundingArrow.png'
import bgLeft from '../assets/LeftBg.png'
import bgRight from '../assets/RightBg.png'
import LeftPurpleDot from '../assets/LeftPurple.png'
import LeftPinkDot from '../assets/LeftPink.png'
import './Animations.css'

const ContentBoxStyles = {
    display: 'flex', flexDirection: 'column', gap: '10px', transform: 'translateX(-112%)', width: { xs: '100%', md: '40%' }, animationFillMode: 'forwards', animationTimingFunction: 'linear', animationName: 'slide', animationDuration: '1s', animationDelay: '2s', backgroundImage: 'url(../assets/LeftBg.png)', backgroundSize: 'cover'
}

const ShoppingGirlsStyle = {
    width: { xs: '11rem', md: '19rem' }, height: { xs: '11rem', md: '19rem' }, animationName: 'MovingImage1', animationDelay: '2s', animationDuration: '3s', animationIterationCount: 'infinite'
}
const RingGirlStyle = {
    width: { xs: '10rem', md: '18rem' }, height: { xs: '10rem', md: '18rem' }, animationName: 'MovingImage2', animationDelay: '1s', animationDuration: '3s', animationIterationCount: 'infinite'
}
const BoatingBoyStyle = {
    width: { xs: '8rem', md: '15rem' }, height: { xs: '8rem', md: '15rem' }, animationName: 'MovingImage3', animationDelay: '1s', animationDuration: '3s', animationIterationCount: 'infinite'
}
const PlayingGirlsStyle = {
    width: { xs: '10rem', md: '19rem' }, height: { xs: '10rem', md: '19rem' }, animationName: 'MovingImage4', animationDelay: '1s', animationDuration: '3s', animationIterationCount: 'infinite'
}


const FirstSection = () => {
    return (
        <Stack sx={{ paddingX: '5%', paddingY: '2%', marginTop: { xs: '5rem', md: '1rem' } }}>
            <div style={{ position: 'relative' }}>
                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' rowGap={5}>
                    <Image src={LeftPurpleDot} alt='dot' sx={{ position: 'absolute', top: '-20%', left: '0' }} />
                    <Box sx={ContentBoxStyles}>
                        <Typography sx={{ color: '#B2279C', fontSize: { xs: '7vw', md: '3vw' } }}>
                            Delight in meaningful gifts
                        </Typography>
                        <Typography sx={{ lineHeight: { xs: '36px', md: '12vh' }, fontSize: { xs: '7vw', md: '4.3vw' }, fontWeight: '700' }}>
                            Gift the joy of<br /> new experiences<br />with <span style={{ color: '#581781' }}>Ribin<Image src={Twodash} alt='Image' sx={{ marginBottom: { xs: '5px', md: '20px' }, width: '8%' }} /></span>
                        </Typography>
                        <Typography sx={{ fontSize: { xs: '16px', md: '25px' } }}>Let us create smiles that last a lifetime</Typography>
                        <Button variant='contained' sx={{ mt: '10px', width: 'fit-content', textTransform: 'capitalize', fontWeight: '500', fontSize: { xs: '14px', md: '1.2vw' }, borderRadius: '50px', bgcolor: '#581781', color: 'white', '&:hover': { bgcolor: '#581781' } }}>
                            Lets Explore!
                        </Button>
                        <Image src={RoundingArrow} sx={{ width: '150px', position: 'relative', left: '200px', bottom: '10%' }} />
                    </Box>
                    <Image src={LeftPinkDot} alt='dot' sx={{ position: 'absolute', top: '35%', left: '20px' }} />
                    <Box>
                        <Image src={LeftPurpleDot} alt='dot' sx={{ position: 'absolute', top: '-20%', right: '26%' }} />
                        <Image src={LeftPinkDot} alt='dot' sx={{ position: 'absolute', top: '-30%', right: '20px' }} />
                        <Image src={LeftPurpleDot} alt='dot' sx={{ position: 'absolute', top: '-20%', right: '-10%' }} />
                        <Box>
                            <Image src={ShoppingGirlsImg} alt='Image' sx={ShoppingGirlsStyle} />
                            <Image src={RingGirlImg} alt='Image' sx={RingGirlStyle} />
                        </Box>
                        <Box>
                            <Image src={BoatingBoyImg} alt='Image' sx={BoatingBoyStyle} />
                            <Image src={PlayingGirlsImg} alt='Image' sx={PlayingGirlsStyle} />
                        </Box>
                        <Image src={LeftPinkDot} alt='dot' sx={{ position: 'absolute', top: '30%', right: '20px' }} />
                    </Box>
                </Stack>
            </div>
        </Stack>
    )
}

export default FirstSection
