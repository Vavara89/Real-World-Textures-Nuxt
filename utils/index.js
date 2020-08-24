export const generateUuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

export const getUuid = () => {
  let uuid = localStorage.getItem('rwt_uuid');
  if (uuid === null) {
    uuid = generateUuid();
    localStorage.setItem('rwt_uuid', uuid);
  }
  return uuid;
};

export const toggleElement = (arr, elem) => {
  const index = arr.indexOf(elem);
  if (index > -1) {
    arr.splice(index, 1);
  } else {
    arr.push(elem);
  }
  return arr;
};

export const pushQuery = (router, route, key, value) => {
  const query = {};
  Object.assign(query, route.query);
  query[key] = value;
  router.push({path: route.path, query: query});
}

export const removeQuery = (router, route, key) => {
  const query = {};
  Object.assign(query, route.query);
  delete query[key];
  router.push({path: route.path, query: query});
}

export const USER_AUTH_KEY_STORAGE = 'auth._token.local'
