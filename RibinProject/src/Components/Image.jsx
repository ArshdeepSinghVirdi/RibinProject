import React from 'react';
import Box from '@mui/material/Box';

const Image = ({ src, alt, sx, ...rest }) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        ...sx, // Only apply custom styles
      }}
      {...rest}
    />
  );
};

export default Image;
