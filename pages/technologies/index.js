import TechnologiesSlider from "../../components/TechnologiesSlider";

const Technologies = () => {
  return <div className="h-full bg-primary/30 py-32 text-center">
    <div className="container mx-auto h-full flex flex-col justify-center">
      <h2 className="h2 mb-8 xl:mb-0">
        What technologies do I <span className="text-cyan-500">Use ?</span>
      </h2>
      <div>
        <TechnologiesSlider />
      </div>
    </div>
  </div>;
};

export default Technologies;
