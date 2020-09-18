import Notifications from 'vue-notification';
import Vue from 'vue';

import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

function toast ({title, message, type, timeout, cb}) {
  if (type === Notifications.types.warn) type = 'warning'
  return iziToast[type]({title, message, timeout})
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

Vue.use(Notifications, options);
