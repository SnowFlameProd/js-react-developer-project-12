import {Button, Form} from "react-bootstrap";
import { ArrowRightSquare } from 'react-bootstrap-icons';
import {useFormik} from "formik";
import {sendLoginData} from "../../functions/manageData";
import routes from "../../routes/routes";
import {AxiosError} from "axios";
import {useTranslation} from "react-i18next";
import {useRef} from "react";

const MessageForm = () => {
    const { t } = useTranslation();
    const inputRef = useRef();

    const formik = useFormik({
        initialValues: {
            body: '',
        },
        onSubmit: async (values, { setSubmitting }) => {
            console.log(values);
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit} className="border rounded-2">
            <div className="input-group has-validation">
                <Form.Control
                    name="body"
                    ref={inputRef}
                    className="border-0 p-2 form-control"
                    placeholder={t('form.enterMessage')}
                    onChange={formik.handleChange}
                    value={formik.values.body}
                />
                <Button type="submit" variant="group-vertical border-0 border-start">
                    <ArrowRightSquare/>
                </Button>
            </div>
        </Form>
    );
}

export default MessageForm;