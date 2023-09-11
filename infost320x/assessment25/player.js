const playButtonCode = '\u23F5';
const pauseButtonCode = '\u23F8';

$(document).ready(() => {
  // Handle updating of the timestamps in the video player as well as the progress bar
  $('.player video').on('timeupdate', (event) => {
    const currentTime = event.target.currentTime;
    const duration = event.target.duration;

    const currentTimePercentage = (currentTime / duration) * 100;

    const currentTimeMinutes = Math.floor(currentTime / 60);
    const currentTimeSeconds = Math.floor(currentTime % 60);
    $('#current_time').text(`${currentTimeMinutes < 10 ? `0${currentTimeMinutes}` : currentTimeMinutes}:${currentTimeSeconds < 10 ? `0${currentTimeSeconds}` : currentTimeSeconds}`);

    const durationMinutes = Math.floor(duration / 60);
    const durationSeconds = Math.floor(duration % 60);
    $('#duration').text(`${durationMinutes < 10 ? `0${durationMinutes}` : durationMinutes}:${durationSeconds < 10 ? `0${durationSeconds}` : durationSeconds}`);

    $('#progress').val(currentTimePercentage);
  });

  // Handle updating of the play/pause toggle
  $('#play_toggle').click(() => {
    if ($('#play_toggle').text() === playButtonCode) {
      $('#play_toggle').text(pauseButtonCode);
      $('.player video').get(0).play();
    } else {
      $('#play_toggle').text(playButtonCode);
      $('.player video').get(0).pause();
    }
  });
});
