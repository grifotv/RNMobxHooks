import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'mobx-react';
import { RootStore } from '../stores/RootStore';
import { Screen } from './Screen';

const rootStore = new RootStore();

setInterval(() => {
  rootStore.counter += 1;
}, 1000);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

type Props = {
}

export const App:React.FC<Props> = () => {
  return (
    <Provider rootStore={rootStore}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Screen />
      </SafeAreaView>
    </Provider>
  );
};