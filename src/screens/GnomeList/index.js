import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Pressable,
  Alert,
  Modal,
} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Avatar } from "react-native-elements";
import SwipeableFlatList from 'react-native-swipeable-list';

import dummyData from '../com/dummyData.json';
import SweetAlert from 'react-native-sweet-alert';


const darkColors = {
  background: '#121212',
  primary: '#BB86FC',
  primary2: '#3700b3',
  secondary: '#03DAC6',
  onBackground: '#FFFFFF',
  error: '#CF6679',
};

const colorEmphasis = {
  high: 0.87,
  medium: 0.6,
  disabled: 0.38,
};

const extractItemKey = item => {
  return item.id.toString();
};

const Item = ({ item, backgroundColor, textColor, deleteItem }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
     {modalVisible&&( <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Card

        >
          <Card.Title>{item.name}</Card.Title>
          <Card.Divider />
            <Text style={{ marginBottom: 10 }}>
              The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <Button
              onPress={() => setModalVisible(!modalVisible)}
              icon={<Icon name='code' color='#ffffff' />}
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
              title='CLOSE' />
        </Card>
      </Modal>)}

      <View style={styles.item}  >
        <Avatar
          size="small"
          rounded
          title="MT"
          onPress={() => setModalVisible(!modalVisible)}
          activeOpacity={0.7}
          // source={item.thumbnail}
        />
        <View style={styles.messageContainer}>
          <Text onPress={() => setModalVisible(true)} style={styles.name} numberOfLines={1}>
            {item.name}
          </Text>
        </View>
      </View>
      <View />

    </>
  );
};

function renderItemSeparator() {
  return <View style={styles.itemSeparator} />;
}

const App = () => {
  const [data, setData] = useState(dummyData.Brastlewark);

  const deleteItem = itemId => {
    // ! Please don't do something like this in production. Use proper state management.
    const newState = [...data];
    const filteredState = newState.filter(item => item.id !== itemId);
    return setData(filteredState);
  };

const swal = item =>{

  SweetAlert.showAlertWithOptions({
    title: 'hola',
    subTitle: '',
    confirmButtonTitle: 'OK',
    confirmButtonColor: '#000',
    otherButtonTitle: 'Cancel',
    otherButtonColor: '#dedede',
    style: 'success',
    cancellable: true
  },
    callback => console.log('callback'));

}

  const archiveItem = itemId => {
    Alert.alert(
      'DISHONESTY ALERT', 
      "Not gonna Snooze it. We're actually are gonna just delete it.",
      [
        {
          text: 'Just delete it?',
          onPress: () => deleteItem(itemId),
          style: 'destructive',
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );
  };

  const snoozeItem = itemId => {
    Alert.alert(
      'DISHONESTY ALERT', 
      "Not gonna Snooze it. We're actually are gonna just delete it.",
      [
        {
          text: 'Just delete it?',
          onPress: () => deleteItem(itemId),
          style: 'destructive',
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );
  };

  const QuickActions = (index, qaItem) => {
    return (
      <View style={styles.qaContainer}>
        <View style={[styles.button, styles.button1]}>
          <Pressable onPress={() => swal(qaItem.id)}>
            <Text style={[styles.buttonText, styles.button1Text]}>Archive</Text>
          </Pressable>
        </View>
        <View style={[styles.button, styles.button2]}>
          <Pressable onPress={() => snoozeItem(qaItem.id)}>
            <Text style={[styles.buttonText, styles.button2Text]}>Snooze</Text>
          </Pressable>
        </View>
        <View style={[styles.button, styles.button3]}>
          <Pressable onPress={() => deleteItem(qaItem.id)}>
            <Text style={[styles.buttonText, styles.button3Text]}>Delete</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>MYGNOMELIST</Text>
        </View>
        <SwipeableFlatList
          keyExtractor={extractItemKey}
          data={data}
          renderItem={({ item }) => (
            <Item item={item} deleteItem={() => deleteItem} />
          )}
          maxSwipeDistance={240}
          renderQuickActions={({ index, item }) => QuickActions(index, item)}
          contentContainerStyle={styles.contentContainerStyle}
          shouldBounceOnMount={true}
          ItemSeparatorComponent={renderItemSeparator}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
  },
  headerContainer: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '800',
    color: darkColors.onBackground,
    opacity: colorEmphasis.high,
  },
  item: {
    backgroundColor: '#121212',
    height: 80,
    flexDirection: 'row',
    padding: 10,
  },
  messageContainer: {
    backgroundColor: darkColors.backgroundColor,
    maxWidth: 300,
  },
  name: {
    fontSize: 16,
    color: darkColors.primary,
    opacity: colorEmphasis.high,
    fontWeight: '800',
  },
  subject: {
    fontSize: 14,
    color: darkColors.onBackground,
    opacity: colorEmphasis.high,
    fontWeight: 'bold',
    textShadowColor: darkColors.secondary,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  text: {
    fontSize: 10,
    color: darkColors.onBackground,
    opacity: colorEmphasis.medium,
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: darkColors.onBackground,
    opacity: colorEmphasis.high,
    borderColor: darkColors.primary,
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 7,
    alignSelf: 'center',
    shadowColor: darkColors.secondary,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    shadowOpacity: colorEmphasis.high,
  },
  itemSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: darkColors.onBackground,
    opacity: colorEmphasis.medium,
  },
  qaContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    opacity: colorEmphasis.high,
  },
  button1Text: {
    color: darkColors.primary,
  },
  button2Text: {
    color: darkColors.secondary,
  },
  button3Text: {
    color: darkColors.error,
  },
  contentContainerStyle: {
    flexGrow: 1,
    backgroundColor: darkColors.backgroundColor,
  },
});

export default App;