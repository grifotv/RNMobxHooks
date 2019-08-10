import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ClassComponent } from './ClassComponent';
import { FunctionalComponent } from './FunctionalComponent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  description: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
});

type Props = {
}

export const Screen:React.FC<Props> = () => {
    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.title}>MobX + React Native + TypeScript</Text>
                <Text style={styles.description}>with both class and functional components</Text>
            </View>
            <View style={styles.section}>
                <ClassComponent title="Class Component" />
            </View>
            <View style={styles.section}>
                <FunctionalComponent title="Functional Component" />
            </View>
        </View>
    );
}