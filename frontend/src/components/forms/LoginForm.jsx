import {
    Button, Form
} from 'react-bootstrap';
import {AxiosError} from "axios";
import {useFormik} from 'formik';
import {useTranslation} from "react-i18next";
import {useEffect, useRef, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import {sendLoginData} from "../../functions/manageData";
import routes from "../../routes/routes";

const LoginForm = () => {
    const { t } = useTranslation();
    const { logIn } = useAuth();
    const inputRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const [authFailed, setAuthFailed] = useState(false);

    useEffect(() => {
        inputRef.current.focus();
    }, [inputRef]);

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: async (values, { setSubmitting }) => {
            setAuthFailed(false);
            try {
                const {data} = await sendLoginData(values);
                localStorage.setItem('user', JSON.stringify(data));
                logIn(data);
                const { from } = location.state || { from: { pathname: routes.root }};
                navigate(from);
            } catch (error) {
                setSubmitting(false);
                if (error instanceof AxiosError && error.response.status === 401) {
                    setAuthFailed(true);
                    inputRef.current.select();
                    return;
                }
                throw error;
            }
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit} className="w-100">
            <h1 className="text-center mb-4">{t('form.signInBtn')}</h1>
            <div className="form-group mb-3">
                <Form.Control
                    name="username"
                    ref={inputRef}
                    className="form-control"
                    placeholder={t('form.login')}
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    isInvalid={authFailed}
                    required
                />
            </div>
            <div className="form-group mb-4">
                <Form.Control
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder={t('form.password')}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    isInvalid={authFailed}
                    required
                />
                <Form.Control.Feedback type="invalid" className="mb-4">{t('error.loginFailed')}</Form.Control.Feedback>
            </div>
            <Button type="submit" variant="outline-primary" className="w-100">{t('form.signInBtn')}</Button>
        </Form>
    );
};

export default LoginForm;