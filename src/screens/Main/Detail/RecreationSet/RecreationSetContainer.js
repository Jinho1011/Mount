import React, {useState, useEffect} from 'react';
import {getDetail} from '../../../../api/api';
import RecreationSetPresenter from './RecreationSetPresenter';

const RecreationSetContainer = ({route}) => {
  const [state, setState] = useState({
    memberCnt: 1,
    teamCnt: 1,
    recSet: [],
    items: [],
  });

  useEffect(() => {
    const init = async () => {
      let data = await getDetail('recSets', route.params?.id);
      let recSet = data.recSet;
      let items = recSet.items;

      items.map(item => {
        item.count = 1;
        return item;
      });

      setState(prev => ({
        ...prev,
        recSet,
        items,
      }));
    };
    init();
  }, [route.params?.id]);

  return (
    <>
      <RecreationSetPresenter state={state} setState={setState} />
    </>
  );
};

// const state = {
//   items: [
//     {
//       count: 1,
//       description: '4인(800g)',
//       id: 1,
//       name: '가나다라마바사',
//       price: 16000,
//     },
//     {
//       count: 1,
//       description: '4인(800g)',
//       id: 2,
//       name: '가나다라마바사',
//       price: 17000,
//     },
//     {
//       count: 1,
//       description: '4인(800g)',
//       id: 3,
//       name: '가나다라마바사',
//       price: 18000,
//     },
//   ],
//   memberCnt: 1,
//   recSet: {
//     caution: '주의사항입니다',
//     id: '1',
//     img: 'https://dummyimage.com/600x253/000/fff',
//     items: [[Object], [Object], [Object]],
//     like: 22,
//     subtitle: '세트설명어쩌구저쩌구어쩌..',
//     title: '제목몇글자들어가나요',
//   },
//   teamCnt: 0,
// };

export default RecreationSetContainer;
