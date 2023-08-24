const InsightRoll = ({ insights }) => {
  return (
    <div className="w-full bg-dark text-light whitespace-nowrap overflow-hidden">
      <div className="animate-roll w-full py-3 flex items-center justify-center capitalize  font-light tracking-wider">
        {insights.map((text) => (
          <div>
            {text} <span className="px-4">|</span>{" "}
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default InsightRoll;
