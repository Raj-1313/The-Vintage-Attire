import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import React from 'react'

const BreadCrumb = ({home,category1,category2}) => {
 
  return (
    <Box 
    // border="1px solid red"
    >
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href={home.path ||"#"}>{home.name||"home"}</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href={category1.path ||"#"}>{category1.name||"category1"}</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href={category2.path ||"#"}>{category2.name||"category2"}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  </Box>
  )
}

export default BreadCrumb