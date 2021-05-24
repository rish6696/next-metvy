import React, { DOMAttributes, HTMLAttributes } from "react";

interface Props {
  style?: React.CSSProperties;
  justifyContent?: string;
  rowORColumn: 'row'|'column';
  alignItem?: string;
  onClick?: any;
  children:JSX.Element |JSX.Element[],
  className?:String 
  onMouseEnter ?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onMouseLeave ?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  id ?:string
}

export default function FLexLayout(props: Props) {
  const { style, justifyContent, rowORColumn, alignItem, onClick,className,onMouseEnter,onMouseLeave,id } = props;
  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave ={onMouseLeave}  
      style={{ ...style }}
      id={id}
      className={`d-flex flex-${rowORColumn} align-items-${alignItem}  justify-content-${justifyContent} ${className}`}
    >
      {props.children}
    </div>
  );
}

