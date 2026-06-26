import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProjectCategory } from "@/types";

export type ProjectFilter = "all" | ProjectCategory;

interface UiState {
  mobileMenuOpen: boolean;
  projectFilter: ProjectFilter;
  activeSection: string;
}

const initialState: UiState = {
  mobileMenuOpen: false,
  projectFilter: "all",
  activeSection: "hero",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileMenu(state) {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    setMobileMenu(state, action: PayloadAction<boolean>) {
      state.mobileMenuOpen = action.payload;
    },
    setProjectFilter(state, action: PayloadAction<ProjectFilter>) {
      state.projectFilter = action.payload;
    },
    setActiveSection(state, action: PayloadAction<string>) {
      state.activeSection = action.payload;
    },
  },
});

export const {
  toggleMobileMenu,
  setMobileMenu,
  setProjectFilter,
  setActiveSection,
} = uiSlice.actions;

export default uiSlice.reducer;
