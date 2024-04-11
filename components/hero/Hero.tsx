import Image from 'next/image'
import EmailForm from '../emailform/EmailForm'


const Hero = () => {
  return (
    
          <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
            <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 ">
              <div className="flex flex-col justify-center gap-8">
                <h1 className=" text-blue-700 h1-bold" >Future is Here, explore Magic of Science and Technology</h1>
                <p className="p-regular-20 md:p-regular-24">Technology and science had changed the world and took something wasn't impossible in past and make it simple to understand and we believe with technology and science impossible will be possible.</p>
                <EmailForm/>
                
              </div>
              <Image   
                  src="/assets/images/pexels.jpg"
                  alt=""
                  width={1000}
                  height={1000}
                  className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh] md:m-20 rounded"
                  /> 
               
            </div>
             
          </section>
           
  )
}

export default Hero