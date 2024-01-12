import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import React from 'react';

export default function BarButtons({buttons, fontSize}){
  return(
    <main>
      <Box sx={{pt:1}}>
        <Stack direction="row" spacing={3} justifyContent="center">
          {buttons.map((buttons, index) => (
            <div key={index}>
              <Button href={buttons.href} sx={{
                display:"flex",
                color:buttons.color,
                borderColor:"black",
              }} size={fontSize} variant={buttons.variant}>{buttons.name}</Button>
            </div>
          ))}
        </Stack>
      </Box>
    </main>
  )
}