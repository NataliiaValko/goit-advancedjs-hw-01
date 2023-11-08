import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const videoKey = 'videoKey';

player.on(
  'timeupdate',
  throttle(
    ({ seconds }) => localStorage.setItem(videoKey, JSON.stringify(seconds)),
    1000
  )
);

player.setCurrentTime(JSON.parse(localStorage.getItem(videoKey)) || 0);
