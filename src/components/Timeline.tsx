import React from "react";

const Timeline = () => {
  const species = [
    {
      name: "Trilobites",
      lifespan: 270000000,
      color: "bg-blue-500",
      hoverColor: "bg-blue-700",
    },
    {
      name: "Mammals",
      lifespan: 225000000,
      color: "bg-purple-500",
      hoverColor: "bg-purple-700",
    },
    {
      name: "Dinosaurs",
      lifespan: 165000000,
      color: "bg-green-500",
      hoverColor: "bg-green-700",
    },
    {
      name: "Homo sapiens",
      lifespan: 300000,
      color: "bg-red-500",
      hoverColor: "bg-red-700",
    },
  ];
  const maxDuration = 270000000; // Longest duration from species for scaling

  return (
    <div className="p-4">
      <h2 className="font-poppins text-center text-xl font-semibold mb-4">
        Lifespan of the species
      </h2>
      {species.map((sp) => {
        const width = (sp.lifespan / maxDuration) * 100;
        return (
          <div className="flex items-center mt-2" key={sp.name}>
            <div className="w-40 mr-5 font-poppins text-sm font-medium">
              {sp.name}: {sp.lifespan.toLocaleString()} years
            </div>
            <div className="flex-1 bg-gray-200 h-4 rounded transition-all duration-300">
              <div
                className={`${sp.color} h-full rounded transition-all duration-300 hover:${sp.hoverColor}`}
                style={{ width: `${width}%` }}
                title={`${
                  sp.name
                }: ${sp.lifespan.toLocaleString()} years ago to now`}
              ></div>
            </div>
          </div>
        );
      })}
      <div className="flex justify-between text-xs mt-4">
        <span></span>
        <span>{maxDuration / 1000000} million years</span>
      </div>
    </div>
  );
};

export default Timeline;
