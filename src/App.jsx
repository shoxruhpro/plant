import { useState } from 'react'
import heroImage from './assets/hero.svg'
import firstExampleImage from './assets/example-1.svg'
import secondExampleImage from './assets/example-2.svg'
import thirdExampleImage from './assets/example-3.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className='container 2xl:px-48'>
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
        <section className='max-w-xl'>
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

      <section className='flex gap-x-16 mt-24'>
        <div>
          <h2 className='max-w-sm text-4xl font-nunito mb-8'>We have lots of plants collection for you and your family</h2>
          <a href="#" className='text'>See all collection &rarr;</a>
        </div>

        <div className='flex gap-x-6'>
          <img src={firstExampleImage} alt="" className='bg-[#F6EDE8] px-5 py-6' />
          <img src={secondExampleImage} alt="" className='bg-[#F0F1F6] px-5 py-6' />
          <img src={thirdExampleImage} alt="" className='bg-[#F6EDE8] px-5 py-6' />
        </div>
      </section>
    </div>
  )
}

export default App
