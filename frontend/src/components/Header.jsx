import {useTranslation} from "react-i18next";
import {CardLink} from "react-bootstrap";
import routes from "../routes/routes";

const Header = () => {
    const { t } = useTranslation();

    return (
        <>
            <nav className="bg-white w-100 py-3 shadow-sm">
                <div className="container">
                    <CardLink className="fw-bold h5 mb-0 text-decoration-none" href={routes.root}>{t('header.mainTitle')}</CardLink>
                </div>
            </nav>
        </>
    );
};

export default Header;