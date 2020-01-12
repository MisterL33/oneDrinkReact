import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, ToucheableOpacity, TouchableHighlight, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../styles/SliderEntry';
import SliderEntry from '../components/SliderEntry';
import styles, { colors } from '../styles/SliderColors';
import {HeaderButtons, Item, HeaderButton } from 'react-navigation-header-buttons';
import { FontAwesome } from '@expo/vector-icons';
import {ENTRIES1} from '../static/entries';
import modalStyle from '../styles/modal';
import { connect } from 'react-redux';
import store from "../redux/store/index";
import { setModalVisibility } from '../redux/actions';
import {SCLAlert,SCLAlertButton} from 'react-native-scl-alert';
import icon from '../assets/images/onedrink.png';
import SafeAreaView from 'react-native-safe-area-view';

const AwesomeIconsHeaderButton = passMeFurther => (
  <HeaderButton {...passMeFurther} IconComponent={FontAwesome} iconSize={23} color="white" />
);


const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;



class HomeScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            isModalVisible: false,
        };
    }

    static navigationOptions = ({ navigation }) => {
      return {
        headerRight: (
          <HeaderButtons HeaderButtonComponent={AwesomeIconsHeaderButton}>
            <Item title="search" iconName="user" onPress={() => navigation.navigate('Profile')} />
            <Item title="Profil" onPress={() => navigation.navigate('Profile')} />
          </HeaderButtons>
        ),
      };
    };

    get gradient () {
        return (
            <LinearGradient
              colors={[colors.background1, colors.background2]}
              startPoint={{ x: 1, y: 0 }}
              endPoint={{ x: 0, y: 1 }}
              style={styles.gradient}
            />
        );
    }

    render () {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <StatusBar
                      translucent={true}
                      backgroundColor={'rgba(0, 0, 0, 0.3)'}
                      barStyle={'light-content'}
                    />
                    { this.gradient }
                    <ScrollView
                      style={styles.scrollview}
                    >
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
const mapStateToProps = state => ({
  isModalVisible: state.isModalVisible
})

export default connect(
  mapStateToProps,
)(HomeScreen)