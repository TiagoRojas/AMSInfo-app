import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Image,
    ActivityIndicator,
    ScrollView,
} from 'react-native';
import { CONSTSTYLES } from '../../constants/globalStyles';
import { Header } from '../../components';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../../store/selectors';
import { CustomStatusBar } from '../../constants/statusBarCustom';
import { styles } from './styles';

const Home = ({ navigation }) => {
    const [t, i18n] = useTranslation();
    const dispatch = useDispatch();
    const data = useSelector(getData);
    const renderItem = ({ item }) => {
        return (
            <View style={styles.movieContainer}>
                <TouchableOpacity onPress={() => null}>
                    <View>
                        <Image
                            style={styles.movieImage}
                            source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
                        />
                        <Text style={CONSTSTYLES.text}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    return data === undefined ? (
        <View style={CONSTSTYLES.mainContainer}>
            <Header navigation={navigation} title={t('HomeBtn')} />
            <View style={styles.IndicatorContainer}>
                <ActivityIndicator size="large" />
            </View>
        </View>
    ) : (
        <CustomStatusBar>
            <View style={CONSTSTYLES.mainContainer}>
                <Header navigation={navigation} title={t('HomeBtn')} />
                <Text style={[CONSTSTYLES.textSection, styles.topRated]}>{t('topRated')}:</Text>
                <ScrollView
                    horizontal
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        contentContainerStyle={styles.topRatedList}
                    />
                </ScrollView>
            </View>
        </CustomStatusBar>
    );
};
export default Home;
