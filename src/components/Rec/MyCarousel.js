import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';

// const ENTRIES1 = [
//   {
//     illustration: 'https://i.imgur.com/UYiroysl.jpg',
//   },
//   {
//     illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
//   },
//   {
//     illustration: 'https://i.imgur.com/MABUbpDl.jpg',
//   },
//   {
//     illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
//   },
//   {
//     illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
//   },
// ];

const {width: screenWidth} = Dimensions.get('window');

const MyCarousel = ({state, setState}) => {
  const ENTRIES1 = state?.recSingle?.guideImages;
  console.log(ENTRIES1);
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, [ENTRIES1]);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goForward} />
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});
