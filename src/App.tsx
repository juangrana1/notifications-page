import "./main.css";

import Notification from "./Notification";
import Avatar from "./Avatar";

import { useState } from "react";

interface isUnread {
  unread: boolean;
  read: boolean;
}

const imagesPath = './assets/images/';

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
              avatar=""
              name="Mark Webber"
            />
            <Notification
              className="notification"
              unread={isUnread.unread}
              name="Mark Webber"
              type="reaction"
              time="1m ago"
              avatar={`${imagesPath}avatar-mark-webber.webp`}
              target="My first tournament today!"
            />
          </div>
          <div className={`notifications__notification-box ${isUnread.unread ? 'notifications__notification-box--unread' : ''}`}>
            <Avatar
              avatar="/src/assets/images/avatar-angela-gray.webp"
              name="Angela Gray"
            />
            <Notification
              className="notification"
              unread={isUnread.unread}
              name="Angela Gray"
              type="follow"
              avatar={`${imagesPath}avatar-angela-gray.webp`}
              time="5m ago"
            />
          </div>
          <div className={`notifications__notification-box ${isUnread.unread ? 'notifications__notification-box--unread' : ''}`}>
            <Avatar
              avatar="/src/assets/images/avatar-jacob-thompson.webp"
              name="Jacob Thompson"
            />
            <Notification
              className="notification"
              unread={isUnread.unread}
              name="Jacob Thompson"
              type="join-group"
              time="1 day ago"
              avatar={`${imagesPath}avatar-jacob-thompson.webp`}
              target="Chess Club"
            />
          </div>
          <div className={`notifications__notification-box ${isUnread.read ? 'notifications__notification-box--unread' : ''}`}>
            <Avatar
              avatar="/src/assets/images/avatar-rizky-hasanuddin.webp"
              name="Rizky Hasanuddin"
              isMessage={true}
            />
            <Notification
              className="notification"
              unread={isUnread.read}
              name="Rizky Hasanuddin"
              type="private-message"
              time="5 days ago"
              avatar={`${imagesPath}avatar-rizky-hasanuddin.webp`}
              target="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
            />
          </div>
          <div className={`notifications__notification-box ${isUnread.read ? 'notifications__notification-box--unread' : ''}`}>
            <Avatar
              avatar="/src/assets/images/avatar-kimberly-smith.webp"
              name="Kimberly Smith"
            />
            <Notification
              className="notification"
              unread={isUnread.read}
              name="Kimberly Smith"
              type="comment-picture"
              time="1 week ago"
              avatar={`${imagesPath}avatar-kimberly-smith.webp`}
              target={`${imagesPath}image-chess.webp`}
            />
          </div>
          <div className={`notifications__notification-box ${isUnread.read ? 'notifications__notification-box--unread' : ''}`}>
            <Avatar
              avatar="/src/assets/images/avatar-nathan-peterson.webp"
              name="Nathan Peterson"
            />
            <Notification
              className="notification"
              unread={isUnread.read}
              name="Nathan Peterson"
              type="reaction"
              time="2 weeks ago"
              avatar={`${imagesPath}avatar-nathan-peterson.webp`}
              target="5 end-game strategies to increase your win rate"
            />
          </div>
          <div className={`notifications__notification-box ${isUnread.read ? 'notifications__notification-box--unread' : ''}`}>
            <Avatar
              avatar="/src/assets/images/avatar-anna-kim.webp"
              name="Anna Kim"
            />
            <Notification
              className="notification"
              unread={isUnread.read}
              name="Anna Kim"
              type="left-group"
              time="2 weeks ago"
              avatar={`${imagesPath}avatar-anna-kim.webp`}
              target="Chess Club"
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
