interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const PrimaryButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="bg-[#b28c3b] hover:text-opacity-50 text-white font-bold py-2 px-4 rounded"
      {...props}
    >
      {children}
    </button>
  );
};
