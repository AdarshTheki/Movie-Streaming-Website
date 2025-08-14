import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../config/instance';

const fetchBannerLists = createAsyncThunk(
  'movies/fetchBannerLists',
  async () => {
    const response = await instance.get('/movie/upcoming');
    return response.data.results;
  }
);

const fetchGenreMovieLists = createAsyncThunk(
  'movies/fetchGenreMovieLists',
  async () => {
    const response = await instance.get('/genre/movie/list');
    return response.data.genres;
  }
);

const fetchGenreTvLists = createAsyncThunk('tv/fetchGenreTvLists', async () => {
  const response = await instance.get('/genre/tv/list');
  return response.data.genres;
});

const initialState = {
  genreList: [],
  bannerList: [],
  loading: false,
  error: null,
};

const fetchDataSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Banner Lists
      .addCase(fetchBannerLists.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBannerLists.fulfilled, (state, action) => {
        state.bannerList = action.payload;
        state.loading = false;
      })
      .addCase(fetchBannerLists.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Genre Movie Lists
      .addCase(fetchGenreMovieLists.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGenreMovieLists.fulfilled, (state, action) => {
        state.genreList.push(...action.payload);
        state.loading = false;
      })
      .addCase(fetchGenreMovieLists.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Genre Tv Lists
      .addCase(fetchGenreTvLists.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGenreTvLists.fulfilled, (state, action) => {
        state.genreList.push(...action.payload);
        state.loading = false;
      })
      .addCase(fetchGenreTvLists.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export { fetchBannerLists, fetchGenreMovieLists, fetchGenreTvLists };
export default fetchDataSlice.reducer;
