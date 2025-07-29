import React, { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const SocketContext = createContext(null);

export function SocketProvider({ children }) {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const s = io('http://localhost:3000', { withCredentials: true });
        setSocket(s);
        return () => s.disconnect();
    }, []);

    return (
        <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
    );
    }

    export function useSocket() {
    return useContext(SocketContext);
}
