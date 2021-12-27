import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';

const TabButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 47px;
  margin-right: 5px;
`;

const TabText = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 16px;
  line-height: 24px;
  color: ${props => (props.isFocused ? '#000000' : '#8B8B8B')};
`;

export default Tab = ({isFocused, label, onPress, setToValue, setWidth}) => {
  const [layout, setLayout] = useState();

  useEffect(() => {
    if (isFocused && layout) {
      setToValue(layout.x);
      setWidth(layout.width);
    }
  }, [isFocused, layout, setToValue, setWidth]);

  const onLayout = e => {
    const {x, width} = e.nativeEvent.layout;
    setLayout({x, width});
  };
  return (
    <TabButton isFocused={isFocused} onPress={onPress} onLayout={onLayout}>
      <TabText isFocused={isFocused}>{label}</TabText>
    </TabButton>
  );
};
