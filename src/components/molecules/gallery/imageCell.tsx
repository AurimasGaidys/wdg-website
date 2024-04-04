import Image from "next/image";

export interface IGalleryCell {
  image: string;
}

export const GalleryCell = ({ image }: IGalleryCell) => {
  return (
    <div className="flex flex-col h-[200px] max-w-[300px] items-center justify-start">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] pb-[10px]"
        src={image}
        alt="Feature icon"
        width={300}
        height={200}
        priority
      />
    </div>
  );
};
