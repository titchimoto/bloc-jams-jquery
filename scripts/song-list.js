{
  album.songs.forEach( (song, index) => {
    const testing = player.prettyTime(song.duration);
    
    song.element = $(`
    <tr>
     <td>
       <button>
         <span class="song-number">${index + 1}</span>
         <span class="ion-play"></span>
         <span class="ion-pause"></span>
       </button>
     </td>

     <td>${song.title}</td>
     <td>${testing}</td>
    </tr>
    `);

    song.element.on('click', event => {
      player.playPause(song);
      $('button#play-pause').attr('playState', player.playState);

      const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
      $('#time-control .total-time').text(player.prettyTime(album.songs[currentSongIndex].duration));

    });

    $('#song-list').append(song.element);
  });
}
