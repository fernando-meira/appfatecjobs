import React from 'react';
import { View, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {
  widthPercentageToDP as ww,
  heightPercentageToDP as wh,
} from 'react-native-responsive-screen';

import * as S from './styles';

const Dashboard: React.FC = () => {
  const batata = [
    {
      title: 'First',
    },
    {
      title: 'Second',
    },
    {
      title: 'Thrid',
    },
  ];

  const renderItems = ({ item, index }) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <S.Container>
      <Carousel
        ref={null}
        data={batata}
        itemWidth={wh('32')}
        renderItem={renderItems}
        sliderWidth={ww('100%')}
      />
    </S.Container>
  );
};

export default Dashboard;
