import type { SVGProps } from "react";

const BookmarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 32"
    fill="currentColor"
    {...props}
  >
    <path d="M0 0H24V32L12 24L0 32V0Z" />
  </svg>
);

export default BookmarkIcon;
