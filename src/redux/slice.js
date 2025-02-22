import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
    name:'event',
    initialState: {
        title: 'Harmoni Event Managemant',
        description: 'It is a html5 template. It created by Bootstrap 4 framework for the Professionals. Bootstrap exclusive features makes it unique and extremely useful for all professions. It is fully responsive and supported in to all Device & Browsers. Try It...',
        buttonText: 'BUY NOW',
      },
      reducer :{}
})
export default eventSlice.reducer