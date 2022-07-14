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
import SampleButtonNativeComponent from './js/SampleButtonNativeComponent';

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
            title="Turbo Module Demo"
            onPress={handleAlert}
            color={buttonColor}
          />

          <SampleButtonNativeComponent
            // testID={buildTestID('detail', 'notification-button')}
            style={styles.customButtonStyle}
            // enabled={!condition}
            // handlePress={handleAlert}
            text="Fabric Component Demo"
            // onPress={handleAlert}
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
  customButtonStyle: {
    width: '100%',
    height: 45,
    marginTop: 10,
  },
});

export default App;
