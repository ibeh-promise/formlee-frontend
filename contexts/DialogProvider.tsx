"use client";
import React, { useContext, createContext, useState } from "react";
import * as api from "@/lib/api";

type DeleteFormDialogSetter = {
  isOpen: boolean;
  form: api.FormResponseDto | null;
};
interface DialogContext {
  createFormDialogOpen: boolean;
  setCreateFormDialogOpen: (open: boolean) => void;
  logoutDialogOpen: boolean;
  setLogoutDialogOpen: (open: boolean) => void;
  deleteFormDialogStatus: DeleteFormDialogSetter;
  setDeleteFormDialogStatus: React.Dispatch<
    React.SetStateAction<DeleteFormDialogSetter>
  >;
}

const DialogContext = createContext<DialogContext | null>(null);

export const useDialogContext = () => {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error();
  return ctx;
};

const DialogProvider = ({ children }: { children: React.ReactNode }) => {
  const [createFormDialogOpen, setCreateFormDialogOpen] = useState(false);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const [deleteFormDialogStatus, setDeleteFormDialogStatus] =
    useState<DeleteFormDialogSetter>({ isOpen: false, form: null });

  return (
    <DialogContext.Provider
      value={{
        createFormDialogOpen,
        setCreateFormDialogOpen,
        logoutDialogOpen,
        setLogoutDialogOpen,
        deleteFormDialogStatus,
        setDeleteFormDialogStatus,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

export default DialogProvider;
