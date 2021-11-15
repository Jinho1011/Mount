import React, {useEffect, useState} from 'react';
import FoodSetPresenter from './FoodSetPresenter';

const FoodSetContainer = () => {
  const [state, setState] = useState({
    memberCnt: 0,
    itemCnt: 0,
    foodSet: [],
    items: [],
    isLoaded: false,
  });
  // const [membercount, setMembercount] = useState(0);
  // const [itemscount, setItemscount] = useState(0);
  // const [foodSet, setFoodSet] = useState([]);
  // const [items, setItems] = useState([]);

  useEffect(() => {
    const init = async () => {
      let data = await fetch('/api/detail/foodSet');
      let foodSet = JSON.parse(data._bodyInit).foodSet;
      let items = JSON.parse(data._bodyInit).items;

      setState(prev => ({
        ...prev, // -> memCnt, itemCnt, isLoaded는 변하지 않음 = 이전 데이터랑 같음
        foodSet, // 변화
        items, // 변화
        isLoaded: true,
      }));
    };
    init();
  }, []);

  // const onIncreaseMember = () => {
  //   setMembercount(membercount + 1);
  // };

  // const onDecreaseMember = () => {
  //   setMembercount(Math.max(0, membercount - 1)); // 인원수는 음수가 되면 안됨
  // };

  // const onIncreaseItems = () => {
  //   setItemscount(itemscount + 1);
  // };

  // const onDecreaseItems = () => {
  //   setItemscount(Math.max(0, itemscount - 1));
  // };

  return (
    <>
      {isLoaded ? (
        <FoodSetPresenter state={state} setState={setState} />
      ) : (
        <View>Loading Page</View>
      )}
    </>
  );
};

export default FoodSetContainer;
