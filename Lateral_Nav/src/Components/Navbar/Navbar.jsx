import React from 'react'

const Navbar = ({Open, Changeopennav}) => {
  return (
    <nav className='h-full w-1/5'>
      <button></button>
      {
        (()=>{
          if (Open !== false) {
            return(
              <div className='w-full h-full bg-blue-500'>
                
              </div>
            )
          } else {
            return(
              <div className='w-1/5 h-full bg-blue-500'>
                <div className='w-full min-h-[5%] flex justify-center items-center'>
                 <span className='fa-solid fa-bars text-2xl text-white '></span>
                </div>
                <div className='w-full min-h-[95%] flex flex-col gap-3 text-white'>
                  <span className='fa-solid fa-phone '></span> 
                  <span className='fa-brands fa-discord'></span> 
                  <span className='fa-solid fa-cloud'></span> 
                  <span className='fa-solid fa-umbrella'></span> 
                  <span className='fa-solid fa-book'></span> 
                  mari
                </div>
              </div>   
            );
          }
        })()
      }
    </nav>
  )
}

export default Navbar;