import { GalleryCell } from "./imageCell";

export const Gallery = () => {
  const data = ["/img2.jpg", "/img3.jpg", "/img4.jpg"];

  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-center space-x-[20px] p-[20px] md:p-[0]">
      {data.map((x) => (
        <GalleryCell image={x} />
      ))}
    </div>
  );
};
