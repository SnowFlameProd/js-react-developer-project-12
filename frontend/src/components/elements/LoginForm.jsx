import { Formik, Form, Field } from 'formik';

const LoginForm = () => {
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
                    <Form>
                        <div className="form-group">
                            <label htmlFor="email">Ваш ник</label>
                            <Field
                                name="email"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Пароль</label>
                            <Field
                                type="password"
                                name="password"
                                className="form-control"
                            />
                        </div>
                        <button type="submit">Войти</button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default LoginForm;