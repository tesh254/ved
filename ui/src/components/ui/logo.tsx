/* eslint-disable @next/next/no-img-element */

import clsx from "clsx";

type LogoType = {
  size?: number;
};

function Logo(props: Readonly<LogoType>) {
  return (
    <img
      src="./ved_text.svg"
      className={clsx("select-none")}
      style={{
        width: props?.size ? `${props.size}px` : "32px"
      }}
      alt="ved"
    />
  );
}

export default Logo;
