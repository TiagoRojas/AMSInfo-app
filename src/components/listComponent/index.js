import { FlashList } from '@shopify/flash-list';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { CONSTSTYLES } from '../../constants/globalStyles';
import { fetchDetails, fetchMovieData } from '../../store/actions';
import { styles } from './styles';

const ListComponent = ({ navigation, data }) => {
    const [t, i18n] = useTranslation();
    const [Page, setPage] = useState(2);
    const dispatch = useDispatch();

    const onHandleEnd = () => {
        setPage(Page + 1);
        fetchMovieData({ page: Page, language: t('Language'), dispatch });
    };
    const renderItem = ({ item }) => {
        return (
            <TouchableHighlight
                onPress={() => {
                    fetchDetails({
                        Id: item.id,
                        dispatch: dispatch,
                        language: t('Language'),
                        type: 'movie',
                    });
                    navigation.navigate('MovieSelected');
                }}>
                <View style={styles.movieContainer}>
                    <Image
                        style={styles.movieImage}
                        source={
                            !item.poster_path
                                ? require('../../../assets/imageComingSoon.png')
                                : {
                                      uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                                  }
                        }
                    />
                    <Text style={[CONSTSTYLES.text, styles.movieTitle]}>{item.title}</Text>
                </View>
            </TouchableHighlight>
        );
    };

    return data === undefined ? null : (
        <FlashList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => 'key' + index.toString()}
            numColumns={2}
            estimatedItemSize={200}
            onEndReached={() => onHandleEnd()}
            onEndReachedThreshold={3}
            showsHorizontalScrollIndicator={false}
        />
    );
};

export default ListComponent;
