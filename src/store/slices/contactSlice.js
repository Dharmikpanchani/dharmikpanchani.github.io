import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import emailjs from '@emailjs/browser'

export const submitContact = createAsyncThunk(
  'contact/submit',
  async (formData, { rejectWithValue }) => {
    try {
      if (!navigator.onLine) {
        throw new Error('No internet connection. Please check your network and try again.')
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.number,
        address: formData.address || 'Not provided',
        message: formData.message,
      }

      console.log(templateParams, "dharmik")
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      return { success: true }
    } catch (err) {
      return rejectWithValue(err.message || 'Failed to send message. Please try again.')
    }
  }
)

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    status: 'idle', // idle | loading | success | error
    error: null,
  },
  reducers: {
    resetContact: (state) => {
      state.status = 'idle'
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContact.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(submitContact.fulfilled, (state) => {
        state.status = 'success'
        state.error = null
      })
      .addCase(submitContact.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.payload || 'Something went wrong. Please try again.'
      })
  },
})

export const { resetContact } = contactSlice.actions
export default contactSlice.reducer
