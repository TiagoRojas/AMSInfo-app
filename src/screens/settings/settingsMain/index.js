import { useTranslation } from 'react-i18next';
import { View, StatusBar, Text } from 'react-native';
import { Header, SelectLanguage } from '../../../components';
import { CONSTSTYLES } from '../../../constants/globalStyles';
import { styles } from './styles';
import { CustomStatusBar } from '../../../constants/statusBarCustom';
const SettingsMain = ({ navigation }) => {
    const [t, i18n] = useTranslation();
    return (
        <CustomStatusBar style={CONSTSTYLES.AndroidSafeArea}>
            <StatusBar />
            <View style={CONSTSTYLES.mainContainer}>
                <Header navigation={navigation} title={t('SettingsBtn')} />
                <SelectLanguage />
            </View>
        </CustomStatusBar>
    );
};
export default SettingsMain;
