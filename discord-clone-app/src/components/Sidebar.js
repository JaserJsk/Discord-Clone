import "./Sidebar.css";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import database, { auth } from "../config/firebase";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import CallIcon from "@material-ui/icons/Call";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import SidebarChannel from "./SidebarChannel";

function SideBar() {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    database.collection("channels").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      )
    );
  }, []);

  const addChannelHandle = () => {
    const channelName = prompt("Enter Channel Name");

    if (channelName) {
      database.collection("channels").add({
        channelName: channelName,
      });
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <h3>Discord Clone</h3>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar-channels">
        <div className="sidebar-channels-header">
          <div className="sidebar-header">
            <ExpandMoreIcon />
            <h4>Chat Channels</h4>
          </div>

          <AddIcon className="sidebar-add-channel" onClick={addChannelHandle} />
        </div>

        <div className="sidebar-channel-list">
          {channels.map(({ id, channel }) => (
            <SidebarChannel
              key={id}
              id={id}
              channelName={channel.channelName}
            />
          ))}
        </div>
      </div>

      {/* CONNECTED */}
      <div className="sidebar-voice">
        <SignalCellularAltIcon
          className="sidebar-voice-icon"
          fontSize="large"
        />
        <div className="sidebar-voice-info">
          <h3>Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar-voice-icons">
          <MicIcon />
          <HeadsetIcon />
          <CallIcon />
        </div>
      </div>

      {/* PROFILE */}
      <div className="sidebar-profile">
        <Avatar src={user.photo} />
        <div className="sidebar-profile-info">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 6)}</p>
        </div>

        <div className="sidebar-profile-icons">
          <InfoOutlinedIcon />
          <SettingsIcon />
          <ExitToAppIcon onClick={() => auth.signOut()} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
