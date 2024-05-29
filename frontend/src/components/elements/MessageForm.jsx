import {Button, Form} from "react-bootstrap";
import { ArrowRightSquare } from 'react-bootstrap-icons';
import { toast } from 'react-toastify';
import {useFormik} from "formik";
import {useTranslation} from "react-i18next";
import {useRef, useState} from "react";
import {useSelector} from "react-redux";
import {addMessage} from "../../functions/manageData";

const MessageForm = () => {
    const { t } = useTranslation();
    const inputRef = useRef();
    const [isSending, setIsSending] = useState(false);
    const currentChannelId = useSelector((state) => state.ui.currentChannelId);
    const { username, token } = JSON.parse(localStorage.getItem('user'));

    const formik = useFormik({
        initialValues: {
            body: '',
        },
        onSubmit: async (values, { setSubmitting }) => {
            if (!values.body) {
                return;
            }
            setIsSending(true);
            try {
                await addMessage({body: values.body, channelId: currentChannelId, username}, token);
                formik.resetForm();
                setIsSending(false);
            } catch (error) {
                setSubmitting(false);
                console.log(error);
                toast.error(t('error.badConnect'));
            }
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
                    disabled={isSending}
                />
                <Button type="submit" variant="group-vertical border-0 border-start">
                    <ArrowRightSquare/>
                </Button>
            </div>
        </Form>
    );
}

export default MessageForm;