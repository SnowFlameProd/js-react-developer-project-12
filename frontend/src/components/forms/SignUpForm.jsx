import {Button, Form} from "react-bootstrap";
import {useFormik} from "formik";
import {createNewUser} from "../../functions/manageData";
import {useTranslation} from "react-i18next";
import {useEffect, useRef, useState} from "react";
import * as yup from "yup";
import useAuth from "../../hooks/useAuth";
import routes from "../../routes/routes";
import {useLocation, useNavigate} from "react-router-dom";

const SignUpForm = () => {
    const { t } = useTranslation();
    const inputRef = useRef(null);
    const { logIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [registrationFailed, setRegistrationFailed] = useState(false);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            passwordConfirm: '',
        },
        validationSchema: yup.object().shape({
            username: yup.string()
                .required(t('error.required'))
                .min(3)
                .max(20),
            password: yup.string()
                .required(t('error.required'))
                .min(6, t('error.limited')),
            passwordConfirm: yup.string()
                .required(t('error.required'))
                .min(6, t('error.limited'))
                .oneOf([yup.ref('password')]),
        }),
        onSubmit: async ({username, password}, { setSubmitting }) => {
            setRegistrationFailed(false);
            try {
                const {data} = await createNewUser({username, password});
                localStorage.setItem('user', JSON.stringify(data));
                logIn(data);
                const { from } = location.state || { from: { pathname: routes.root }};
                navigate(from);
            } catch (error) {
                if (error.isAxiosError && error.response.status === 409) {
                    setRegistrationFailed(true);
                    inputRef.current.select();
                }
                throw error;
            }
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit} className="w-100">
            <h1 className="text-center mb-4">{t('form.signUp')}</h1>

            <div className="form-group mb-3">
                <Form.Control
                    name="username"
                    ref={inputRef}
                    className="form-control"
                    placeholder={t('form.username')}
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    isInvalid={(formik.touched.username && formik.errors.username) || registrationFailed}
                />
                <Form.Control.Feedback type="invalid" className="mb-4">{!registrationFailed ? t('error.limited') : ''}</Form.Control.Feedback>
            </div>
            <div className="form-group mb-3">
                <Form.Control
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder={t('form.password')}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    isInvalid={(formik.touched.username && formik.errors.username) || registrationFailed}
                />
                <Form.Control.Feedback type="invalid" className="mb-4">{!registrationFailed ? t('error.limitedPassword') : ''}</Form.Control.Feedback>
            </div>
            <div className="form-group mb-4">
                <Form.Control
                    type="password"
                    name="passwordConfirm"
                    className="form-control"
                    placeholder={t('form.passwordConfirm')}
                    onChange={formik.handleChange}
                    value={formik.values.passwordConfirm}
                    isInvalid={(formik.touched.username && formik.errors.username) || registrationFailed}
                />
                <Form.Control.Feedback type="invalid" className="mb-4">{!registrationFailed ? t('error.passwordMatch') : t('error.signupFailed')}</Form.Control.Feedback>
            </div>
            <Button type="submit" variant="outline-primary" className="w-100">{t('form.signUpBtn')}</Button>
        </Form>
    );
};

export default SignUpForm;