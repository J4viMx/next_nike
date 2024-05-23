import Image from "next/image";
interface Props {
  label: string;
  iconUrl?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  fullWidth?: boolean;
}
const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}: Props) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat leading-none rounded-full
    ${
      backgroundColor
        ? `${backgroundColor} ${borderColor} ${textColor}`
        : "bg-coral-red  text-white border-coral-red"
    }
    ${fullWidth && "w-full"}
    `}
    >
      {label}
      {iconUrl && (
        <Image
          src={iconUrl}
          alt={label}
          width={20}
          height={20}
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};
export default Button;
