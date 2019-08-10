import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { observer } from 'mobx-react';
import { RenderPropsComponent } from './RenderPropsComponent';
import { useRootStore } from '../stores/useRootStore';
import { getRandomColor } from '../utils/colorUtils';

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
    title: string
}

// // 👎 Non reactive as rootStore prop is used inside render props
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

// 👍 Reactive as rootStore prop is used outside render props
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