'use strict';

import mongoose from 'mongoose';

var MoviesendpointSchema = new mongoose.Schema({
   MovieName: String,
   Year: Number

});

export default mongoose.model('Movies', MoviesendpointSchema);
