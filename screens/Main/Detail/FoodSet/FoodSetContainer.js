import React, {useEffect, useState} from 'react';
import FoodSetPresenter from './FoodSetPresenter';

const FoodSetContainer = () => {
  const [membercount, setMembercount] = useState(0);
  const [itemscount, setItemscount] = useState(0);
  const [foodSet, setFoodSet] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(async () => {
    let data = await fetch('/api/detail/foodSet');
    let foodSet = JSON.parse(data._bodyInit).foodSet;
    let items = JSON.parse(data._bodyInit).items;
    setFoodSet(foodSet);
    setItems(items);
  }, []);

  const onIncreaseMember = () => {
    setMembercount(membercount + 1);
  };

  const onDecreaseMember = () => {
    setMembercount(Math.max(0, membercount - 1)); // 인원수는 음수가 되면 안됨
  };

  const onIncreaseItems = () => {
    setItemscount(itemscount + 1);
  };

  const onDecreaseItems = () => {
    setItemscount(Math.max(0, itemscount - 1));
  };

  return (
    <FoodSetPresenter
      foodSet={foodSet}
      membercount={membercount}
      items={items}
      itemscount={itemscount}
      onIncreaseMember={onIncreaseMember}
      onDecreaseMember={onDecreaseMember}
      onIncreaseItems={onIncreaseItems}
      onDecreaseItems={onDecreaseItems}
    />
  );
};

export default FoodSetContainer;
