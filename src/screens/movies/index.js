import { useTranslation } from 'react-i18next';
import { Header } from '../../components';
import { CustomStatusBar } from '../../constants/statusBarCustom';

const Movies = ({ navigation }) => {
    const [t, i18n] = useTranslation();
    return (
        <CustomStatusBar>
            <Header navigation={navigation} title={t('MovieBtn')} />
        </CustomStatusBar>
    );
};
export default Movies;
