import { redirect } from 'react-router-dom';

export function getTokenDuration() {
  const storedExpireTime = localStorage.getItem('expireTime');
  const expireTime = new Date(storedExpireTime);
  const now = new Date();
  const duration = expireTime.getTime() - now.getTime();
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem('token');

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();
  if (tokenDuration < 0) {
    return 'EXPIRED';
  }

  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthToken() {
  const token = getAuthToken();

  if (!token) {
    return redirect('/auth');
  }

  return null;
}
