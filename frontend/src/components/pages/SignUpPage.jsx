import {Card, Container, Row} from "react-bootstrap";
import logo from "../../assets/img/signup-bg.jpg";
import {useTranslation} from "react-i18next";
import SignUpForm from "../forms/SignUpForm";

const SignUpPage = () => {
    const { t } = useTranslation();

    return (
        <Container fluid className="h-100">
            <Row className="justify-content-center align-items-center h-100">
                <Card className="col-12 col-md-8 col-xxl-6">
                    <Card.Body className="row p-5">
                        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                            <img className="rounded-circle" src={logo} alt=""/>
                        </div>
                        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                            <SignUpForm />
                        </div>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
};

export default SignUpPage;