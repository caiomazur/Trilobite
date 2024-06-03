interface FooterProps {
  text: string;
}

const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <div className="w-full p-4 sm:p-8 flex justify-center items-center">
      <span className="w-[455px] sm:w-[655px]">
        <p className="font-poppins text-xs">{text}</p>
      </span>
    </div>
  );
};

export default Footer;
