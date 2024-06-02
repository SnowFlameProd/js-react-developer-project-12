import {useTranslation} from "react-i18next";
import {Button, Container, Navbar} from "react-bootstrap";
import routes from "../routes/routes";
import useAuth from "../hooks/useAuth";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const { t } = useTranslation();
    const {loggedIn, logOut} = useAuth();

    return (
        <>
            <Navbar className="shadow-sm navbar">
                <Container>
                    <Navbar.Brand className="logo" href={routes.root}>{t('header.mainTitle')}</Navbar.Brand>

                    {loggedIn && <Button variant="primary" onClick={logOut}>{t('header.logout')}</Button>}
                </Container>

                <ToastContainer autoClose={5000} closeOnClick/>
            </Navbar>
        </>
    );
};

export default Header;