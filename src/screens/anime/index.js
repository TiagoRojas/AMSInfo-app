import { Header } from '../../components';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { CustomStatusBar } from '../../constants/statusBarCustom';
const Anime = ({ navigation }) => {
    const dispatch = useDispatch();
    const [t, i18n] = useTranslation();
    return (
        <CustomStatusBar>
            <Header navigation={navigation} title={t('AnimeBtn')} />
        </CustomStatusBar>
    );
};

export default Anime;
