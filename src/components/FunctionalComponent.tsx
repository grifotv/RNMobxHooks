import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { inject, observer } from 'mobx-react';
import { RenderPropsComponent } from './RenderPropsComponent';
import { useRootStore } from '../stores/useRootStore';
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

// // 👎 Not reactive: functional component with inject
// type Props = {
//     rootStore?: RootStore
//     title: string
// };
// const BaseFunctionalComponent:React.FC<Props> = ({ title, rootStore }) => {
//     return (
//         <View style={[styles.container, { backgroundColor: getRandomColor() }]}>
//             <RenderPropsComponent>
//                 {() => (
//                     <Text style={styles.title}>{title} {rootStore!.counter}</Text>
//                 )}
//             </RenderPropsComponent>
//         </View>
//     )
// };
// export const FunctionalComponent = inject('rootStore')(observer(BaseFunctionalComponent));

// // 👍 Reactive: functional component with inject
// type Props = {
//     rootStore?: RootStore
//     title: string
// };
// const BaseFunctionalComponent:React.FC<Props> = ({ title, rootStore }) => {
//     const { counter } = rootStore!;
//     return (
//         <View style={[styles.container, { backgroundColor: getRandomColor() }]}>
//             <RenderPropsComponent>
//                 {() => (
//                     <Text style={styles.title}>{title} {counter}</Text>
//                 )}
//             </RenderPropsComponent>
//         </View>
//     )
// };
// export const FunctionalComponent = inject('rootStore')(observer(BaseFunctionalComponent));

// // 👎 Not reactive: functional component with hook
// type Props = {
//     title: string
// }
// export const FunctionalComponent:React.FC<Props> = observer(({ title }) => {
//     const rootStore = useRootStore();
//     return (
//         <View style={[styles.container, { backgroundColor: getRandomColor() }]}>
//             <RenderPropsComponent>
//                 {() => (
//                     <Text style={styles.title}>{title} {rootStore.counter}</Text>
//                 )}
//             </RenderPropsComponent>
//         </View>
//     )
// });

// 👍 Reactive: functional component with hook
type Props = {
    title: string
}
export const FunctionalComponent:React.FC<Props> = observer(({ title }) => {
    const rootStore = useRootStore();
    const { counter } = rootStore;
    return (
        <View style={[styles.container, { backgroundColor: getRandomColor() }]}>
            <RenderPropsComponent>
                {() => (
                    <Text style={styles.title}>{title} {counter}</Text>
                )}
            </RenderPropsComponent>
        </View>
    )
});