import io from 'socket.io-client';
const {EXPO_API_URL} = process.env;

const socket = io(EXPO_API_URL);

export default socket;
