import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import {getData, USER_KEY} from '../../api/storage';

import {getIsLiked, getLikeCount, like, unlike} from '../../api/fav';
import {UnlikedSvg, LikedSvg} from '../assets';

const LikeWrapper = styled.View`
  flex: 1;
`;

const LikeView = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 13px;
  padding-left: 13px;
`;

const LikeCount = styled.Text`
  font-family: 'NotoSansKR-Regular';
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #8b8b8b;
  padding-left: 3px;
`;

const Lazy = styled.View`
  background-color: #e2f955;
`;

const Like = ({type, id}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [jwt, setJwt] = useState();
  const [isLiked, setIsLiekd] = useState();
  const [likeCount, setLikeCount] = useState();

  useEffect(() => {
    const init = async () => {
      const value = await getData(USER_KEY);
      const key = value.email === 'null' ? value.identifier : value.email;
      setJwt(key);
      const isLikedData = await getIsLiked(key, type, id);
      const likeData = await getLikeCount(type, id);
      setIsLiekd(isLikedData);
      setLikeCount(likeData);
      setIsLoaded(true);
    };
    init();
  }, []);

  const onPressLike = () => {
    if (isLiked) {
      unlike(jwt, type, id);
      setIsLiekd(false);
      setLikeCount(parseInt(likeCount) - 1);
    } else {
      like(jwt, type, id);
      setIsLiekd(true);
      setLikeCount(parseInt(likeCount) + 1);
    }
  };

  return (
    <LikeWrapper>
      {isLoaded ? (
        <LikeView onPress={onPressLike}>
          {isLiked ? (
            <LikedSvg width={24} height={20} />
          ) : (
            <UnlikedSvg width={24} height={20} />
          )}
          <LikeCount>{likeCount}</LikeCount>
        </LikeView>
      ) : (
        <Lazy />
      )}
    </LikeWrapper>
  );
};

export default Like;
