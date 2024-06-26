import PrivateContactUs from "./privateContactUs";

export const PrivateForm = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white w-full items-center justify-center h-[567px] space-x-[20px]">
      <div className="max-w-[1140px] text-[#2E2924] items-center justify-center">
        <h2 className="text-[64px] leading-[64px] pb-[10px] font-black text-center pb-[40px]">
          Lets talk about your event
        </h2>
        <PrivateContactUs />
      </div>
    </div>
  );
};
