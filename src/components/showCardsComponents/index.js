import { useTranslation } from 'react-i18next';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { CONSTSTYLES } from '../../constants/globalStyles';
import { fetchDetails } from '../../store/actions';
import { styles } from './styles';

const ShowCardsComponent = ({ navigation, data, type }) => {
    const [t, i18n] = useTranslation();
    const dispatch = useDispatch();
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.touchable}
                onPress={() => {
                    fetchDetails({
                        Id: item.id,
                        dispatch: dispatch,
                        language: t('Language'),
                        type: type,
                    });
                    navigation.navigate({
                        name: 'CardSelected',
                    });
                }}>
                <View>
                    <Image
                        style={styles.movieImage}
                        source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
                    />
                    <Text style={[CONSTSTYLES.text, styles.text]} numberOfLines={10}>
                        {item.title === undefined ? item.name : item.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };
    return data === undefined ? null : (
        <View style={styles.ListContainer}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default ShowCardsComponent;
