import React from 'react';

type Props = {
    children: () => any
}

export const RenderCallbackComponent:React.FC<Props> = (props) => {
    return props.children();
}