import { FlatList, Text, View } from 'react-native';
import { CONSTSTYLES } from '../../constants/globalStyles';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';
const GenresContainer = ({ data }) => {
    const [t, i18n] = useTranslation();
    const renderItem = ({ item }) => {
        return (
            <View style={styles.genreContainer}>
                <Text style={[CONSTSTYLES.text, styles.genreName]}>{item.name}</Text>
            </View>
        );
    };
    return (
        <View style={styles.genreContainer}>
            <Text style={[CONSTSTYLES.textBold, styles.genreText]}>{t('Genres')}:</Text>
            <FlatList
                horizontal
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};
export default GenresContainer;
