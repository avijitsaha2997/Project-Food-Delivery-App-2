import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section id="home" className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
      <div className="py-2 flex-1 flex flex-col items-start  justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-red-500 px-4 py-1 rounded-full">
          <p className="text-base text-white font-semibold">Bike Delivery</p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              alt="Delivery"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery In{" "}
          <span className="text-red-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          A restaurant, prepared food shop, or fast food establishment, in which
          the principal use is production of prepared food for delivery to
          customers located off the business premises
        </p>

        <button
          type="button"
          className="text-white bg-red-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={
            "https://i.pinimg.com/originals/71/08/34/710834902c903744544b1d334a608d64.jpg"
          }
          className="h-420 w-full lg:w-auto lg:h-650 ml-auto opacity-60 rounded-3xl"
          alt="hero-bg"
        />

        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className=" lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imgSrc}
                  alt="I1"
                  className="w-20 lg:w-40
                                -mt-10 lg:-mt-20"
                />

                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-500">$</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
