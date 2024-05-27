import {
    Card, Container, Row, Col,
} from 'react-bootstrap';

import { useTranslation } from 'react-i18next';
import LoginForm from '../elements/LoginForm';
import routes from '../../routes/routes';
import Header from "../Header";

const LoginPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <Container className="m-5">
                <Card>
                    <Card.Body>
                        <LoginForm />
                    </Card.Body>
                    <Card.Footer>
                        <div className="text-center">
                            <span className="me-3">Нет аккаунта?</span>
                            <Card.Link href={routes.signup}>Регистрация</Card.Link>
                        </div>
                    </Card.Footer>
                </Card>
            </Container>
        </>
    );
};

export default LoginPage;