import Image from "next/image";

export interface IFeatureCell {
  title: string;
  description: string;
}

export const FeatureCell = ({ title, description }: IFeatureCell) => {
  return (
    <div className="flex flex-col h-[300px] max-w-[300px] items-center justify-start">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
        src="/feature_icon.png"
        alt="Feature icon"
        width={54}
        height={54}
        priority
      />
      <h3 className="text-[18px] leading-[24px] pt-[20px] pb-[5px] font-black uppercase">{title}</h3>
      <p className="text-[18px] leading-[22px]">{description}</p>
    </div>
  );
};
