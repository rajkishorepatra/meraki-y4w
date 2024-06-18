import React from "react";
import "./impactlist.css";
import Heading from "./Heading";
import { MdDeveloperBoard } from "react-icons/md";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, onSnapshot } from "firebase/firestore";

const ImpactList = () => {
  const [impact_list, set_impact_list] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "Meraki-Impact"),
      (snapshot) => {
        const updatedList = snapshot.docs.map((doc) => doc.data());
        set_impact_list(updatedList);
        console.log(impact_list);
      }
    );
    return () => unsubscribe(); // Unsubscribe from the snapshot listener when the component unmounts
  }, []);

  return (
    <>
      <div className="-mt-10">
        <Heading start={"Our"} end={"Impact"} />
      </div>
      <main>
        <ul class="infoGraphic">
          {impact_list.map((item, idx) => (
            <li key={idx}>
              <div class="numberWrap">
                <div class="number fontColor1">{idx + 1}</div>
                <div class="coverWrap">
                  <div class="numberCover"></div>
                </div>
              </div>
              <div class="content">
                <div class="icon text-gray-500">
                  <MdDeveloperBoard />
                </div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
          {/* <li>
            <div class="numberWrap">
              <div class="number fontColor1">1</div>
              <div class="coverWrap">
                <div class="numberCover"></div>
              </div>
            </div>
            <div class="content">
              <div class="icon text-gray-500">
                <MdDeveloperBoard />
              </div>
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
              <div class="icon text-gray-500">
                <MdDeveloperBoard />
              </div>
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
              <div class="icon text-gray-500">
                <MdDeveloperBoard />
              </div>
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
              <div class="icon text-gray-500">
                <MdDeveloperBoard />
              </div>
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
              <div class="icon text-gray-500">
                <MdDeveloperBoard />
              </div>
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
              <div class="icon text-gray-500">
                <MdDeveloperBoard />
              </div>
              <h2>Succeed</h2>
              <p>
                Sagittis, audantium sem eveniet lacus pede porttitor aenean.
              </p>
            </div>
          </li> */}
        </ul>
      </main>
    </>
  );
};

export default ImpactList;
