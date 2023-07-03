import swal from 'sweetalert';

const discordButton = document.querySelector('.discord');
const gmailButton = document.querySelector('.gmail');

discordButton.addEventListener('click', () => {
  swal('MEGATRON#7084');
});

gmailButton.addEventListener('click', () => {
  swal('bernardgeorgecharles007@gmail.com');
});