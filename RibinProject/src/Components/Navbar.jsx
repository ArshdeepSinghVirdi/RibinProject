import { Box, Button, IconButton, Stack } from '@mui/material'
import React, { useState } from 'react'
import Image from './Image'
import Logo from '../assets/SiteLogo.png'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen(!open)
    }

    return (
        <div>
            <Stack sx={{ paddingX: '5%', paddingY: '2%', display: { xs: 'none', md: 'block' } }}>
                <Stack direction='row' alignItems='center' justifyContent='space-between' >
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <Button variant='text' sx={{ textTransform: 'capitalize', color: 'black', fontWeight: '500', fontSize: '1.2vw', '&:hover': { color: '#DAA0FF' } }}>Explore</Button>
                        <Button variant='text' sx={{ textTransform: 'capitalize', color: 'black', fontWeight: '500', fontSize: '1.2vw', '&:hover': { color: '#DAA0FF' } }}>About Us</Button>
                        <Button variant='text' sx={{ textTransform: 'capitalize', color: 'black', fontWeight: '500', fontSize: '1.2vw', '&:hover': { color: '#DAA0FF' } }}>Ribin for Business</Button>
                        <Button variant='text' sx={{ textTransform: 'capitalize', color: 'black', fontWeight: '500', fontSize: '1.2vw', '&:hover': { color: '#DAA0FF' } }}>Gallery</Button>
                        <Button variant='text' sx={{ textTransform: 'capitalize', color: 'black', fontWeight: '500', fontSize: '1.2vw', '&:hover': { color: '#DAA0FF' } }}>Blogs</Button>
                        <Button variant='contained' sx={{
                            textTransform: 'capitalize', fontWeight: '500', fontSize: '1.2vw', borderRadius: '50px', bgcolor: '#581781', color: 'white',
                            '&:hover': { bgcolor: '#DAA0FF' }
                        }}>Download App</Button>
                    </Box>
                    <Image src={Logo} alt='logo' sx={{ width: 'auto', height: '35px' }} />
                </Stack>
            </Stack>

            <Stack sx={{ paddingX: '5%', paddingY: '4%', display: { xs: 'block', md: 'none' }, position: 'fixed', top: 0,bgcolor: 'white',width: '100%',zIndex: 2 }}>
                <Stack direction='column' alignItems='center' justifyContent='space-between' gap={3}>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Image src={Logo} alt='logo' sx={{ width: 'auto', height: '30px' }} />
                        <IconButton onClick={handleMenu}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    {
                        open === true ? <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <Button variant='text' sx={{ textTransform: 'capitalize', color: 'black', fontWeight: '600', fontSize: { xs: '14px', md: '1.2vw' }, '&:hover': { color: '#DAA0FF' } }}>Explore</Button>
                            <Button variant='text' sx={{ textTransform: 'capitalize', color: 'black', fontWeight: '600', fontSize: { xs: '14px', md: '1.2vw' }, '&:hover': { color: '#DAA0FF' } }}>About Us</Button>
                            <Button variant='text' sx={{ textTransform: 'capitalize', color: 'black', fontWeight: '600', fontSize: { xs: '14px', md: '1.2vw' }, '&:hover': { color: '#DAA0FF' } }}>Ribin for Business</Button>
                            <Button variant='text' sx={{ textTransform: 'capitalize', color: 'black', fontWeight: '600', fontSize: { xs: '14px', md: '1.2vw' }, '&:hover': { color: '#DAA0FF' } }}>Gallery</Button>
                            <Button variant='text' sx={{ textTransform: 'capitalize', color: 'black', fontWeight: '600', fontSize: { xs: '14px', md: '1.2vw' }, '&:hover': { color: '#DAA0FF' } }}>Blogs</Button>
                            <Button variant='contained' sx={{
                                textTransform: 'capitalize', fontWeight: '600', fontSize: { xs: '14px', md: '1.2vw' }, borderRadius: '50px', bgcolor: '#581781', color: 'white',
                                '&:hover': { bgcolor: '#DAA0FF' }
                            }}>Download App</Button>
                        </Box> : null
                    }
                </Stack>
            </Stack>
        </div>
    )
}

export default Navbar
