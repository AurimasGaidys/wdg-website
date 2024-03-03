export const isMobileLayout = () => {
    const hasWindow = typeof window !== "undefined";
    const width = hasWindow ? window?.innerWidth : 0;
    const breakpoint = 768;
    const isM = width <= breakpoint;
    return isM;
}