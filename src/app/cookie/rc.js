import Cookies from 'js-cookie';

export const mk = (data, name='sssn', time=1) => {
  data ? Cookies.set(name, data, {expires: time}) : console.log("Error. Check store function.");
};

export const ls = (name='sssn') => {
  const cookie = Cookies.get(name);
  return cookie ? cookie : undefined;
};

export const rm = (name='sssn') => {
  Cookies.remove(name);
};
