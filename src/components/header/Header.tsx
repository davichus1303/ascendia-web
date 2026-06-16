import { HEADER_CONSTANTS } from '../../constants/header.constants';
import { FaArrowLeft } from 'react-icons/fa';

interface HeaderProps {
    language: string;
    setLanguage: (language: string) => void;
}
const backUrl = "/";

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
    const changeLanguage = () =>{
        const newLanguage = language === HEADER_CONSTANTS.ES_LOCALE ? HEADER_CONSTANTS.EN_LOCALE : HEADER_CONSTANTS.ES_LOCALE;
        localStorage.setItem(HEADER_CONSTANTS.LANGUAGE_KEY, newLanguage);
        setLanguage(newLanguage);
    }
  return (
    <div>
        {
            window.location.pathname !== backUrl && (
                <div className='back-button'
                onClick={() => window.location.href = backUrl}>
                    <FaArrowLeft />
                </div>
            )
        }
        <div className='language-selector'>
            <span
                onClick={changeLanguage}
            >{language === HEADER_CONSTANTS.ES_LOCALE ? HEADER_CONSTANTS.MX_FLAG : HEADER_CONSTANTS.US_FLAG}</span>
        </div>
    </div>
  );
};

export default Header;
