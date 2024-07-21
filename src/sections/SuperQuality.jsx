import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us "
    className="flex justify-between max-lg:flex-col gap-10 w-full max-container ">
      <div className="flex flex-1 flex-col">
      <h2 className="font-palanquin text-4xl 
       capitalize font-bold lg:max-w-lg">We Provide You
      <br />
      <span className="text-coral-red ">Super </span>  
      Quality </h2>

      <p className="mt-4 lg:max-w-lg info-text">Discover stylist Nike arrivals,
       quality comfort, and innovative for your active life.Discover stylist Nike arrivals,
       quality comfort, and innovative for your active life.</p>
       <p className="mt-6 lg:max-w-lg info-text">Discover stylist Nike arrivals,
       quality comfort, and innovative for your active life.Discover stylist Nike arrivals,
       quality comfort, and innovative for your active life.</p>
       <div className="mt-11">
       <Button label="View Details" iconUrl={arrowRight}/>
       </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
      <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
      </div>
    </section>
  )
}

export default SuperQuality
