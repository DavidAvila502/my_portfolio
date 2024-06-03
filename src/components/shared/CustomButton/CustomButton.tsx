import { CustomButtonProps } from "../../../interfaces";

const CustomButton = ({
   name,
   backgroundColor,
   fontColor,
   borderColor,
   href,
}: CustomButtonProps) => {
   return (
      <a
         href={href ? href : "#"}
         className={`px-10 py-2 rounded-[10px] font-Roboto font-semibold text-[25px]
         max-xl:text-[18px] max-lg:text-[15px] max-lg:px-7 max-lg:py-1 max-lg:rounded-[7px]`}
         style={{
            backgroundColor: backgroundColor
               ? `${backgroundColor} `
               : "#2FA1EA",
            color: fontColor ? `${fontColor}` : "#000",
            border: borderColor ? `1px solid ${borderColor}` : "",
         }}
      >
         {name}
      </a>
   );
};

export default CustomButton;
