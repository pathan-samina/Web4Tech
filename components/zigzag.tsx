import Image from 'next/image'
import dynamic from "next/dynamic";

const Zigzag = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white bg-indigo-500 rounded-full mb-4">Web4Tech and We4U</div>
            <h1 className="h2 mb-4 text-black">Pioneering the Future of Technology</h1>
            <p className="text-xl text-gray-400">Explore, Connect, Collaborate: Shaping Tomorrow's Tech Landscape.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src="./images/innovation.webp" width={540} height={405} alt="Event Highlight" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Innovation and Connection.</div>
                  <h3 className="h3 mb-3 text-slate-500">Dynamic Insights</h3>
                  <p className="text-xl text-gray-400 mb-4">Immerse yourself in a dynamic atmosphere designed to inspire innovation. Explore thought-provoking discussions led by industry experts, offering insights into the latest breakthroughs in Web4Tech.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-indigo-950 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="#">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        Explore breakthroughs in Web4Tech.</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-indigo-950 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="#">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Immerse in dynamic, inspiring discussions.</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-indigo-950 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="#">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Stay at the forefront of technology.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src="/images/Tech Ecosystem.webp" width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Redefining Tech Excellence</div>
                  <h3 className="h3 mb-3 text-slate-500">Tech Ecosystem Exploration</h3>
                  <p className="text-xl text-gray-400 mb-4">Connect with industry leaders, developers, and enthusiasts in an immersive exploration of diverse technological domains. Delve into the intricacies of emerging technologies, gaining a deeper understanding of their impact on various industries.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-indigo-950 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="#">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Engage with industry leaders.</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-indigo-950 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="#">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Dive into diverse tech domains.</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-indigo-950 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="#">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Network with enthusiasts and developers.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src="./images/Collaboration Hub.webp" width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Collaboration</div>
                  <h3 className="h3 mb-3 text-slate-500">Collaboration Hub</h3>
                  <p className="text-xl text-gray-400 mb-4">Forge valuable connections through interactive sessions and networking opportunities. Our Collaboration Hub is designed to catalyze meaningful partnerships, fostering innovation and driving the evolution of Web4Tech solutions.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-indigo-950 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="#">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Explore potential collaborations and opportunities.</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-indigo-950 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="#">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Catalyze innovation through collaboration.</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-indigo-950 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="#">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Shape the future of Web4Tech solutions.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Zigzag), { ssr: false });

