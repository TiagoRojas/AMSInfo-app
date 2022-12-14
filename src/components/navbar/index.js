import { View, Text, TouchableHighlight } from 'react-native';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';
import { bgColorSecondary } from '../../constants/globalStyles';
const Navbar = ({ navigation }) => {
    const [t, i18n] = useTranslation();
    return (
        <View style={styles.container}>
            <TouchableHighlight
                style={styles.Button}
                onPress={() => navigation.navigate('Home')}
                activeOpacity={0.7}
                underlayColor={bgColorSecondary()}>
                <Text style={styles.Text}>{t('HomeBtn')}</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.Button}
                onPress={() => navigation.navigate('Movies')}
                activeOpacity={0.7}
                underlayColor={bgColorSecondary()}>
                <Text style={styles.Text}>{t('MovieBtn')}</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.Button}
                onPress={() => i18n.changeLanguage('en')}
                activeOpacity={0.7}
                underlayColor={bgColorSecondary()}>
                <Text style={styles.Text}>English</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.Button}
                onPress={() => i18n.changeLanguage('es')}
                activeOpacity={0.7}
                underlayColor={bgColorSecondary()}>
                <Text style={styles.Text}>Español</Text>
            </TouchableHighlight>
        </View>
    );
};

export default Navbar;
// {t('SerieBtn')}
// {t('AnimeBtn')}
