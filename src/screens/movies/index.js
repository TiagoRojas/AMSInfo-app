import { useTranslation } from 'react-i18next';
import { ActivityIndicator, Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Header, ListComponent } from '../../components';
import { CONSTSTYLES } from '../../constants/globalStyles';
import { CustomStatusBar } from '../../constants/statusBarCustom';
import { getMovieData, getIsDataFetched } from '../../store/selectors';
import { styles } from './styles';
import { fetchMovieData } from '../../store/actions';
import { useEffect } from 'react';
const Movies = ({ navigation }) => {
    const [t, i18n] = useTranslation();
    const dispatch = useDispatch();
    const data = useSelector(getMovieData);
    const isDataFetched = useSelector(getIsDataFetched);
    // dispatch();
    useEffect(
        () => fetchMovieData({ page: 1, language: t('Language'), dispatch }),
        [isDataFetched]
    );
    return data.length === 0 ? (
        <View style={CONSTSTYLES.mainContainer}>
            <Header navigation={navigation} title={t('MovieBtn')} />
            <View>
                <ActivityIndicator size="large" />
            </View>
        </View>
    ) : (
        <CustomStatusBar>
            <Header navigation={navigation} title={t('MovieBtn')} />
            <ListComponent data={data} navigation={navigation} />
        </CustomStatusBar>
    );
};

export default Movies;
