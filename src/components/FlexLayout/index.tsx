import React, { HTMLAttributes } from "react";

interface Props {
  style?: React.CSSProperties;
  justifyContent?: string;
  rowORColumn: 'row'|'column';
  alignItem?: string;
  onClick?: any;
  children:JSX.Element |JSX.Element[],
  className?:String 
}

export default function FLexLayout(props: Props) {
  const { style, justifyContent, rowORColumn, alignItem, onClick,className } = props;
  return (
    <div
      onClick={onClick}
      
      style={{ ...style }}
      className={`d-flex flex-${rowORColumn} align-items-${alignItem}  justify-content-${justifyContent} ${className}`}
    >
      {props.children}
    </div>
  );
}

