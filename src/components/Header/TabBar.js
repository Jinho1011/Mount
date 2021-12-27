import React, {useState, useRef, useEffect} from 'react';
import {Animated} from 'react-native';
import styled from 'styled-components/native';
import {Header} from './Header';

const Container = styled.View`
  padding-left: 23px;
  background-color: #ffffff;
  border-bottom-width: 0.3px;
  border-bottom-color: #b4b4b4;
`;

const TabWrapper = styled.View`
  flex-direction: row;
  display: flex;
  align-items: center;
  padding-left: 0px;
`;

const TabButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 47px;
  margin-right: 5px;
  border-bottom-width: 4px;
  border-bottom-color: ${props =>
    props.isFocused ? '#000000' : 'transparent'};
`;

const TabText = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 16px;
  line-height: 24px;
  color: ${props => (props.isFocused ? '#000000' : '#8B8B8B')};
`;

export default function TabBar({state, descriptors, navigation}) {
  const [height, setHeight] = useState(0);
  const headerHeight = 58 * 2;
  let index = descriptors[state.routes[0].key].navigation.isFocused() ? 0 : 1;

  // console.log(
  //   '🚀 ~ file: TabBar.js ~ line 38 ~ TabBar ~ state',
  //   state.routes[index].params.offsetY,
  // );

  const scrollY = useRef(new Animated.Value(0));

  useEffect(() => {
    // console.log(state.routes[index].params.offsetY);
    scrollY.current.setValue(state.routes[index].params.offsetY);
  }, [state]);

  // const handleScroll = Animated.event(
  //   [
  //     {
  //       nativeEvent: {
  //         contentOffset: {y: scrollY.current},
  //       },
  //     },
  //   ],
  //   {
  //     useNativeDriver: true,
  //   },
  // );

  const scrollYClamped = Animated.diffClamp(scrollY.current, 0, headerHeight);

  const translateY = scrollYClamped.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -(headerHeight / 2)],
  });
  const translateYNumber = useRef();
  translateY.addListener(({value}) => {
    translateYNumber.current = value;
  });

  return (
    <>
      <Animated.View
        style={[
          {
            position: 'absolute',
            backgroundColor: '#1c1c1c',
            left: 0,
            right: 0,
            width: '100%',
            zIndex: 1,
          },
          {transform: [{translateY}]},
        ]}>
        <Header navigation={navigation} options={{tabBarLabel: '홈'}} />
        <Container>
          <TabWrapper>
            {state.routes.map((route, index) => {
              const {options} = descriptors[route.key];
              const label = options.title;
              const isFocused = state.index === index;

              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });
                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              };
              return (
                <TabButton
                  isFocused={isFocused}
                  onPress={onPress}
                  key={`tab_${index}`}>
                  <TabText isFocused={isFocused}>{label}</TabText>
                </TabButton>
              );
            })}
          </TabWrapper>
        </Container>
      </Animated.View>
    </>
  );
}
