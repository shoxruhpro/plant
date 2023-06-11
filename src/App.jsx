import { useState } from 'react'
import heroImage from './assets/hero.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className='container mx-auto'>
      <nav className='flex justify-between items-center my-10'>
        <a href="/" className='font-nunito font-bold text-2xl'>Plant</a>

        <div className='flex items-center gap-x-32'>
          <div className='flex gap-x-12'>
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">About Us</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>

          <div className="flex items-center gap-x-12 font-nunito">
            <a href="#">Login</a>
            <a href="#" className='px-4 py-3 text-white bg-success rounded'>Sing Up</a>
          </div>
        </div>
      </nav>

      <header className='flex justify-between gap-x-28 items-center'>
        <section className='w-[548px]'>
          <h1 className='text-7xl font-nunito font-bold leading-[6rem]'>Growing Beautiful Plants at Home</h1>

          <p className='mt-6 mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at.</p>

          <a href="#" className='px-4 py-3 text-white bg-success rounded inline-block'>Learn More</a>

          <div className='flex gap-x-28 mt-16 text-center'>
            <div>
              <div className='font-bold font-nunito text-4xl mb-2'>2000+</div>
              <span>Delivery</span>
            </div>

            <div>
              <div className='font-bold font-nunito text-4xl mb-2'>1200+</div>
              <span>Customers</span>
            </div>

            <div>
              <div className='font-bold font-nunito text-4xl mb-2'>1000+</div>
              <span>Product</span>
            </div>
          </div>
        </section>


        <img src={heroImage} alt="" className='w-fit' />
      </header>
    </div>
  )
}

export default App
