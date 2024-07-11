import React from 'react'

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      <div className="bg-pink-100 absolute backdrop-filter backdrop-blur-xl blur-[150px] top-[5%] left-[0%] translate-x-[50%] w-[500px] h-[500px] rounded-full"></div>
      <div className="bg-yellow-100 absolute backdrop-filter backdrop-blur-xl blur-[150px] top-0 left-[50%] -translate-x-[50%] w-[500px] h-[500px] rounded-full"></div>
      <div className="bg-blue-100 absolute backdrop-filter backdrop-blur-xl blur-[150px] top-[5%] right-[0%] -translate-x-[50%] w-[500px] h-[500px] rounded-full"></div>

      <div className="w-full absolute top-[10px]">
        <div className="logo font-semibold text-xl text-center">
          Digital Signage Center
        </div>
      </div>

      <div className='w-full flex items-center justify-center flex-col z-10 p-8'>
        <div className="text-center">
          <h1 className="text-5xl font-semibold mb-4">Great things coming soon.</h1>
          <p className="mb-8">We are a small and growing consulting firm with big ideas.</p>
          <button className="px-6 py-2 border border-black border-opacity-30 bg-white bg-opacity-20 text-black font-medium rounded hover:bg-opacity-30 transition duration-300">Learn More</button>
        </div>
      </div>
      <div className="absolute bottom-2 w-full container">
        <h2 className="text-md font-semibold mb-2">Subscribe</h2>
        <form className="flex w-full gap-2">
          <input type="email" placeholder="Email" className="px-4 py-4 w-full border border-black border-opacity-30 hover:border-opacity-30 focus:border-opacity-30 text-sm rounded-[6px] bg-white bg-opacity-20 transition-all duration-300" />
          <button type="submit" className="px-4 py-2 bg-black text-white border-opacity-30 rounded-[6px] w-[10%] hover:bg-opacity-30 transition duration-300">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default LandingPage