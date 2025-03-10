import React from 'react'
import Button from './Button';
import Link from 'next/link';




const Header = () => {
    // console.log("Button children:", children);

  return (
  <div className='flex justify-end py-8 px-4 space-x-3'>
    <div>
    <Link href ="/signup">
    <Button>Sign Up</Button>
    </Link>
    </div>
    <div>
    <Link href ="/login">
    <Button>Log in</Button>
    </Link>
    </div>
  </div>
  )
}



export default Header
