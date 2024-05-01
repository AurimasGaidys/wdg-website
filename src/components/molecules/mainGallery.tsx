import { Gallery } from "./gallery/galery";

export const MainGallery = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white w-full items-center justify-center md:h-[300px] space-x-[20px]">
      <div className="max-w-[1140px] text-[#2E2924] items-center justify-center">
        <h2 className="text-[64px] leading-[64px] pb-[10px] font-black text-center pb-[40px]">
          Ghostly moments
        </h2>
        <Gallery />
      </div>
    </div>
  );
};
