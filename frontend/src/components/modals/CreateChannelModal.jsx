import {Modal} from "react-bootstrap";
import ChannelForm from "../forms/ChannelForm";
import {useState} from "react";

const CreateChannelModal = () => {
    const [show, setShow] = useState(false);

    return (
        <Modal className="modal-centered-lg">
            <Modal.Header className="modal-header-theme" closeVariant="white" closeButton>
                <Modal.Title>{t('chat.addChannel')}</Modal.Title>
            </Modal.Header>

            <Modal.Body className="modal-body-theme">
                <ChannelForm />
            </Modal.Body>
        </Modal>
    );
}

export default CreateChannelModal;