import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { actions as uiActions } from '../../store/slices/uiSlice';
import { deleteChannel } from '../../functions/manageData';

const DeleteModalBody = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { modal } = useSelector((state) => state.ui);

  const handleClose = () => {
    dispatch(uiActions.closeModal());
  };

  const handleSubmit = async () => {
    try {
      const { data } = await deleteChannel(modal.extra.channelId, token);
      dispatch(uiActions.closeModal());
      toast.success(t('pages.main.deletedSuccess'));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <p className="lead">{t('pages.main.sure')}</p>
      <div className="d-flex justify-content-end">
        <Button onClick={handleClose} variant="secondary" type="button" className="me-2">{t('form.cancel')}</Button>
        <Button onClick={handleSubmit} variant="danger" type="submit">{t('form.delete')}</Button>
      </div>
    </>
  );
};

export default DeleteModalBody;
