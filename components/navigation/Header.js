import React from 'react'
import { Brand } from './Brand'
import { CallToActions } from './CallToActions'
import { Menu } from './Menu'


export const Header = () => {
  return (
    <nav className='flex bg-white shadow-md sticky top-0 w-full'>
      <Brand />
      <Menu />
      <CallToActions />
    </nav>
  )
}
