import React, { DOMAttributes, HTMLAttributes } from 'react';

interface Props {
    style?: React.CSSProperties;
    justifyContent?: string;
    rowORColumn: 'row' | 'column';
    alignItem?: string;
    onClick?: any;
    children: any;
    className?: String;
    onMouseEnter?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    id?: string;
    keyVal?: any;
    ref?: React.LegacyRef<HTMLDivElement>;
}

export default function FLexLayout(props: Props) {
    const {
        ref,
        keyVal,
        style,
        justifyContent,
        rowORColumn,
        alignItem,
        onClick,
        className,
        onMouseEnter,
        onMouseLeave,
        id
    } = props;
    return (
        <div
            ref={ref}
            key={keyVal}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{ ...style }}
            id={id}
            className={`d-flex flex-${rowORColumn} align-items-${alignItem}  justify-content-${justifyContent} ${className}`}
        >
            {props.children}
        </div>
    );
}
