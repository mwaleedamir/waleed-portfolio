import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export interface ContactForm {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

interface ContactState {
  form: ContactForm;
  status: SubmissionStatus;
  error: string | null;
}

const emptyForm: ContactForm = {
  name: "",
  email: "",
  projectType: "web",
  message: "",
};

const initialState: ContactState = {
  form: emptyForm,
  status: "idle",
  error: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    updateField(
      state,
      action: PayloadAction<{ field: keyof ContactForm; value: string }>
    ) {
      state.form[action.payload.field] = action.payload.value;
      if (state.status === "error") {
        state.status = "idle";
        state.error = null;
      }
    },
    setStatus(state, action: PayloadAction<SubmissionStatus>) {
      state.status = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.status = "error";
      state.error = action.payload;
    },
    resetForm(state) {
      state.form = emptyForm;
      state.status = "idle";
      state.error = null;
    },
  },
});

export const { updateField, setStatus, setError, resetForm } =
  contactSlice.actions;

export default contactSlice.reducer;
