import React from "react";
import "./support.css";

const SupportCard = ({icon,title,content}) => {
  return (
    <>
      <div class="service-box red m-5">
        <div class="service-icon !mb-2">
          <span>
            <i>{icon}</i>
          </span>
        </div>

        <div class="service-content  flex flex-col justify-center h-44">
          <h1 class="service-title">
            <a href="#">{title}</a>
          </h1>
          <p>
           {content}
          </p>
        </div>
      </div>
    </>
  );
};

export default SupportCard;
