import {
    Button,
    Col,
    Container, Row
} from "react-bootstrap";
import { PlusSquare } from 'react-bootstrap-icons';
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import {getChannels, getMessages} from "../../functions/manageData";
import {useDispatch, useSelector} from "react-redux";

import { actions as messagesActions } from '../../store/slices/messagesSlice';
import { actions as channelsActions } from '../../store/slices/channelsSlice';
import { actions as uiActions } from '../../store/slices/uiSlice';
import Channels from "../Channels";
import Messages from "../Messages";
import CustomModal from "../modals/CustomModal";

const MainPage = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { token } = useSelector(state => state.auth);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: channels} = await getChannels(token);
                const {data: messages} = await getMessages(token);
                dispatch(channelsActions.addChannels(channels));
                dispatch(messagesActions.addMessages(messages));
                dispatch(uiActions.setCurrentChannelId(channels[0].id));
                dispatch(uiActions.setDefaultChannelId(channels[0].id));
            } catch (error) {
                console.log(error);
                throw error;
            }
        }
        fetchData();
    }, [dispatch]);

    const handleClick = () => {
        dispatch(uiActions.openModal({ type: 'addChannel' }));
    }

    return (
        <Container className="h-100 my-4 overflow-hidden rounded shadow">
            <Row className="row h-100 bg-white flex-md-row">
                <Col className="col-4 col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
                    <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
                        <b>{t('pages.main.channels')}</b>

                        <Button variant="group-vertical" className="p-0 text-primary" onClick={handleClick}>
                            <PlusSquare size={20} />
                            <span className="visually-hidden">+</span>
                        </Button>

                        <CustomModal/>
                    </div>

                    <Channels />
                </Col>
                <Col className="col p-0 h-100">
                    <Messages/>
                </Col>
            </Row>
        </Container>
    );
};

export default MainPage;