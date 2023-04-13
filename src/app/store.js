import { configureStore } from '@reduxjs/toolkit';
import tagsReducer from '../features/tags/tagsSlice';
import videosReducer from '../features/videos/videosSlice';
import videoReducer from '../features/video/videoSlice';

export const store = configureStore({
  reducer: {
    tags: tagsReducer,
    videos: videosReducer,
    video: videoReducer,
  },
});
