import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { inject, observer } from 'mobx-react';
import { RenderPropsComponent } from './RenderPropsComponent';
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

type Props = {
    rootStore?: RootStore
    title: string
};

// // 👎 Non reactive as rootStore prop is used inside render props
// class BaseClassComponent extends React.Component<Props> {
//     render() {
//         const { rootStore, title } = this.props;
//         return (
//             <View style={[styles.container, { backgroundColor: getRandomColor() }]}>
//                 <RenderPropsComponent>
//                     {() => (
//                         <Text style={styles.title}>{title} {rootStore!.counter}</Text>
//                     )}
//                 </RenderPropsComponent>
//             </View>
//         )
//     }
// }

// 👍 Reactive as rootStore prop is used outside render props
class BaseClassComponent extends React.Component<Props> {
    render() {
        const { rootStore, title } = this.props;
        const { counter } = rootStore!;
        return (
            <View style={[styles.container, { backgroundColor: getRandomColor() }]}>
                <RenderPropsComponent>
                    {() => (
                        <Text style={styles.title}>{title} {counter}</Text>
                    )}
                </RenderPropsComponent>
            </View>
        )
    }
}

export const ClassComponent = inject('rootStore')(observer(BaseClassComponent));