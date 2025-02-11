'use client';
import { io } from 'socket.io-client';
const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || 'https://realtimechat-application.vercel.app/', {
  path: '/api/socket',
});
export { socket };
