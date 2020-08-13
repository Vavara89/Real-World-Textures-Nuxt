export const generateUuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

export const getUuid = () => {
  let uuid = localStorage.getItem('po_proudu_uuid');
  if (uuid === null) {
    uuid = generateUuid();
    localStorage.setItem('po_proudu_uuid', uuid);
  }
  return uuid;
};

export const USER_AUTH_KEY_STORAGE = 'auth._token.local'
