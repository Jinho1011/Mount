import React, {useRef} from 'react';
import {View} from 'react-native';
import styled from 'styled-components';

import global from '../../../../global';

import FocusAwareStatusBar from '../../../../components/StatusBar';
import Box from '../../../../components/Main/Box';
import Floaters from '../../../../components/Main/Floaters';

const ScrollContainer = styled.ScrollView`
  background-color: #fff;
  padding-top: 116px;
  padding-left: 23px;
  padding-right: 23px;
  padding-bottom: 95px;
`;

const SmallBoxContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export default ({state}) => {
  const onScroll = e => {
    global.scroll.updateY(e.nativeEvent.contentOffset.y);
  };
  const scrollRef = useRef();

  const onPressTouch = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  return (
    <>
      <ScrollContainer onScroll={onScroll} ref={scrollRef}>
        <FocusAwareStatusBar
          barStyle="light-content"
          backgroundColor="#000000"
        />
        {state?.items.map(itemArr => {
          if (itemArr.length === 1) {
            const item = itemArr[0];
            return (
              <Box item={item} type={'FoodSet'} key={item.title + item.id} />
            );
          } else {
            const item1 = itemArr[0];
            const item2 = itemArr[1];
            return (
              <SmallBoxContainer key={item1.title + item1.id}>
                <Box item={item1} type={'FoodSet'} />
                {item2 === undefined ? (
                  <></>
                ) : (
                  <Box item={item2} type={'FoodSet'} />
                )}
              </SmallBoxContainer>
            );
          }
        })}
        <View style={{paddingTop: 115}} />
      </ScrollContainer>
      <Floaters onPressTouch={onPressTouch} target={'FoodPlan'} />
    </>
  );
};
