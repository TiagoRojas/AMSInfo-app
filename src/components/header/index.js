import { View, Text, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { CONSTSTYLES } from '../../constants/globalStyles';

import { styles } from './styles';
import { isUserImage } from '../../constants/userImage';
const Header = ({ navigation, title }) => {
    return (
        <View style={CONSTSTYLES.headerContainer}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image style={styles.searchIcon} source={isUserImage()} />
            </TouchableOpacity>
            <Text style={CONSTSTYLES.textHeader}>{title}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <Image style={styles.searchIcon} source={require('../../../assets/lupa.png')} />
            </TouchableOpacity>
        </View>
    );
};

export default Header;
