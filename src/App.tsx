import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Router} from './navigation/stacks/router';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <Router />
    </SafeAreaProvider>
  );
}

export default App;
