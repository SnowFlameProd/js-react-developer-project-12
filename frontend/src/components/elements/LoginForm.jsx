import { Formik, Form, Field } from 'formik';
import {
    Button,
} from 'react-bootstrap';
import {useTranslation} from "react-i18next";

const LoginForm = () => {
    const { t } = useTranslation();

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={ (values) => {
                    console.log(values);
                }}
            >
                {() => (
                    <Form className="w-100">
                        <div className="form-group mb-3">
                            <label htmlFor="email">{t('form.nickname')}</label>
                            <Field
                                name="email"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="password">{t('form.password')}</label>
                            <Field
                                type="password"
                                name="password"
                                className="form-control"
                            />
                        </div>
                        <Button variant="outline-primary" className="w-100">{t('form.signInBtn')}</Button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default LoginForm;