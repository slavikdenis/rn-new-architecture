import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import NativeSampleModule from './js/NativeSampleModule';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {backgroundColor: isDarkMode ? 'black' : 'white'};
  const buttonColor = isDarkMode ? 'white' : 'black';

  const handleAlert = () => {
    NativeSampleModule?.showNotification(
      'New architecture demo',
      'TurboModule showing a notification :)',
    );
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.wrapper]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        contentContainerStyle={styles.container}>
        <View style={styles.button}>
          <Button
            title="New architecture demo"
            onPress={handleAlert}
            color={buttonColor}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    margin: 10,
    padding: 10,
  },
});

export default App;
