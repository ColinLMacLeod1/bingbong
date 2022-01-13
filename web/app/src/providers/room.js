import React, { useState, useContext } from "react";
// import Logger from "../util/logger";
// const logger = Logger("providers/room");

export const RoomContext = React.createContext();

export const RoomProvider = (props) => {
  const [room, setRoom] = useState();
  const [user, setUser] = useState();

  return (
    <RoomContext.Provider
      value={{
        room,
        user,
        setRoom,
        setUser,
      }}
    >
      {props.children}
    </RoomContext.Provider>
  );
};

export const RoomConsumer = RoomContext.Consumer;

export const useRoom = () => useContext(RoomContext);
