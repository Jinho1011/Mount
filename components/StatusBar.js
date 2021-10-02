import * as React from 'react';
import {StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

// using in Tabs and Drawer
// => <FocusAwareStatusBar barStyle="light-content" backgroundColor="#000000" />
// => <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ffffff" />
function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

export default FocusAwareStatusBar;
