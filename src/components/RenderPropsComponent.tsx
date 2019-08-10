import React from 'react';

type Props = {
    children: () => any
}

export const RenderPropsComponent:React.FC<Props> = (props) => {
    return props.children();
}