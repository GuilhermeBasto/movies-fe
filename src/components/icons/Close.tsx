import { IconProps } from "./icon";

export const Close = ({ color, onClick }: IconProps) => {
  return (
    <svg
      onClick={() => onClick && onClick()}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color ?? "currentColor"}
    >
      <path
        fill={"#718fa2"}
        d="M19,6.41,17.59,5,12,10.59,6.41,5,5,6.41,10.59,12,5,17.59,6.41,19,12,13.41,17.59,19,19,17.59,13.41,12Z"
      />
      <path fill={"none"} d="M0,0H24V24H0Z" />
    </svg>
  );
};
export default Close;
