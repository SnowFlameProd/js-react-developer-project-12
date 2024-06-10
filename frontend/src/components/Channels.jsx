import {
  Button, Dropdown, Nav,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { selectors as channelsSelector } from '../store/slices/channelsSlice';
import { actions as uiActions } from '../store/slices/uiSlice';

const Channels = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const channels = useSelector(channelsSelector.selectAll);
  const currentChannelId = useSelector((state) => state.ui.currentChannelId);

  const handleClick = (id) => {
    dispatch(uiActions.setCurrentChannelId(id));
  };

  const openModal = (data) => {
    dispatch(uiActions.openModal(data));
  };

  const renderNavItemContent = (channel) => (channel.removable ? (
    <Dropdown className="d-flex btn-group">
      <Button
        type="button"
        variant={channel.id === currentChannelId ? 'primary' : null}
        onClick={() => handleClick(channel.id)}
        className="rounded-0 text-truncate w-100 text-start"
      >
        <span className="me-1">{`# ${channel.name}`}</span>
      </Button>

      <Dropdown.Toggle
        variant={channel.id === currentChannelId ? 'primary' : null}
        id={`dropdown-${channel.id}`}
        className="flex-grow-0"
      />

      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => openModal({
            type: 'deleteChannel',
            extra: { channelId: channel.id },
          })}
        >
          {t('form.delete')}
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => openModal({
            type: 'editChannel',
            extra: { channelId: channel.id },
          })}
        >
          {t('form.edit')}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  ) : (
    <button
      type="button"
      onClick={() => handleClick(channel.id)}
      className={cn('btn rounded-0 text-truncate w-100 text-start', {
        'btn-primary': channel.id === currentChannelId,
      })}
    >
      <span className="me-1">{`# ${channel.name}`}</span>
    </button>
  ));

  return (
    <Nav id="channels-box" className="nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block" as="ul">
      {channels.map((channel) => (
        <Nav.Item
          key={channel.id}
          as="li"
          className="w-100"
        >
          {renderNavItemContent(channel)}
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default Channels;
