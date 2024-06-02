import {Modal} from "react-bootstrap";
import ChannelForm from "../forms/ChannelForm";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import { actions as uiActions } from '../../store/slices/uiSlice';
import DeleteModalBody from "./deleteModalBody";
import {selectors as channelsSelector} from "../../store/slices/channelsSlice";

const CustomModal = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {isOpened, type, extra} = useSelector((state) => state.ui.modal);
    const channels = useSelector(channelsSelector.selectAll);
    const channelName = channels.find(channel => channel.id === extra?.channelId )?.name;

    const getTitle = (type) => {
        switch (type) {
            case 'addChannel':
                return t('pages.main.addChannel');
            case 'deleteChannel':
                return t('pages.main.deleteChannel');
            case 'editChannel':
                return t('pages.main.editChannel');
            default:
                break;
        }
    }

    const renderModalContent = (type) => {
        switch (type) {
            case 'addChannel':
                return <ChannelForm channelName={''} mode='add'/>
            case 'deleteChannel':
                return <DeleteModalBody />
            case 'editChannel':
                return <ChannelForm channelName={channelName} mode='edit'/>
            default:
                break;
        }
    }

    const handleClose = () => {
        dispatch(uiActions.closeModal());
    }

    return (
        <Modal className="modal-centered-lg" show={isOpened} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{getTitle(type)}</Modal.Title>
            </Modal.Header>

            <Modal.Body className="modal-body-theme">
                {renderModalContent(type)}
            </Modal.Body>
        </Modal>
    );
}

export default CustomModal;