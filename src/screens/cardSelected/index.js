import { useTranslation } from 'react-i18next';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { useSelector } from 'react-redux';
import { CustomStatusBar } from '../../constants/statusBarCustom';
import { getSelectedMovie } from '../../store/selectors';
import { styles } from './styles';
import StarRating from 'react-native-star-rating-widget';
import { CONSTSTYLES } from '../../constants/globalStyles';
import { GenresContainer } from '../../components';
const CardSelected = ({ route, navigation }) => {
    const [t, i18n] = useTranslation();
    const data = useSelector(getSelectedMovie);
    return data === undefined ? null : (
        <CustomStatusBar>
            <TouchableHighlight
                style={styles.goBackContainer}
                onPress={() => {
                    console.log(navigation.getState());
                    navigation.goBack();
                }}>
                <View style={styles.goBackContainer}>
                    <Image
                        source={require('../../../assets/arrow.png')}
                        style={styles.goBackImage}
                    />
                    <Text>{t('goBack')}</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.movieContainer}>
                <Text style={styles.title}>{data.title}</Text>
                <View style={styles.movieInfo}>
                    <View>
                        <Image
                            source={{ uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}` }}
                            style={styles.poster}
                        />
                    </View>
                    <GenresContainer data={data.genres} />
                </View>
                <Text style={styles.description}>{data.overview}</Text>
                <View style={styles.ratingContainer}>
                    <Text style={[CONSTSTYLES.textBold, styles.ratingText]}>{t('Rating')}:</Text>
                    <StarRating
                        rating={data.vote_average}
                        maxStars={10}
                        starSize={15}
                        style={styles.ratingText}
                    />
                </View>
            </View>
        </CustomStatusBar>
    );
};
export default CardSelected;
