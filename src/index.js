import { encode, decode } from 'qss';
import isUndefined from 'lodash/isUndefined';

export const encodeQueryString = (params, prefix) => encode(params, prefix);

export const decodeQueryString = query => decode(query);

export const decodeLocationSearch = search => {
  const s = isUndefined(search) ? window.location.search : search;
  return s ? decodeQueryString(s.substr(1)) : {};
};

const MAX_UID = 1000000;
export const uid = prefix => {
  do {
    prefix += ~~(Math.random() * MAX_UID);
  } while (typeof document !== 'undefined' && document.getElementById(prefix));

  return prefix;
};

export const uuid = () => {
  let d = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x7) | 0x8).toString(16);
  });
  return uuid;
};

export const hashCode = s => {
  const str = String(s);
  let hash = 0;
  let char;
  if (str.trim().length === 0) return hash;
  for (let i = 0; i < str.length; i++) {
    char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash;
  }

  return Math.abs(hash);
};

export const IS_BROWSER =
  typeof window !== 'undefined' && typeof window.document !== 'undefined';

export const IS_IOS =
  IS_BROWSER &&
  /iPad|iPhone|iPod/.test(navigator.userAgent) &&
  !window.MSStream;
