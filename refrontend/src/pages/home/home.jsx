import cvtemp from "../../assets/images/cvtemone.jpg";
import { Button } from "@material-tailwind/react";
import step1Image from "../../assets/images/step1image.png";
import step2Image from "../../assets/images/step2image.png";
import step3Image from "../../assets/images/step3image.png";
import step4Image from "../../assets/images/step4image.png";
const home = () => {
  return (
    // w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8
    <div className="">
      {/* Hero Section */}
      <section className="bg-green-100 py-24">
        <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0">
          <div className="flex flex-col justify-start gap-4">
            <div className=" px-5">
              <p className="py-2 text-2xl text-[#20B486] font-medium gap-4">
                RESUMATE TO SUCCESS
              </p>
              <h1 className="md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold gap-4">
                Create your professional Resume from{" "}
                <span className="text-[#20B486]">5+</span> Templates
              </h1>
              <p className="py-2 text-lg text-gray-600 - gap-4 text-justify">
                Build a resume for the job you want. Resumate will help you
                every step of the way with tools, guides and expert advice. Try
                our Resume Builder for free - it’s fast, easy and backed by
                experts!.
              </p>
            </div>
            <div className="flex justify-start px-5">
              <Button>
                <a href="/cv">Build your CV NOW</a>
              </Button>
            </div>
          </div>
          <div className=" px-1">
          <img src={cvtemp} className="md:order-last  order-first" />
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
              <h3 className="font-bold text-center mt-2">Pick a Template or Upload a CV</h3>
              <p className="bg-gray-100 rounded-lg p-4 text-justify">
                Choose a pre-designed template from our collection or upload your
                existing CV to get started.
              </p>
            </div>
          </div>
          <div className="step mb-8 md:w-1/2 lg:w-1/4 p-4">
            <img src={step2Image} alt="Step 2" className="step-image" />
            <div className="step-content">
              <h3 className="font-bold text-center mt-2">Create CV</h3>
              <p className="bg-gray-100 rounded-lg p-4 text-justify">
                Fill in the necessary information, including your personal details,
                work experience, education, and skills to create your CV.
              </p>
            </div>
          </div>
          <div className="step mb-8 md:w-1/2 lg:w-1/4 p-4">
            <img src={step3Image} alt="Step 3" className="step-image" />
            <div className="step-content">
              <h3 className="font-bold text-center mt-2">Select Output Format</h3>
              <p className="bg-gray-100 rounded-lg p-4 text-justify">
                Choose the desired output format for your CV, such as PDF, Word
                document, or HTML.
              </p>
            </div>
          </div>
          <div className="step mb-8 md:w-1/2 lg:w-1/4 p-4">
            <img src={step4Image} alt="Step 4" className="step-image" />
            <div className="step-content">
              <h3 className="font-bold text-center mt-2">Download CV</h3>
              <p className="bg-gray-100 rounded-lg p-4 text-justify">
                Once you're satisfied with your CV, click the download button to
                save it to your device in the chosen format.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Templates */}
      <section className="w-full bg-[#45cfa1b2] py-32 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
        <div className="rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="/images/resumesample.png"
            alt="Mountain"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Mountain</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button type="button">Click to use</button>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src="/images/resumesample.png" alt="River" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">River</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #summer
            </span>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src="/images/resumesample.png" alt="Forest" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Forest</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #fall
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default home;
