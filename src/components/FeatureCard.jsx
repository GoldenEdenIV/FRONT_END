import PropTypes from "prop-types";
import { FeatureCardPropTypes } from "./types";
import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <article className="flex flex-col grow items-center text-center text-black max-md:mt-10">
      <img
        loading="lazy"
        src={icon}
        className="object-contain aspect-[0.96] w-[65px]"
        alt={title}
      />
      <div className="flex flex-col items-center mt-6 max-w-full w-[265px]">
        <h3 className="text-lg font-bold leading-none">{title}</h3>
        <p className="mt-3.5 text-sm leading-5">{description}</p>
      </div>
    </article>
  );
};

FeatureCard.propTypes = FeatureCardPropTypes;

export { FeatureCard };
