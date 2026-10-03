import { create } from "zustand";
import { SubmissionResponseDto } from "@/lib/api";
import * as api from "@/lib/api";

interface SubmissionStore {
  submissions: SubmissionResponseDto[];
  setSubmissions: (submissions: SubmissionResponseDto[]) => void;
  addSubmission: (submission: SubmissionResponseDto) => void;
  updateSubmission: (
    submissionId: string,
    submission: Partial<SubmissionResponseDto>,
  ) => void;
  deleteSubmission: (id: string) => void;
}

export const useSubmissionStore = create<SubmissionStore>()((set) => ({
  submissions: [],
  setSubmissions: (submissions) => set(() => ({ submissions: submissions })),
  addSubmission: (submission) =>
    set((state) => ({ submissions: [...state.submissions, submission] })),
  updateSubmission: (submissionId, submission) =>
    set((state) => ({
      submissions: state.submissions.map((s) =>
        s.id === submissionId ? { ...s, ...submission } : s,
      ),
    })),
  deleteSubmission: (id) =>
    set((state) => ({
      submissions: state.submissions.filter(
        (submission) => submission.id !== id,
      ),
    })),
}));
