import React, {useState} from 'react';
import FoodSetPresenter from './FoodSetPresenter';
import foodSet from '../../../../data/foodSet.json';

const FoodSetComponents = [
  {
    name: '상품이름이...',
    price: 16000,
  },
];

const FoodSetContainer = () => {
  const [membercount, setMembercount] = useState(0);
  const [componentscount, setComponentscount] = useState(0);

  const onIncreaseMember = () => {
    setMembercount(membercount + 1);
  };

  const onDecreaseMember = () => {
    setMembercount(Math.max(0, membercount - 1)); // 인원수는 음수가 되면 안됨
  };

  const onIncreaseComponents = () => {
    setComponentscount(componentscount + 1);
  };

  const onDecreaseComponents = () => {
    setComponentscount(Math.max(0, componentscount - 1));
  };

  return (
    <FoodSetPresenter
      FoodSetItems={foodSet.foodSetItems}
      FoodSetComponents={FoodSetComponents}
      membercount={membercount}
      componentscount={componentscount}
      onIncreaseMember={onIncreaseMember}
      onDecreaseMember={onDecreaseMember}
      onIncreaseComponents={onIncreaseComponents}
      onDecreaseComponents={onDecreaseComponents}
    />
  );
};

export default FoodSetContainer;
