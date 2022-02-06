import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  Image,
} from 'react-native';
import styled from 'styled-components';
import {TabView, SceneMap} from 'react-native-tab-view';
import Box from '../../components/Main/Box';

const screenWidth = Dimensions.get('window').width;

const TabContainer = styled.View`
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

const Container = styled.ScrollView`
  background-color: #ffffff;
  padding: 23px 23px 115px 23px;
`;

const SmallBoxContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ImageContainer = styled.View`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoResultImage = styled.Image`
  width: 230px;
  height: 310px;
`;

const TabBar = ({foodResults, recResults}) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: '음식'},
    {key: 'second', title: '레크'},
  ]);

  useEffect(() => {
    // console.log(
    //   '🚀 ~ file: TabBar.js ~ line 17 ~ TabBar ~ results',
    //   foodResults,
    // );
    // console.log(
    //   '🚀 ~ file: TabBar.js ~ line 17 ~ TabBar ~ results',
    //   recResults,
    // );
  }, []);

  const Component = ({items, type}) => {
    const itemsArr = [];
    for (let i = 0; i < items.length; i++) {
      items[i].displayType = 'short';
      let newItem = [items[i]];
      if (i + 1 < items.length) {
        items[i + 1].displayType = 'short';
        newItem.push(items[++i]);
      }
      itemsArr.push(newItem);
    }
    return (
      <>
        {items.length > 0 ? (
          itemsArr.map(item => {
            if (item.length === 1) {
              const item1 = item[0];
              return (
                <Box item={item1} type={type} key={item.title + item.id} />
              );
            } else {
              const item1 = item[0];
              const item2 = item[1];
              return (
                <SmallBoxContainer key={item1.title + item1.id}>
                  <Box item={item1} type={type} />
                  <Box item={item2} type={type} />
                </SmallBoxContainer>
              );
            }
          })
        ) : (
          <ImageContainer>
            <NoResultImage
              source={require('../../../assets/error/search_error_img.webp')}
            />
          </ImageContainer>
        )}
      </>
    );
  };

  const FirstRoute = () => (
    <Container>
      <Component items={foodResults} type={'FoodSet'} />
    </Container>
  );

  const SecondRoute = () => (
    <Container>
      <Component items={recResults} type={'RecSet'} />
    </Container>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = props => {
    return (
      <TabContainer>
        <TabWrapper>
          {props.navigationState.routes.map((route, i) => {
            return (
              <TabButton
                key={i}
                onPress={() => setIndex(i)}
                isFocused={i === index}>
                <TabText isFocused={i === index}>{route.title}</TabText>
              </TabButton>
            );
          })}
        </TabWrapper>
      </TabContainer>
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
