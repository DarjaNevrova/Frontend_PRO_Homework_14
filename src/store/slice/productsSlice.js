import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    list: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct (state, {payload}){
            // state.list.push({ id: Date.now(), ...payload });
            state.list.push({ id: nanoid(), ...payload });
        },

        removeCard (state, {payload}){
            state.list = state.list.filter(item => item.id !== payload);
        },
    }
});

export const { addProduct, removeCard} = productsSlice.actions
export default productsSlice.reducer;

// Прочитала, что с toolkit можно использовать nanoid, вместо Date.now. Уместен он тут? Или лучше использовать Date.now? :)