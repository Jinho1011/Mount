import React, {useState, useEffect} from 'react';
import {Dimensions, ScrollView, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import FocusAwareStatusBar from '../../../components/StatusBar';
import {createPlanner, deletePlanner} from '../../../store/actions/planners';
import {
  Planedit_newprojectfileSvg,
  MoreSvg,
  Planedit_minus_Svg,
} from '../../../components/assets';

const PlanEditContainer = styled.ScrollView`
  background-color: #ffffff;
`;

const BtnContainer = styled.View`
  padding: 12px 21px 32px 14px;
  flex-direction: row;
  justify-content: space-between;
`;

const PlanBtn = styled.Pressable``;

const BtnText = styled.Text`
  padding: 6px 15px 7px 14px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: ${props => (props.isEditing ? '#E2F955' : '#f3f3f3')};
  color: #000000;
  font-size: 14px;
  font-family: 'NotoSansKR-Regular';
  line-height: 20px;
`;

const PlanersContainer = styled.View``;

const PlannerContainer = styled.View``;

const Planner = styled.Pressable`
  flex-direction: row;
  justify-content: space-between;
  padding: 23px 33px 22px 21px;
`;

const PlannerName = styled.Text`
  color: #000000;
  font-size: 16px;
  font-family: 'NotoSansKR-Regular';
  line-height: 24px;
`;

const PlannerBtn = styled.Pressable``;

const Divider = styled.View`
  /* border: 1.3px solid #F3F3F3; */
  border-bottom-width: 1.3px;
  border-bottom-color: #f3f3f3;
`;

export default ({state, setState}) => {
  const [isEditing, setIsEditing] = useState(false);

  const planners = useSelector(state => state.planners.planners);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const navigateToPlan = id => {
    navigation.navigate('Planner', {id});
  };

  const addNewPlan = () => {
    dispatch(createPlanner('새 기획서'));
  };

  const deletePlan = id => {
    dispatch(deletePlanner(id));
  };

  return (
    <PlanEditContainer>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <BtnContainer>
        <PlanBtn onPress={addNewPlan}>
          <Planedit_newprojectfileSvg />
        </PlanBtn>
        <PlanBtn
          onPress={() => {
            setIsEditing(!isEditing);
          }}>
          <BtnText isEditing={isEditing}>{isEditing ? '저장' : '편집'}</BtnText>
        </PlanBtn>
      </BtnContainer>
      <PlanersContainer>
        {planners.map(p => {
          return (
            <PlannerContainer key={p.id}>
              <Planner>
                <PlannerName>{p.title}</PlannerName>
                {isEditing ? (
                  <Pressable
                    onPress={() => {
                      deletePlan(p.id);
                    }}>
                    <Planedit_minus_Svg width={24} height={24} />
                  </Pressable>
                ) : (
                  <Pressable
                    onPress={() => {
                      navigateToPlan(p.id);
                    }}>
                    <MoreSvg width={24} height={24} />
                  </Pressable>
                )}
              </Planner>
              <Divider />
            </PlannerContainer>
          );
        })}
      </PlanersContainer>
    </PlanEditContainer>
  );
};
