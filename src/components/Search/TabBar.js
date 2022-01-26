import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import styled from 'styled-components';
import {TabView, SceneMap} from 'react-native-tab-view';

import Items from './Items';

const screenWidth = Dimensions.get('window').width;

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

const TabButton = styled.Pressable`
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

const ItemContainer = styled.ScrollView``;

const TabBar = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: '음식'},
    {key: 'second', title: '레크'},
  ]);

  const FirstRoute = () => (
    <ItemContainer>
      <Items items={[]} />
    </ItemContainer>
  );

  const SecondRoute = () => (
    <ItemContainer>
      <Items items={[]} />
    </ItemContainer>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = props => {
    return (
      <Container>
        <TabWrapper>
          {props.navigationState.routes.map((route, i) => {
            return (
              <TabButton onPress={() => setIndex(i)} isFocused={index === i}>
                <TabText isFocused={index === i}>{route.title}</TabText>
              </TabButton>
            );
          })}
        </TabWrapper>
      </Container>
    );
  };

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{width: screenWidth}}
    />
  );
};

export default TabBar;
