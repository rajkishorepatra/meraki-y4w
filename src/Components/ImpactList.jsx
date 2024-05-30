import React from "react";
import "./impactlist.css";
import Heading from "./Heading";
import { MdDeveloperBoard } from "react-icons/md";

const ImpactList = () => {
  return (
    <>
      <div className="-mt-10">
        <Heading start={"Our"} end={"Impact"} />
      </div>
      <main>
        <ul class="infoGraphic">
          <li>
            <div class="numberWrap">
              <div class="number fontColor1">1</div>
              <div class="coverWrap">
                <div class="numberCover"></div>
              </div>
            </div>
            <div class="content">
              <div class="icon text-gray-500"><MdDeveloperBoard/></div>
              <h2>Develop</h2>
              <p>
                Sagittis, audantium sem eveniet lacus pede porttitor aenean.
              </p>
            </div>
          </li>
          <li>
            <div class="numberWrap">
              <div class="number fontColor2">2</div>
              <div class="coverWrap">
                <div class="numberCover"></div>
              </div>
            </div>
            <div class="content">
              <div class="icon text-gray-500"><MdDeveloperBoard/></div>
              <h2>Engage</h2>
              <p>
                Sagittis, audantium sem eveniet lacus pede porttitor aenean.
              </p>
            </div>
          </li>
          <li>
            <div class="numberWrap">
              <div class="number  fontColor3">3</div>
              <div class="coverWrap">
                <div class="numberCover"></div>
              </div>
            </div>
            <div class="content">
              <div class="icon text-gray-500"><MdDeveloperBoard/></div>
              <h2>Deliver</h2>
              <p>
                Sagittis, audantium sem eveniet lacus pede porttitor aenean.
              </p>
            </div>
          </li>
          <li>
            <div class="numberWrap">
              <div class="number  fontColor4">4</div>
              <div class="coverWrap">
                <div class="numberCover"></div>
              </div>
            </div>
            <div class="content">
              <div class="icon text-gray-500"><MdDeveloperBoard/></div>
              <h2>Plan</h2>
              <p>
                Sagittis, audantium sem eveniet lacus pede porttitor aenean.
              </p>
            </div>
          </li>
          <li>
            <div class="numberWrap">
              <div class="number  fontColor5">5</div>
              <div class="coverWrap">
                <div class="numberCover"></div>
              </div>
            </div>
            <div class="content">
              <div class="icon text-gray-500"><MdDeveloperBoard/></div>
              <h2>Educate</h2>
              <p>
                Sagittis, audantium sem eveniet lacus pede porttitor aenean.
              </p>
            </div>
          </li>
          <li>
            <div class="numberWrap">
              <div class="number  fontColor6">6</div>
              <div class="coverWrap">
                <div class="numberCover"></div>
              </div>
            </div>
            <div class="content">
              <div class="icon text-gray-500"><MdDeveloperBoard/></div>
              <h2>Succeed</h2>
              <p>
                Sagittis, audantium sem eveniet lacus pede porttitor aenean.
              </p>
            </div>
          </li>
        </ul>
      </main>
    </>
  );
};

export default ImpactList;
