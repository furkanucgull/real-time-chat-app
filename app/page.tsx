'use client';
import ChatForm from "@/components/ChatForm";
import ChatMessage from "@/components/ChatMessage";
import { socket } from '../lib/socketClient';
import { useEffect, useState } from "react";

export default function Home() {
  const [room, setRoom] = useState("");
  const [joined, setJoined] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; message: string; }[]>([]);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    socket.on("user_joined", (message) => {
      setMessages((prev) => [...prev, { sender: "system", message }]);
    });
    return () => {
      socket.off("user_joined");
      socket.off("message");
    };
  }, []);
  const handleJoinRoom = () => {
    if (room && userName) {
      socket.emit("join-room", { room, username: userName });
      setJoined(true);
    }
  };
  const handleSendMessage = (message: string) => {
    console.log(message);
  };
  return (
    <div className="flex mt-24 justify-center w-full">
      {!joined ? (
        <div className="flex w-full max-3xl mx-auto flex-col items-center">
          <h1 className="mb-4 text-2xl font-bold">Join a Room</h1>
          <input type="text"
            placeholder="Enter your userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-64 px-4 py-2 mb-4 border-2 rounded-lg" />

          <input type="text"
            placeholder="Enter RoomName"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className="w-64 px-4 py-2 mb-4 border-2 rounded-lg" />
          <button
            onClick={handleJoinRoom}
            className="px-4 py-2 text-wrap bg-blue-500 rounded-lg"
          > Join Room</button>
        </div>
      ) : (<div className="w-full max-w-3xl mx-auto">
        <h1 className="mb-4 text-2xl font-bold">Room: 1</h1>
        <div className="h-[500px] overflow-y-auto p-4 mb-4 bg-gray-200 border-2 rounded-lg">
          {messages.map((msg, i) => (
            <ChatMessage key={i}
              sender={msg.sender}
              message={msg.message}
              isOwnMessage={msg.sender === userName} />
          ))
          }
        </div>
        <ChatForm onSendMessage={handleSendMessage} />
      </div>)}

    </div>
  );
}
