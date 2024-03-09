import React from "react";

const AboutUs = () => {

  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
    <div className="absolute left-0 right-0 -top-14">
      <img
        unoptimized
        // loader={grpahCMSImageLoader}
        // alt={'test'}
        height="100%"
        width="100%"
        className="align-middle rounded-full"
        src='/images/20150430180813.JPG'
      />
    </div>
    <h3 className="text-white mt-4 mb-4 text-xl font-bold">{'Anmolpreet.name'}</h3>
    <p className="text-white text-ls">{'author.bio'}</p>
  </div>
  );
};

export default AboutUs;
