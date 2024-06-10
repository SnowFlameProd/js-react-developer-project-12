import {
  Card, Container, Row,
} from 'react-bootstrap';

import { useTranslation } from 'react-i18next';
import LoginForm from '../forms/LoginForm';
import routes from '../../routes/routes';

import logo from '../../assets/img/login-bg.jpeg';

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <Container fluid className="h-100">
      <Row className="justify-content-center align-items-center h-100">
        <Card className="col-12 col-md-8 col-xxl-6">
          <Card.Body className="row p-5">
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
              <img className="rounded-circle" src={logo} alt="" />
            </div>
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
              <LoginForm />
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="text-center">
              <span className="me-3">{t('pages.login.noAccount')}</span>
              <Card.Link href={routes.signup}>{t('pages.login.signUp')}</Card.Link>
            </div>
          </Card.Footer>
        </Card>
      </Row>
    </Container>
  );
};

export default LoginPage;
