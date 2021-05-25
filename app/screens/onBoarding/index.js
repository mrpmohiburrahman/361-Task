import React, { useState, useRef } from 'react';
import { View, Dimensions, TouchableOpacity, Image, SafeAreaView, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Button from './../../components/Button'
let deviceWidth = Math.round(Dimensions.get('window').width)
import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
const onBoarding = () => {
  const carousel = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0)
  const [textArray, setTextArray] = useState([{
    text1: "Hola! I am your assistant",
    text2: "To assist you all part of your body."
  },
  {
    text1: "Hola! I am your assistant 2",
    text2: "To assist you all part of your body.",
  },
  {
    text1: "Hola! I am your assistant 3",
    text2: "To assist you all part of your body.",
  },
  ])
  const [listView, setListView] = useState([
    { name: 'Track My Cycle' },
    { name: 'Track My Cycle' },
    { name: 'Track My Cycle' },
    { name: 'Track My Cycle' },
    { name: 'Track My Cycle' }
  ]);

  onPressedNext = () => {
    carousel.current.snapToNext();
    setActiveIndex(activeIndex + 1)
  }

  const pagination = () => {
    return (
      <Pagination
        dotsLength={textArray.length}
        activeDotIndex={activeIndex}
        containerStyle={{}}
        dotStyle={{
          width: 20,
          height: 4,
          backgroundColor: 'yellow'
        }}
        inactiveDotStyle={{
          width: 10,
          height: 10,
          borderRadius: 8,
          marginHorizontal: -7,
          backgroundColor: 'white'
        }}
        inactiveDotOpacity={0.7}
        inactiveDotScale={0.9}
      />
    );
  }

  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.listItem}>
        <Text style={styles.heading}>{item.text1}</Text>
        <Text style={[styles.description, { marginTop: 20 }]}>{item.text2}</Text>
        <Text style={styles.description}>{`Select what you bring here`}</Text>
      </View>
    )
  }
  const onPressedNextPage = () => {
  }
  const renderHorizontalItem = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        <Image style={styles.imageStyle} source={require('./../../assets/temp_person.png')} />
        <Text style={styles.listCarName}>{item.name}</Text>
        <Text style={[styles.description, { marginTop: 20 }]}>{'Lorem ipsum is a placeholder text commonly used to demonstrate visual.'}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.skipContainer}>
        {pagination()}
        <TouchableOpacity
          onPress={() => { onPressedNextPage() }}
          style={styles.skipTouch}>
          <Text style={styles.skipText}>{"Skip"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.carouselContainer}>
        <Carousel
          layout={"default"}
          ref={carousel}
          data={textArray}
          sliderWidth={deviceWidth}
          itemWidth={deviceWidth}
          // enableSnap={true}
          scrollEnabled={false}
          renderItem={_renderItem}
          onSnapToItem={index => setActiveIndex(index)}
        />
      </View>
      <View style={styles.listView}>
        <FlatList
          horizontal
          data={listView}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={renderHorizontalItem}
          ListHeaderComponent={() => (!listView.length ?
            <Text style={styles.emptyMessageStyle}>The list is empty</Text>
            : null)
          }
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text={'Continue'}
          clickAction={onPressedNext}
        />
      </View>
    </SafeAreaView>

  );
};
export default onBoarding;
