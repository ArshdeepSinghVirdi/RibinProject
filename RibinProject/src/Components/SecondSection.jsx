import React, { useState, useEffect } from 'react'
import Image from './Image'
import { Stack, Typography, Box } from '@mui/material'
import HeartArrow from '../assets/HeartArrow.png'
import Phone from '../assets/PhoneRomantic.png'
import Phone2 from '../assets/PhoneVerified.png'
import Phone3 from '../assets/PhoneCoffee.png'


const SecondSection = () => {
    const [box, setBox] = useState(1)

    useEffect(() => {
        const timer = setInterval(() => {
            setBox(val => ((val % 3) + 1));
        }, 2000)
        return (() => clearInterval(timer));
    }, []);

    console.log(box)

    return (
        <Stack sx={{ paddingX: '5%', paddingY: '2%', mt: '5rem' }}>
            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' alignItems='stretch' rowGap={5}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', width: { xs: '100%', md: '45%' } }}>
                    <Typography sx={{ fontWeight: '700', fontSize: { xs: '36px', md: '48px' }, color: '#581781' }}>How<br /> Ribin Works?</Typography>
                    <Image src={HeartArrow} alt='Image' sx={{ width: '36%', position: 'absolute', top: 0, right: 0 }} />
                    <Typography sx={{ fontWeight: '700', fontSize: { xs: '26px', md: '32px' } }}>Using Ribin is simple. It's as easy<br /> as select, pay, and share the joy!</Typography>
                </Box>
                {
                    box === 1 ?
                        <Box sx={{ width: { xs: '100%', md: '55%' }, display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: '#EBCCFF59', paddingX: '10%', paddingY: { xs: '20%', md: '2%' }, borderRadius: { xs: '60px', md: '88px' }, position: 'relative', height: '400px', rowGap: '10px' }}>
                            <Typography sx={{ fontWeight: '600', fontSize: { xs: '24px', md: '36px' }, color: '#581781' }}>Choose The Experience</Typography>
                            <Typography sx={{ fontWeight: '500', fontSize: '16px' }}>Select an experience that resonates with their spirit.</Typography>
                            <Image src={Phone} alt='phone' sx={{ width: { xs: '76%', md: '52%' }, position: 'absolute', bottom: '0px' }} />
                        </Box> :
                        box === 2 ?
                            <Box sx={{ width: { xs: '100%', md: '55%' }, display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: '#B2279C59', paddingX: '8%', paddingY: { xs: '20%', md: '2%' }, borderRadius: { xs: '60px', md: '88px' }, position: 'relative', height: '400px', rowGap: '10px' }}>
                                <Typography sx={{ fontWeight: '600', fontSize: { xs: '24px', md: '36px' }, color: '#581781' }}>Enter The Amount</Typography>
                                <Typography sx={{ fontWeight: '500', fontSize: '16px' }}>With our wide range of gift cards, there's something for everyone.</Typography>
                                <Image src={Phone2} alt='phone' sx={{ width: { xs: '76%', md: '22%' }, position: 'absolute', bottom: '0px' }} />
                            </Box> : box === 3 ?
                                <Box sx={{ width: { xs: '100%', md: '55%' }, display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: '#F24CBA59', paddingX: '10%', paddingY: { xs: '20%', md: '2%' }, borderRadius: { xs: '60px', md: '88px' }, position: 'relative', height: '400px', rowGap: '10px' }}>
                                    <Typography sx={{ fontWeight: '600', fontSize: { xs: '24px', md: '36px' }, color: '#581781' }}>Share The Joy</Typography>
                                    <Typography sx={{ fontWeight: '500', fontSize: '16px' }}>Spread smiles effortlessly and create lasting memories.</Typography>
                                    <Image src={Phone3} alt='phone' sx={{ width: { xs: '76%', md: '52%' }, position: 'absolute', bottom: '0px' }} />
                                </Box> : null
                }

            </Stack>
        </Stack>
    )
}

export default SecondSection
