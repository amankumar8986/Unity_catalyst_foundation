import { useState } from "react";
import rawData from "../../constant/data";

// To make a bar graph component that takes this data and gives a visual representation of it, we can use the following code:
export default function Graph() {
  const [data, setData] = useState(rawData);

  return (
    <div className="pt-20 w-full flex flex-col items-center">
      <p className="text-4xl font-bold">Our reach</p>
      <p className="text-gray-500 text-xl w-full md:w-8/12 text-center my-4">
        Statewise data of NGO's in India
      </p>
      <div
        className=" w-4/5 overflow-x-scroll flex flex-row justify-center items-center px-5"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <div className="w-full flex flex-row justify-center items-center">
          {data.map((d, index) => (
            <div
              key={index}
              className="w-10 h-96 flex flex-col items-center justify-end"
            >
              <div
                className="w-6 mx-3 bg-[rgb(79,70,229)] hover:bg-green-500"
                title={d.name + " (" + d.count + ")"}
                style={{
                  height: `${20 + d.count / 100}px`,
                }}
              ></div>
              <p className="text-sm">{d.initials}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
