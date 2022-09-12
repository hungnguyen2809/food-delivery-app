import React, {useRef, useState} from 'react';
import {FlatList, StatusBar, Text, TouchableOpacity, View, ViewToken} from 'react-native';
import {Separator, WelcomeCard} from 'src/components';
import {Colors, General} from 'src/constants';
import {DeviceUtils} from 'src/utils';
import {styles} from './styles';

const pageStyle = (isActive: boolean) =>
  isActive ? styles.pageItem : {...styles.pageItem, backgroundColor: Colors.DEFAULT_GREY};

const Pagination: React.FC<{activeIndex: number}> = ({activeIndex}) => {
  return (
    <View style={styles.pageContainer}>
      {General.WELCOME_CONTENTS.map((_, index) => (
        <View key={index} style={pageStyle(activeIndex === index)} />
      ))}
    </View>
  );
};

const WellcomeScreen: React.FC = () => {
  const [activeWelcome, setActiveWelcome] = useState<number>(0);

  const welcomeListRef = useRef<FlatList>(null);
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
  const onViewRef = useRef(({changed}: {changed: ViewToken[]}) => {
    setActiveWelcome(changed[0]?.index || 0);
  });

  const onNextPage = () => {
    welcomeListRef.current?.scrollToIndex({
      index:
        activeWelcome < General.WELCOME_CONTENTS.length - 1 ? activeWelcome + 1 : activeWelcome,
    });
  };

  const onSkipPage = () => {
    welcomeListRef.current?.scrollToEnd();
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="dark-content" backgroundColor={Colors.DEFAULT_WHITE} />

      <Separator height={StatusBar.currentHeight} />
      <Separator height={DeviceUtils.setHeight(8)} />

      <View style={styles.welcomeListContainer}>
        <FlatList
          ref={welcomeListRef}
          horizontal
          pagingEnabled
          overScrollMode="never"
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewRef.current}
          showsHorizontalScrollIndicator={false}
          data={General.WELCOME_CONTENTS}
          keyExtractor={(item) => item.key}
          renderItem={({item}) => <WelcomeCard {...item} />}
        />
      </View>

      <Separator height={DeviceUtils.setHeight(8)} />
      <Pagination activeIndex={activeWelcome} />
      <Separator height={DeviceUtils.setHeight(8)} />

      {activeWelcome === General.WELCOME_CONTENTS.length - 1 ? (
        <TouchableOpacity style={styles.gettingStartedBtn} activeOpacity={0.8}>
          <Text style={styles.gettingStartedText}>Get Started</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.btnContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onSkipPage}
            style={{marginLeft: DeviceUtils.scale(10)}}
          >
            <Text style={styles.buttonText}>SKIP</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={onNextPage}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default WellcomeScreen;
