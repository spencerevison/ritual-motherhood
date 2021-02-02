import React from "react";
import Img from "gatsby-image";
import ButtonLink from "./ButtonLink";

export default function Hero({ heroImage, heroTagline, heroSubText }) {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="pt-10 sm:text-center sm:pt-12 md:pt-16 lg:pt-20 lg:text-left xl:pt-28">
              <div dangerouslySetInnerHTML={{ __html: heroTagline }} />
              <p
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                dangerouslySetInnerHTML={{ __html: heroSubText }}
              />
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <ButtonLink
                    label="Read More"
                    url="/blog"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-light md:py-4 md:text-lg md:px-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          alt=""
          fluid={heroImage.fluid}
        />
      </div>
    </div>
  );
}
