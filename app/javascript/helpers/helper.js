const ntc = document.querySelector('.notice');
const alr = document.querySelector('.alert');
const hide = () => (
  setTimeout(() => {
    if (ntc) ntc.classList.toggle('hidden');
    if (alr) alr.classList.toggle('hidden');
  }, 2000)
);
export default hide;