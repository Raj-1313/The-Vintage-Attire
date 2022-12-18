import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import "./Loading.css"
const Loading = () => {
  return (
    <Grid justifyContent={"center"} alignItems='center' bgColor='blackAlpha.600' w='100vw' h='100vh'>
    <Box scale='5.3' className="loader">      
    </Box>
    </Grid>
  )
}

export default Loading
