import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import { CONSTSTYLES } from '../../constants/globalStyles';
import { Header, ShowCardsComponent } from '../../components';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getIsDataFetched, getTopRatedMovies, getTopRatedSeries } from '../../store/selectors';
import { CustomStatusBar } from '../../constants/statusBarCustom';
import { styles } from './styles';
import { fetchTopMovies } from '../../store/actions';
import { useEffect } from 'react';
// import { getTopRatedSeries } from '../../store/selectors';
const Home = ({ navigation }) => {
    const [t, i18n] = useTranslation();
    const isDataFetched = useSelector(getIsDataFetched);
    const dataTopRatedSeries = useSelector(getTopRatedSeries);
    const dataTopRatedMovies = useSelector(getTopRatedMovies);
    const dispatch = useDispatch();
    useEffect(() => {
        fetchTopMovies({ dispatch: dispatch, language: t('Language') });
    }, [isDataFetched]);

    return !isDataFetched ? (
        <View style={CONSTSTYLES.mainContainer}>
            <View style={styles.indicatorContainer}>
                <ActivityIndicator size="large" />
            </View>
        </View>
    ) : (
        <CustomStatusBar>
            <Header navigation={navigation} title={t('HomeBtn')} />
            <ScrollView>
                <View style={styles.SectionContainer}>
                    <View style={styles.SectionTextContainer}>
                        <Text style={[CONSTSTYLES.textBold, styles.SectionText]}>{t('Movie')}</Text>
                    </View>
                    <View style={styles.topRatedContainer}>
                        <Text style={[CONSTSTYLES.textSection, styles.topRated]}>
                            {t('topRated')}:
                        </Text>
                        <Text
                            style={[CONSTSTYLES.text, styles.viewMore]}
                            onPress={() => navigation.navigate('Movies')}>
                            {t('ViewMore')}
                        </Text>
                    </View>
                    <ShowCardsComponent
                        navigation={navigation}
                        data={dataTopRatedMovies}
                        type="movie"
                    />
                </View>
                <View style={styles.SectionContainer}>
                    <View style={styles.SectionTextContainer}>
                        <Text style={[CONSTSTYLES.textBold, styles.SectionText]}>{t('Serie')}</Text>
                    </View>
                    <View style={styles.topRatedContainer}>
                        <Text style={[CONSTSTYLES.textSection, styles.topRated]}>
                            {t('topRated')}:
                        </Text>
                        <Text
                            style={[CONSTSTYLES.text, styles.viewMore]}
                            onPress={() => navigation.navigate('Series')}>
                            {t('ViewMore')}
                        </Text>
                    </View>
                    <ShowCardsComponent
                        navigation={navigation}
                        data={dataTopRatedSeries}
                        type="tv"
                    />
                </View>
            </ScrollView>
        </CustomStatusBar>
    );
};
export default Home;
