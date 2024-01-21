import { useState } from 'react'

import { Button, ShoeCard } from '../components/'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constant'

import { largeShoe0 } from '../assets/images'

const Hero = () => {
  const [largeShoeImg, setLargeShoeImg] = useState(largeShoe0)

  return (
    <section 
      id="home" 
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-fila-red mt-40">
          Our Popular collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold text-fila-blue ">
          <span className=" xl:whitespace-nowrap relative z-10 pr-10 max-lg:z-0">
            The New Arrival
          </span>
          <br />
          <span className="text-fila-red inline-block mt-3">Fila</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
        Step into Fila and step into a world where style, comfort, and innovation converge.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} showIcon={true}/>
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>
                {stat.value}
              </p>
              <p className='leading-8 font-montserrat text-slate-gray-500'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>        
      </div>
      <div className='relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 sm:py-40 bg-[#d2e0fb] bg-center'>
        <img 
          src={largeShoeImg}
          alt='shoe collection'
          width={600}
          height={600}
          className='object-contain relative z-10 rotate-[-30deg]'
        />
        <div className='flex sm:gap-8 gap-6 absolute sm:-bottom-[5%] sm:left-[10%] bottom-[-5%]'>
          {shoes.map((image, index) => (
            <div key={index} className='bg-primary shadow-xl rounded-xl'>
              <ShoeCard 
                index={index}
                imgURL={image}
                changeLargeShoeImage={(shoe) => setLargeShoeImg(shoe)}
                largeShoeImg={largeShoeImg}
              />    
            </div>
          ))}
        </div>
      </div>      
    </section>
  )
}

export default Hero