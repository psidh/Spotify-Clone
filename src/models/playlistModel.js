// models/playlist.js

import mongoose from 'mongoose';

const playlistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
  name: { type: String, required: true },
  tracks: [{ type: String }], 
});

const Playlist = mongoose.models.playlists || mongoose.model('playlists', playlistSchema);

export default Playlist;
