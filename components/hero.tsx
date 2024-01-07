import ModalVideo from '@/components/modal-video';

import dynamic from "next/dynamic";

const Hero = () => {
  return (
    <section className="relative">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="./videos/banner.mp4" type="video/mp4" />
        {/* Add additional source elements for different video formats if needed */}
        Your browser does not support the video tag.
      </video>

      {/* Illustration behind hero content */}
      <div className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none" aria-hidden="true" data-aos="fade-up" data-aos-delay="400">
        {/* Your SVG illustration */}
      </div>

      {/* Hero content */}
      <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 bg-grey-900">
          <h1 className="h1 text-white mb-4" data-aos="fade-up">Web4Tech</h1>
          <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">
            Unleashing the Power of Web3 Technology..
          </p>
          <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div data-aos="fade-up" data-aos-delay="400">
              <a className="btn rounded-lg text-white bg-rose-700 hover:bg-rose-600 w-full mb-4 sm:w-auto sm:mb-0" href="/signup">
                Register
              </a>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <a className="btn rounded-lg text-white bg-indigo-950 hover:bg-indigo-900 w-full sm:w-auto sm:ml-4" href="/signin">
                Join the Revolution
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Hero), { ssr: false });

