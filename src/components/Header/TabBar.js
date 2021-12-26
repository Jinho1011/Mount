import React from 'react';
import styled from 'styled-components/native';

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
  return (
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
  );
}
