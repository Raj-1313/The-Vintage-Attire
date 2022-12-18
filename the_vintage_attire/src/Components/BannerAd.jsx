import { Box, Link, Text } from '@chakra-ui/react'
import React from 'react'

const BannerAd = () => {
  return (
    <Box position='relative' top={65}  borderBottom='1px solid gray' textAlign="center" py={30}>
        <Text>Have a question? We can help. <Link to='#'><Text as="ins">*</Text></Link></Text>
      </Box>
  )
}

export default BannerAd