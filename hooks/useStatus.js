/* eslint-disable */
import {useState, useEffect} from 'react';
const useStatus = (name, status, userNum) => {
  const [username, setUsername] = useState('');
  const [isOnline, setIsOnline] = useState(null);
  const [userId, setUserId] = useState()
  useEffect(() => {
    setUsername(name);
    setIsOnline(status);
    setUserId(userNum);
    return '';
  }, []);
  return {username, isOnline, userId};
};
export default useStatus;
