import { IoIosPhotos } from "react-icons/io";
import { AccordionCustomStyles } from "./AccordionCustomStyles";

import accordion from "../assets/accordion.webp";
import accordion1 from "../assets/accordion1.webp";

const Accordion = () => {
  return (
    <section className="accordion md:w-4/5 mx-auto md:ml-auto p-4 mt-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Image Section */}
        <div className="w-full md:w-[60%] py-6 md:py-0 relative">
          <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            className="relative z-0"
          >
            <img
              src={accordion}
              alt="Main accordion visual"
              className="w-full md:w-[700px] mx-auto"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 md:static md:ml-24 md:mt-[-70px] z-10"
          >
            <img
              src={accordion1}
              alt="Overlay image"
              className="w-[250px] md:w-[400px] bg-white p-2 rounded shadow-lg"
            />
          </div>
        </div>

        {/* Text + Accordion Section */}
        <div
          className="w-full md:w-[50%]"
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <IoIosPhotos className="text-xl text-primary" />
              <h4 className="text-lg text-primary pt-2">
                Get best IT solution
              </h4>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-black pt-2 pb-2">
              Trust Our Best IT Solution For Your Business
            </h1>
          </div>
          <AccordionCustomStyles />
        </div>
      </div>
    </section>
  );
};

export default Accordion;
