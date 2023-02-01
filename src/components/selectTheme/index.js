import { View, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTranslation } from 'react-i18next';
import { CONSTSTYLES, textColor, test } from '../../constants/globalStyles';
import { fetchDataBase, replaceData } from '../../db';
import { useDispatch } from 'react-redux';
import { styles } from './styles';
const SelectTheme = () => {
    const [t, i18n] = useTranslation();
    const dispatch = useDispatch();
    const changeTheme = (itemValue) => {
        fetchDataBase()
            .then((res) => {
                replaceData({
                    language: res.rows._array[0].language,
                    theme: itemValue.toString(),
                });
            })
            .catch(() => console.warn('err'))
            .finally(() => console.warn('succeed'));
    };
    return (
        <View>
            <Picker
                mode="dropdown"
                onValueChange={(itemValue, index) => changeTheme(itemValue)}
                style={[CONSTSTYLES.text, styles.Picker]}
                dropdownIconColor={textColor()}>
                <Picker.Item label="" style={styles.Option} />
                <Picker.Item label={t('darkTheme')} value="dark-theme" style={styles.Option} />
                <Picker.Item label={t('lightTheme')} value="light-theme" style={styles.Option} />
            </Picker>
        </View>
    );
};

export default SelectTheme;
