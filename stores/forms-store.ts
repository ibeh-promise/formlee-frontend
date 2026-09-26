import { create } from "zustand";
import { FormResponseDto } from "@/lib/api";
import * as api from "@/lib/api";

interface FormStore {
  forms: FormResponseDto[];
  setForms: (forms: FormResponseDto[]) => void;
  addForm: (form: FormResponseDto) => void;
  updateForm: (formId: string, form: Partial<FormResponseDto>) => void;
  deleteForm: (id: string) => void;
}

export const useFormStore = create<FormStore>()((set) => ({
  forms: [],
  setForms: (forms) => set(() => ({ forms })),
  addForm: (form) => set((state) => ({ forms: [...state.forms, form] })),
  updateForm: (formId, form) =>
    set((state) => ({
      forms: state.forms.map((f) => (f.id === formId ? { ...f, ...form } : f)),
    })),
  deleteForm: (id) =>
    set((state) => ({ forms: state.forms.filter((form) => form.id !== id) })),
}));
