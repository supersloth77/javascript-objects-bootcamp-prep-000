var playlist = { "Fugazi": "Waiting Room" }; 

function updatePlaylist(playlist, artistName, songTitles) {
  return Object.assign(playlist, { [artistName]: songTitles });
}

function removeFromPlaylist(playlist, artistName) {
  return delete playlist.artistName;
}