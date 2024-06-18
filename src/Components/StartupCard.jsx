import React from "react";

const StartupCard = (props) => {
  const { item } = props;
  console.log(item);
  return (
    <>
      <div class="max-w-md rounded overflow-hidden shadow-lg bg-white">
        <img class="w-full" src={item.img} alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{item.name}</div>
          <p class="text-gray-700 text-base">{item.description}</p>
        </div>
        <div class="px-6 pt-4 pb-2 flex">
          <div>Projects: </div>
          <div>
            {item.tags.map((item, key) => (
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                key={key}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StartupCard;
