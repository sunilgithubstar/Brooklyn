import { processData } from "../common/Helper";
import ProcessStepsCards from "./ProcessStepsCards";

const WorkProcess = () => {
  return (
    <section className="bg-lavendar 2xl:pt-[252px] xl:pt-[200px] lg:pt-[150px] pt-[110px] 2xl:pb-[140px] xl:pb-20 lg:pb-16 md:pb-12 pb-10 2xl:-translate-y-[112px] -translate-y-[80px]">
      <div className="container-modified flex lg:flex-row flex-col items-center justify-between gap-6">
        <div className="xl:max-w-[529px] lg:max-w-[480px] w-full">
          <h2 className="heading">Work Process</h2>
          <div className="sub-heading space-y-4 mt-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum. Suspendis imperdiet,
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non.
            </p>
          </div>
        </div>
        <div className="lg:max-w-[648px] w-full grid xs:grid-cols-2 grid-cols-1 xl:gap-6 sm:gap-4 gap-3">
          {processData.map((step, index) => (
            <ProcessStepsCards key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
