// models/playlist.js

import mongoose from 'mongoose';

const posterschema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  tracks: [{ type: String }],
});

const Playlist =
  mongoose.models.posters || mongoose.model('posters', posterschema);

export default Playlist;
