import {ListGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import cn from 'classnames';
import {selectors as channelsSelector} from "../store/slices/channelsSlice";
import { actions as uiActions } from '../store/slices/uiSlice';

const Channels = () => {
    const dispatch = useDispatch();
    const channels = useSelector(channelsSelector.selectAll);
    const currentChannelId = useSelector((state) => state.ui.currentChannelId);

    const handleClick = (id) => {
        dispatch(uiActions.setCurrentChannelId(id));
    }

    return (
       <ListGroup id="channels-box" className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block">
           {channels.map((channel) => (
               <ListGroup.Item
                   key={channel.id}
                   type="button"
                   className={cn({
                       'active': channel.id === currentChannelId
                   })}
                   onClick={() => handleClick(channel.id)}
               >
                   {channel.name}
               </ListGroup.Item>
           ))}
       </ListGroup>
    );
}

export default Channels;