import * as React from "react"
import NavMenu from "./nav-menu"
import Context from "../context"

const Footer = () => {
  const context = React.useContext(Context)

  return (
    <footer
      style={{
        backgroundColor: '#222427',
      }}
  
      className="flex flex-col py-2 text-white justify-center columns-12 w-full items-center"
    >
     <div className="relative grid grid-cols-12 py-8 px-4 container lg:py-24">
      <NavMenu
        items={[
          { text: '+1 (877) 777-7777' }, 
          { text: '123 Main st, San Francisco, CA, 94107' },
        ]}
        className="text-sm col-span-12 lg:col-span-4 xl:col-span-6"
      />
  
      <NavMenu
        title='Free Trial'
        items={[
          { text: 'Azure' }, 
          { text: 'AWS' },
          { text: 'Google' },
        ]}
        className="py-8 col-span-12 lg:col-span-4 lg:py-0 xl:col-span-3"
      />
  
      <NavMenu
        title='Resources'
        items={[
          { text: 'Terms Of Service' }, 
          { text: 'Privacy Policy' },
          { text: 'Support' },
        ]}
        className="col-span-12 lg:col-span-4 xl:col-span-3"
      />
  
      <button
        aria-label="Focus on email input"
        className="absolute top-10 right-6 xl:right-0 text-2xl cursor-pointer"
        onClick={() => context.emailRef?.current?.focus()}
      >↑</button>
     </div>
  
     <div className="border-t border-t-white py-4 text-center w-full">
      © 2022 Example 
     </div>
    </footer>
  )
}

export default Footer
