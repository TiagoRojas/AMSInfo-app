import { Button, View, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTranslation } from 'react-i18next';
import { CONSTSTYLES, textColor } from '../../constants/globalStyles';
import { styles } from './styles';
import { fetchDataBase, replaceData } from '../../db';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
const SelectLanguage = () => {
    const [t, i18n] = useTranslation();
    const dispatch = useDispatch();
    const changeLanguage = (itemValue) => {
        i18n.changeLanguage(itemValue);
        fetchDataBase().then((res) => {
            replaceData({
                language: itemValue.toString(),
                theme: res.rows._array[0].theme,
            }).finally(() => dispatch({ type: 'RESET_STATE' }));
        });
    };

    return (
        <View>
            <Picker
                mode="dropdown"
                onValueChange={(itemValue, index) => changeLanguage(itemValue)}
                style={[CONSTSTYLES.text, styles.Picker]}
                dropdownIconColor={textColor()}>
                <Picker.Item label={t('LanguageWord')} style={styles.Option} />
                <Picker.Item label={t('Spanish')} value="es-ES" style={styles.Option} />
                <Picker.Item label={t('English')} value="en-EN" style={styles.Option} />
            </Picker>
        </View>
    );
};

export default SelectLanguage;
