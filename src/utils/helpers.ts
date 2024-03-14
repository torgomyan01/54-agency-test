import { openAlert, setMessageAlert } from '../redux/alert-site';
import { AlertSiteTypes, MessageStatus, UserOnlineStatus } from '../enums/enums';
import store from '../app/store';

export const RandomKey = (length = 5) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export const setAlertError = (
  status: AlertSiteTypes = AlertSiteTypes.success,
  defaultMessage: string = 'Ошибка сохранения'
) => {
  store.dispatch(
    openAlert({
      status,
      go: true
    })
  );
  store.dispatch(setMessageAlert(defaultMessage));
};

function isNumeric(n: any) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export const onChangePrice = (value: string, min: number, max: number) => {
  if (isNumeric(value)) {
    return Math.max(Number(min), Math.min(Number(max), Number(value)));
  } else {
    return 0;
  }
};

export const GetUserStatus = (status: UserOnlineStatus) => {
  switch (status) {
    case UserOnlineStatus.online:
      return '#93d43f';
    case UserOnlineStatus.offline:
      return '#feb348';
  }
};

export const GetUserMessageStatus = (status: MessageStatus) => {
  switch (status) {
    case MessageStatus.read:
      return '#93d43f';
    case MessageStatus.noRead:
      return '#d6d9ef';
  }
};

export const Chunk = (arr: any[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

export const GetUserMyMessageStatus = (status: MessageStatus) => {
  switch (status) {
    case MessageStatus.read:
      return '#fff';
    case MessageStatus.noRead:
      return '#6f97ff';
  }
};

export const LightenDarkenColor = (col: string, amt: number) => {
  const num = parseInt(col, 16);
  const r = (num >> 16) + amt;
  const b = ((num >> 8) & 0x00ff) + amt;
  const g = (num & 0x0000ff) + amt;
  const newColor = g | (b << 8) | (r << 16);
  return newColor.toString(16);
};
