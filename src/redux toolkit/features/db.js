import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    popular: [],
    search: [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    topRated: [],
    genres: [],
    upcoming: []
}

const db = createSlice({
    name: 'db',
    initialState,
    reducers: {

        populateSearch: (state, action) => {
            state.search = action.payload
        },

        back: (state, action) => {
            state.search = []
        },

        populatePopular: (state, action) => {
            state.popular = action.payload
        },

        populateFavorite: (state, action) => {
            console.log(action.payload)

            if (state.favorites.length !== 0 && state.favorites.find( itm => itm.id === action.payload.id )) {
                console.log('passed first condition')
                state.favorites= state.favorites.filter( itm => itm.id !== action.payload.id) 
            }

            else if (state.favorites.length === 0 ) {
                console.log('passed last condition')
                state.favorites.push(action.payload)
            }

            else {
                console.log('passed second condition')
                state.favorites.push(action.payload)
            }
        },

        populateTopRated: (state, action) => {
            state.topRated = action.payload
        },

        populateGenres: (state, action) => {
            state.genres = action.payload
        },

        populateUpcoming: (state, action) => {
            state.upcoming = action.payload
        }
    }
})

export default db.reducer;

export const { populateSearch, back, populatePopular, populateFavorite, populateTopRated, populateGenres, populateUpcoming } = db.actions;