import {useTranslation} from "react-i18next";
import {Container, Navbar} from "react-bootstrap";
import routes from "../routes/routes";

const Header = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navbar className="shadow-sm navbar">
                <Container>
                    <Navbar.Brand className="logo" href={routes.root}>{t('header.mainTitle')}</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;