// app/providers.tsx
'use client'

import SidebarWithHeader from "./navbar"
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider>
      <SidebarWithHeader />
      </ChakraProvider>
    </CacheProvider>
  )
}