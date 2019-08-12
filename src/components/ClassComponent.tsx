import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { inject, observer } from 'mobx-react';
import { RenderCallbackComponent } from './RenderCallbackComponent';
import { getRandomColor } from '../utils/colorUtils';
import { RootStore } from '../stores/RootStore';

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: 'black',
    },
});

// // 👎 Not reactive: class component with inject
// type Props = {
//     rootStore?: RootStore
//     title: string
// };
// class BaseClassComponent extends React.Component<Props> {
//     render() {
//         const { rootStore, title } = this.props;
//         return (
//             <View style={[styles.container, { backgroundColor: getRandomColor() }]}>
//                 <RenderCallbackComponent>
//                     {() => (
//                         <Text style={styles.title}>{title} {rootStore!.counter}</Text>
//                     )}
//                 </RenderCallbackComponent>
//             </View>
//         )
//     }
// }
// export const ClassComponent = inject('rootStore')(observer(BaseClassComponent));

// 👍 Reactive: class component with inject
type Props = {
    rootStore?: RootStore
    title: string
};
class BaseClassComponent extends React.Component<Props> {
    render() {
        const { rootStore, title } = this.props;
        const { counter } = rootStore!;
        return (
            <View style={[styles.container, { backgroundColor: getRandomColor() }]}>
                <RenderCallbackComponent>
                    {() => (
                        <Text style={styles.title}>{title} {counter}</Text>
                    )}
                </RenderCallbackComponent>
            </View>
        )
    }
}
export const ClassComponent = inject('rootStore')(observer(BaseClassComponent));