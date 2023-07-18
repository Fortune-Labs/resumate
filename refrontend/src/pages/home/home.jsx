import { Button } from "@material-tailwind/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// zimport { Link } from "react-router-dom";

import { templates } from "./templateImports";
import TemplateSlide from "./templateSlide";

import cvtemp from "../../assets/images/cvtemone.jpg";
import step1Image from "../../assets/images/step1image.png";
import step2Image from "../../assets/images/step2image.png";
import step3Image from "../../assets/images/step3image.png";
import step4Image from "../../assets/images/step4image.png";


const home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    // w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8
    <div className="">
      {/* Hero Section */}
      <section className="bg-green-100 py-12 md:py-24">
        <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px] px-4 md:px-6 lg:px-8">
          <div className="flex flex-col justify-center gap-4">
            <div className="px-2 md:px-0">
              <p className="text-2xl md:text-3xl text-[#20B486] font-medium">
                RESUMATE TO SUCCESS
              </p>
              <h1 className="text-4xl md:text-6xl font-semibold text-[#536E96]">
                Create your professional Resume from{" "}
                <span className="text-[#20B486]">5+</span> Templates
              </h1>
              <p className="text-lg md:text-xl text-gray-600 py-4">
                Build a resume for the job you want. Resumate will help you
                every step of the way with tools, guides, and expert advice.
                Try our Resume Builder for free - it’s fast, easy, and backed by
                experts!
              </p>
            </div>
            <div className="flex justify-start">
              <Button color="gray">
                <a href="/cv">Build your CV NOW</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img 
              src={cvtemp}
              alt="CV Template"
              className="md:order-last order-first max-h-[400px]  object-contain"
            />
          </div>
        </div>
      </section>

      {/* How to Section */}
      <section className="w-full bg-red py-24">
        <div className="md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0">
          <h1 className="text-center text-2xl font-bold text-[#536E96]">
            Build your resume online in 4 simple steps.
          </h1>
          <p className="text-center  text-[#536E96] text-xl pt-6">
            Making a resume with our resume maker is fast and easy. We'll help
            you build a professional job application in minutes.
          </p>
          <div className="steps flex flex-wrap justify-center md:justify-between pt-8">
            <div className="step mb-8 md:w-1/2 lg:w-1/4 p-4">
              <img src={step1Image} alt="Step 1" className="step-image" />
              <div className="step-content">
                <h3 className="font-bold text-center mt-2">
                  Pick a Template or Upload a CV
                </h3>
                <p className="bg-gray-100 rounded-lg p-4 text-justify">
                  Choose a pre-designed template from our collection or upload
                  your existing CV to get started.
                </p>
              </div>
            </div>
            <div className="step mb-8 md:w-1/2 lg:w-1/4 p-4">
              <img src={step2Image} alt="Step 2" className="step-image" />
              <div className="step-content">
                <h3 className="font-bold text-center mt-2">Create CV</h3>
                <p className="bg-gray-100 rounded-lg p-4 text-justify">
                  Fill in the necessary information, including your personal
                  details, work experience, education, and skills to create your
                  CV.
                </p>
              </div>
            </div>
            <div className="step mb-8 md:w-1/2 lg:w-1/4 p-4">
              <img src={step3Image} alt="Step 3" className="step-image" />
              <div className="step-content">
                <h3 className="font-bold text-center mt-2">
                  Select Output Format
                </h3>
                <p className="bg-gray-100 rounded-lg p-4 text-justify">
                  Choose the desired output format for your CV, such as PDF,
                  Word document, or HTML.
                </p>
              </div>
            </div>
            <div className="step mb-8 md:w-1/2 lg:w-1/4 p-4">
              <img src={step4Image} alt="Step 4" className="step-image" />
              <div className="step-content">
                <h3 className="font-bold text-center mt-2">Download CV</h3>
                <p className="bg-gray-100 rounded-lg p-4 text-justify">
                  Once you're satisfied with your CV, click the download button
                  to save it to your device in the chosen format.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center px-5 ">
            <Button color="gray">
              <a href="/cv">Create CV Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="  w-full bg-[#45cfa1b2] py-32 p-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-medium text-white mb-2">
            Resumate Has High-Quality Resume Templates
          </h2>          
          <p className="text-center  text-[#536E96] text-xl pt-6">
            Making a resume with our resume maker is fast and easy. We'll help
            you build a professional job application in minutes.
          </p>
          <Slider {...settings}>
      {templates.map((template) => (
        <div key={template.id} className="p-4">
          <TemplateSlide template={template} />
        </div>
      ))}
    </Slider>
          <div className="text-center mt-10">
            <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
              View All Templates
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default home;
