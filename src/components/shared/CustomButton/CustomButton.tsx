import { CustomButtonProps } from "../../../interfaces";

const CustomButton = ({
   name,
   backgroundColor,
   fontColor,
   borderColor,
}: CustomButtonProps) => {
   return (
      <a
         href="#"
         className={`px-10 py-2 rounded-[10px] font-Roboto font-semibold text-[25px]`}
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
