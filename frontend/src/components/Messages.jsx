import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import { selectors as messagesSelector } from "../store/slices/messagesSlice";
import { selectors as channelsSelector } from "../store/slices/channelsSlice";
import MessageForm from "./forms/MessageForm";

const Messages = () => {
    const { t } = useTranslation();
    const channels = useSelector(channelsSelector.selectAll);
    const currentChannelId = useSelector((state) => state.ui.currentChannelId);
    const messages = useSelector(messagesSelector.selectAll)
        .filter((msg) => msg.channelId === currentChannelId);
    const messagesCount = messages.length;

    const currentChannel = channels.find((channel) => channel.id === currentChannelId);

    return (
      <>
          <div className="d-flex flex-column h-100">
              <div className="bg-light mb-4 p-3 shadow-sm small">
                  <p className="m-0 fw-bold">{currentChannel?.name}</p>
                  <span className="text-muted">{t('pages.main.messagesCount.count', {count: messagesCount})}</span>
              </div>

              <div id="messages-box" className="chat-messages overflow-auto px-5">
                  {messages.map((message) => (
                      <div key={message.id} className="text-break mb-2">
                          <b>{`${message.username}: `}</b>{message.body}
                      </div>
                  ))}
              </div>

              <div className="mt-auto px-5 py-3">
                  <MessageForm />
              </div>
          </div>
      </>
    );
}

export default Messages;