import React from 'react';
import {
    TextField,
    FormControl,
    Select,
    MenuItem,
    Button,
    Container,
    Typography,
    Box,
    Stack,
    Grid,
} from '@mui/material';

const categories = ['Category 1', 'Category 2', 'Category 3']; // Add your categories here

function FrontSectionPartner() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [businessName, setBusinessName] = React.useState('');
    const [selectedCategory, setSelectedCategory] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [website, setWebsite] = React.useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <Stack paddingX={2} marginTop={8}>
            <Container
                maxWidth="md"
                sx={{
                    bgcolor: '#581781',
                    padding: '5%',
                    borderRadius: '20px', // Adjust as needed
                    marginTop: '20px', // Add spacing from the top
                }}
            >
                <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
                    <Typography sx={{ color: '#DAA0FF', fontWeight: '600', fontSize: '24px' }}>
                        Register Your Experience On The Ribin App Now
                    </Typography>
                    <Typography sx={{ color: '#DAA0FF', fontWeight: '500', fontSize: '18px' }}>
                        Fill out the form, and our team will contact you shortly
                    </Typography>
                </Box>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth margin="normal">
                                <Typography variant="h6" sx={{ color: 'white' }}>
                                    Name
                                </Typography>
                                <TextField
                                    variant="filled"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    sx={{ background: 'white' }}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth margin="normal">
                                <Typography variant="h6" sx={{ color: 'white' }}>
                                    Email
                                </Typography>
                                <TextField
                                    variant="filled"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    sx={{ background: 'white' }}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>

                    <FormControl fullWidth margin="normal">
                        <Typography variant="h6" sx={{ color: 'white' }}>
                            Phone Number
                        </Typography>
                        <TextField
                            variant="filled"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            sx={{ background: 'white' }}
                        />
                    </FormControl>

                    <FormControl fullWidth margin="normal">
                        <Typography variant="h6" sx={{ color: 'white' }}>
                            Business Name
                        </Typography>
                        <TextField
                            variant="filled"
                            value={businessName}
                            onChange={(e) => setBusinessName(e.target.value)}
                            sx={{ background: 'white' }}
                        />
                    </FormControl>

                    <FormControl fullWidth margin="normal">
                        <Typography variant="h6" sx={{ color: 'white' }}>
                            Category
                        </Typography>
                        <Select
                            variant="filled"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            sx={{ background: 'white' }}
                        >
                            {categories.map((category, index) => (
                                <MenuItem key={index} value={category}>
                                    {category}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth margin="normal">
                        <Typography variant="h6" sx={{ color: 'white' }}>
                            Location
                        </Typography>
                        <TextField
                            variant="filled"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            sx={{ background: 'white' }}
                        />
                    </FormControl>

                    <FormControl fullWidth margin="normal">
                        <Typography variant="h6" sx={{ color: 'white' }}>
                            Your Website or Social Media Link (Optional)
                        </Typography>
                        <TextField
                            variant="filled"
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                            sx={{ background: 'white' }}
                        />
                    </FormControl>

                    <Typography
                        sx={{
                            fontWeight: '400',
                            fontSize: '12px',
                            color: 'white',
                            marginTop: '10px', // Add spacing below the form fields
                        }}
                    >
                        By submitting this form, you agree to receive email, text, and promotional communication from Blueshift related to products and services in accordance with Ribin's privacy policy
                    </Typography>
                    <FormControl fullWidth margin="normal">
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </FormControl>
                </form>
            </Container>
        </Stack>
    );
}

export default FrontSectionPartner;
