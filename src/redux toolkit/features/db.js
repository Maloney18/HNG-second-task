import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allData: [],
    search: [],
    favorite: []
}

const db = createSlice({
    name: 'db',
    initialState,
    reducers: {

        populateSearch: (state, action) => {
            state.search.push(action.payload)
        },

        back: (state, action) => {
            state.search = []
        },

        populateGeneral: (state, action) => {
            state.allData = action.payload
        },

        populateFavorite: (state) => {
            state.favorite.push(state.allData.map(movie => movie.favorite))
        }
    }
})

export default db.reducer;

export const { populateSearch, back, populateGeneral, populateFavorite } = db.actions;