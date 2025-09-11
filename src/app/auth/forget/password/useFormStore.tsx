import { create } from "zustand";

type FormState = {
  value: string;
  setValue: (v: string) => void;
};

export const useFormStore = create<FormState>((set) => ({
  value: "",
  setValue: (v) => set({ value: v }),
}));