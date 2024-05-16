const Timeline = () => {
  const species = [
    {
      name: "Trilobites",
      lifespan: 270000000,
      color: "bg-blue-500",
      hoverEffect: "hover:bg-blue-600",
    },
    {
      name: "Mammals",
      lifespan: 225000000,
      color: "bg-purple-500",
      hoverEffect: "hover:bg-purple-600",
    },
    {
      name: "Dinosaurs",
      lifespan: 165000000,
      color: "bg-green-500",
      hoverEffect: "hover:bg-green-600",
    },
    {
      name: "Homo sapiens",
      lifespan: 300000,
      color: "bg-red-500",
      hoverEffect: "hover:bg-red-600",
    },
  ];
  const maxDuration = 270000000;

  const formatLifespan = (lifespan: number) => {
    if (lifespan >= 1000000) {
      return `${(lifespan / 1000000).toLocaleString()} million years`;
    } else {
      return `${(lifespan / 1000).toLocaleString()} thousand years`;
    }
  };

  return (
    <div className="p-4">
      {species.map((sp) => {
        const width = (sp.lifespan / maxDuration) * 100;
        return (
          <div className="flex items-center mt-2" key={sp.name}>
            <div className="w-40 mr-5 font-poppins text-sm font-medium">
              {sp.name}: {formatLifespan(sp.lifespan)}
            </div>
            <div className="flex-1 bg-gray-200 h-4 rounded transition-all duration-300">
              <div
                className={`${sp.color} ${sp.hoverEffect} h-full rounded transform transition-all duration-300 hover:scale-105`}
                style={{ width: `${width}%` }}
                title={`${sp.name}: ${formatLifespan(sp.lifespan)} ago to now`}
              ></div>
            </div>
          </div>
        );
      })}
      <div className="flex justify-between text-xs mt-4">
        <span></span>
        <span>{(maxDuration / 1000000).toLocaleString()} million years</span>
      </div>
    </div>
  );
};

export default Timeline;
