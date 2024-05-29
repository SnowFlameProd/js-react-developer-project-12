import {Button, Form} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {useRef, useState} from "react";

const ChannelForm = () => {
    const { t } = useTranslation();
    const inputRef = useRef();
    const [notUnique, setNotUnique] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
        },
        onSubmit: async (values, { setSubmitting }) => {

        },
    });

    return (
        <Form onSubmit={formik.handleSubmit} className="border rounded-2">
            <Form.Control
                name="name"
                ref={inputRef}
                className="mb-2 form-control"
                onChange={formik.handleChange}
                value={formik.values.body}
                isInvalid={notUnique}
                required
            />
            <Form.Control.Feedback type="invalid" className="mb-4">{t('error.notUnique')}</Form.Control.Feedback>
            <div className="d-flex justify-content-end">
                <Button type="button" variant="secondary" className="me-2">
                    {t('form.cancel')}
                </Button>
                <Button type="submit" variant="primary">
                    {t('form.send')}
                </Button>
            </div>
        </Form>
    );
}

export default ChannelForm;