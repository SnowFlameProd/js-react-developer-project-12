import {Button, Form} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import leoProfanity from 'leo-profanity';
import {useFormik} from "formik";
import * as yup from 'yup';
import {useEffect, useRef} from "react";
import {addChannel, editChannel} from "../../functions/manageData";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {selectors as channelsSelector} from "../../store/slices/channelsSlice";
import {actions as uiActions} from "../../store/slices/uiSlice";

const ChannelForm = ({channelName, mode = 'add'}) => {
    const { t } = useTranslation();
    const inputRef = useRef(null);
    const { token } = useSelector(state => state.auth);
    const { modal } = useSelector(state => state.ui);
    const dispatch = useDispatch();
    const channels = useSelector(channelsSelector.selectAll);
    const channelsNames = channels.map(({ name }) => name);

    const formik = useFormik({
        initialValues: {
            name: channelName,
        },
        validationSchema: yup.object().shape({
            name: yup.string()
                .required(t('error.required'))
                .min(3, t('error.limited'))
                .max(20, t('error.limited'))
                .notOneOf(channelsNames, t('error.notUnique')),
        }),
        onSubmit: async (values, { setSubmitting }) => {
            switch (mode) {
                case "add":
                    try {
                        await addChannel({ name: leoProfanity.clean(values.name, '*') }, token);
                        formik.resetForm();
                        dispatch(uiActions.closeModal());
                        toast.success(t('pages.main.addedSuccess'));
                    } catch (error) {
                        console.log(error);
                    }

                    break;
                case "edit":
                    try {
                        await editChannel({ name: leoProfanity.clean(values.name, '*') }, modal.extra.channelId, token);
                        formik.resetForm();
                        dispatch(uiActions.closeModal());
                        toast.success(t('pages.main.editedSuccess'));
                    } catch (error) {
                        console.log(error);
                    }

                    break;
                default:
                    break;
            }
        },
    });

    const handleClose = () => {
        dispatch(uiActions.closeModal());
    }

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Control
                name="name"
                ref={inputRef}
                className="mb-2 form-control"
                onChange={formik.handleChange}
                value={formik.values.name}
                isInvalid={formik.touched.name && formik.errors.name}
            />
            <Form.Control.Feedback type="invalid" className="mb-4">
                {formik.touched.name && formik.errors.name && (
                    <p>{formik.errors.name}</p>
                )}
            </Form.Control.Feedback>
            <div className="d-flex justify-content-end">
                <Button type="button" variant="secondary" className="me-2" onClick={handleClose}>
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