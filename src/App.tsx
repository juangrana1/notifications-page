import "./main.scss";

import Image1 from './assets/images/avatar-mark-webber.webp';
import Image2 from './assets/images/avatar-angela-gray.webp';
import Image3 from './assets/images/avatar-jacob-thompson.webp';
import Image4 from './assets/images/avatar-rizky-hasanuddin.webp';
import Image5 from './assets/images/avatar-kimberly-smith.webp';
import Image6 from './assets/images/avatar-nathan-peterson.webp';
import Image7 from './assets/images/avatar-anna-kim.webp';
import ImageChess from './assets/images/image-chess.webp';



import Notification from "./Notification";
import Avatar from "./Avatar";

import { useState } from "react";

interface isUnread {
  unread: boolean;
  read: boolean;
}

function App() {
  const [isUnread, setIsUnread] = useState<isUnread>({
    unread: true,
    read: false,
  });

  function clickHandler(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();

    setIsUnread({
      unread: false,
      read: false,
    });
  }

  return (
    <div className="background">
      <div className="container">
        <header className="header">
          <div className="header__box">
            <h1 className="header__box__title">Notifications</h1>
            <div className="header__box__number-box">{isUnread.unread ? 3 : 0}</div>
          </div>
          <div className="header__box">
            <div className="header__box__mark-as-read" onClick={clickHandler}>
              Mark all as read
            </div>
          </div>
        </header>
        <main className="notifications">
          <div className={`notifications__notification-box ${isUnread.unread ? 'notifications__notification-box--unread' : ''}`}>
            <Avatar
              avatar={Image1}
              name="Mark Webber"
            />
            <Notification
              className="notification"
              unread={isUnread.unread}
              name="Mark Webber"
              type="reaction"
              time="1m ago"
              target="My first tournament today!"
            />
          </div>
          <div className={`notifications__notification-box ${isUnread.unread ? 'notifications__notification-box--unread' : ''}`}>
            <Avatar
              avatar={Image2}
              name="Angela Gray"
            />
            <Notification
              className="notification"
              unread={isUnread.unread}
              name="Angela Gray"
              type="follow"
              time="5m ago"
            />
          </div>
          <div className={`notifications__notification-box ${isUnread.unread ? 'notifications__notification-box--unread' : ''}`}>
            <Avatar
              avatar={Image3}
              name="Jacob Thompson"
            />
            <Notification
              className="notification"
              unread={isUnread.unread}
              name="Jacob Thompson"
              type="join-group"
              time="1 day ago"
              target="Chess Club"
            />
          </div>
          <div className={`notifications__notification-box ${isUnread.read ? 'notifications__notification-box--unread' : ''}`}>
            <Avatar
              avatar={Image4}
              name="Rizky Hasanuddin"
              isMessage={true}
            />
            <Notification
              className="notification"
              unread={isUnread.read}
              name="Rizky Hasanuddin"
              type="private-message"
              time="5 days ago"
              target="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
            />
          </div>
          <div className={`notifications__notification-box ${isUnread.read ? 'notifications__notification-box--unread' : ''}`}>
            <Avatar
              avatar={Image5}
              name="Kimberly Smith"
            />
            <Notification
              className="notification"
              unread={isUnread.read}
              name="Kimberly Smith"
              type="comment-picture"
              time="1 week ago"
              target={ImageChess}
            />
          </div>
          <div className={`notifications__notification-box ${isUnread.read ? 'notifications__notification-box--unread' : ''}`}>
            <Avatar
              avatar={Image6}
              name="Nathan Peterson"
            />
            <Notification
              className="notification"
              unread={isUnread.read}
              name="Nathan Peterson"
              type="reaction"
              time="2 weeks ago"
              target="5 end-game strategies to increase your win rate"
            />
          </div>
          <div className={`notifications__notification-box ${isUnread.read ? 'notifications__notification-box--unread' : ''}`}>
            <Avatar
              avatar={Image7}
              name="Anna Kim"
            />
            <Notification
              className="notification"
              unread={isUnread.read}
              name="Anna Kim"
              type="left-group"
              time="2 weeks ago"
              target="Chess Club"
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
