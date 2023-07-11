import React from 'react'
import Card from './card'
import Slider from "react-slick";
import { templates } from '../../data/Templates';

const home = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  };
  
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            <div className='flex flex-col justify-start gap-4'>
                <p className='py-2 text-2xl text-[#20B486] font-medium'>RESUMATE TO SUCCESS</p>
                <h1 className='md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold'>Create your Resume 
                    from <span  className='text-[#20B486]'>100+</span> Templates
                    & Institutions
                </h1>
                <p className='py-2 text-lg text-gray-600'>Build a resume for the job you want.
                  Resumate will help you every step of the way with tools, guides and expert advice. 
                  Try our Resume Builder for free - it’s fast, easy and backed by experts!.
                </p>
                <button>
                    Start
                </button>
            </div>       
            <img  src= "./images/resumesample.png"className="md:order-last  order-first" />
        </div>
      </section>
      {/* How to Section */}
      <section className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <h1 className='text-center text-2xl font-bold text-[#536E96]'>Build your resume online in 4 simple steps.</h1>
            <p className='text-center  text-[#536E96] text-xl'>Making a resume with our resume maker is fast and easy. We'll help you build a professional job application in minutes.</p>
            <div className='flex justify-center py-8 md:gap-8 '>
                <div className='grid md:grid-cols-4 grid-cols-2 gap-2'>
                  <img src="./svgs/logo.svg" />
                  <img src="./svgs/logo.svg"/>
                  <img src="./svgs/logo.svg" />
                  <img src="./svgs/logo.svg" />
                </div>
            </div>
        </div>
      </section>

      {/* Templates */}
      <section className='w-full bg-[#E9F8F3B2] py-32'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <div className='py-4'>
              <h1 className='py-3 text-3xl font-bold'>Most Popular <span className='text-[#20B486]'>Templates</span></h1>
              <p className='text-[#6D737A]'>Various versions have evolved over the years, sometimes by accident.</p>
            </div>
            
            <Slider {...settings} className='px-5'>
              {templates.map((template,i)=>
                <div key={i}>
                  <Card template={template} />
                </div> ) }
            </Slider>     
        </div>
      </section>
    </div>
  );
}

export default home