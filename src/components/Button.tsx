import React from "react";

type ButtonProps = {
  //   handleClick: () => void;
  //   handleClick: (event: React.MouseEvent<HTMLButtonElement>)   => void;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
// void tidak akan mereturn apapun

export const Button = (props: ButtonProps) => {
  //   return <button onClick={props.handleClick}>Click</button>;
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
  );
};
