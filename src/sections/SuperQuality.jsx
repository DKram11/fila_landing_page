import { Button } from "../components"
import { superShoe } from '../assets/images'

const SuperQuality = () => {
  return (
    <section 
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize lg:max-w-lg text-4xl font-bold">
          We Provide You
          <span className="text-fila-red"> Super </span>
          <span className="text-fila-red">Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <Button label='View details'/>
        </div>
      </div>
       <div className='flex-1 flex justify-center items-center'>
        <img
          src={superShoe}
          alt='product detail'
          width={500}
          height={500}
          className='object-contain'
        />
      </div>
    </section>
  )
}

export default SuperQuality