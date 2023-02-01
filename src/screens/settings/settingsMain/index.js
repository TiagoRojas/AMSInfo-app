import { useTranslation } from 'react-i18next';
import { View, StatusBar, Text, Button } from 'react-native';
import { Header, SelectLanguage, SelectTheme } from '../../../components';
import { CONSTSTYLES } from '../../../constants/globalStyles';
import { styles } from './styles';
import { CustomStatusBar } from '../../../constants/statusBarCustom';
import { fetchDataBase } from '../../../db';
import { getTheme } from '../../../store/selectors';
import { fetchAppConfig } from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
const SettingsMain = ({ navigation }) => {
    const [t, i18n] = useTranslation();
    const dispatch = useDispatch();

    return (
        <CustomStatusBar style={CONSTSTYLES.AndroidSafeArea}>
            <Header navigation={navigation} title={t('SettingsBtn')} />
            <View style={[CONSTSTYLES.mainContainer, styles.mainContainer]}>
                <SelectLanguage text={t('SelectLanguage')} />

                <View style={styles.settingContainer}>
                    <Text style={[CONSTSTYLES.text]}>{t('SelectTheme')}</Text>
                    <SelectTheme />
                </View>
            </View>
        </CustomStatusBar>
    );
};
export default SettingsMain;
