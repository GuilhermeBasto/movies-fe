import { IconProps } from "./icon";

export const Eye = ({ color, onClick }: IconProps) => {
  return (
    <svg
      cursor={"pointer"}
      onClick={() => onClick && onClick()}
      xmlns="http://www.w3.org/2000/svg"
      width="15.243"
      height="12.5"
      viewBox="0 0 15.243 12.5"
      fill={color ?? "currentColor"}
    >
      <path
        d="M8.621,4.5C5.157,4.5,2.2,7.092,1,10.75,2.2,14.408,5.157,17,8.621,17s6.423-2.592,7.621-6.25C15.044,7.092,12.085,4.5,8.621,4.5Zm0,10.417c-1.912,0-3.464-1.867-3.464-4.167S6.709,6.583,8.621,6.583s3.464,1.867,3.464,4.167S10.534,14.917,8.621,14.917Zm0-6.667a2.316,2.316,0,0,0-2.079,2.5,2.316,2.316,0,0,0,2.079,2.5,2.316,2.316,0,0,0,2.079-2.5A2.316,2.316,0,0,0,8.621,8.25Z"
        transform="translate(-1 -4.5)"
      />
    </svg>
  );
};
export default Eye;