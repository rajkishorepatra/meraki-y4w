import React from "react";
import Heading from "./Heading";
import SupportCard from "./SupportCard";
import { RiRefund2Line } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";
import {
  MdModelTraining,
  MdOutlineCastForEducation,
  MdPolicy,
} from "react-icons/md";
import { FaUniversalAccess } from "react-icons/fa6";
import { CgCommunity } from "react-icons/cg";
import { GiArchiveResearch, GiImpactPoint, GiTeamIdea } from "react-icons/gi";
import { PiStrategyBold } from "react-icons/pi";

const Support = () => {
  return (
    <>
      <div className="bg-theme-blue py-10">
        <div className="max-w-screen-2xl mx-auto " id="about">
          <Heading start={"How Meraki"} end={"Supports Startups?"} />
        </div>
        <div className="service-container flex flex-wrap">
          <SupportCard
            icon={<RiRefund2Line size={60} className="text-theme-blue" />}
            title="Seed Funding"
            content={"Initial capital for early-stage expenses"}
          />
          <SupportCard
            icon={<FaHandsHelping size={60} className="text-theme-blue" />}
            title={"Mentorship"}
            content={"Guidance from experienced mentors"}
          />
          <SupportCard
            icon={<MdModelTraining size={60} className="text-theme-blue" />}
            title={"Workshops and Training"}
            content={
              "Sessions on sustainable practices and innovative technologies"
            }
          />
          <SupportCard
            icon={<FaUniversalAccess size={60} className="text-theme-blue" />}
            title={"Access to Experts"}
            content={"Specialized knowledge and technical advice"}
          />
          <SupportCard
            icon={<CgCommunity size={60} className="text-theme-blue" />}
            title={"Community Building"}
            content={"Network of like-minded startups"}
          />
          <SupportCard
            icon={<GiArchiveResearch size={60} className="text-theme-blue" />}
            title={"Market Research"}
            content={"Understanding market needs and trends"}
          />
          <SupportCard
            icon={<GiImpactPoint size={60} className="text-theme-blue" />}
            title={"Impact Assessment"}
            content={"Frameworks for evaluating impact"}
          />
          <SupportCard
            icon={<MdPolicy size={60} className="text-theme-blue" />}
            title={"Advocacy"}
            content={"Support for policy changes"}
          />
          <SupportCard
            icon={<PiStrategyBold size={60} className="text-theme-blue" />}
            title={"Long-term Strategy"}
            content={"Sustainable business models"}
          />
          <SupportCard
            icon={<GiTeamIdea size={60} className="text-theme-blue" />}
            title={"Scalability Plans"}
            content={"Strategies for broader markets"}
          />
          <SupportCard
            icon={
              <MdOutlineCastForEducation
                size={60}
                className="text-theme-blue"
              />
            }
            title={"Awareness Campaigns"}
            content={"Community education on WASH and climate change"}
          />
        </div>
      </div>
    </>
  );
};

export default Support;
