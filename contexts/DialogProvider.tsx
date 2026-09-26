"use client";
import React, { useContext, createContext, useState, useEffect } from "react";
import * as api from "@/lib/api";
import { Loader } from "lucide-react";
interface DialogContext {
  createFormDialogOpen: boolean;
  setCreateFormDialogOpen: (open: boolean) => void;
  logoutDialogOpen: boolean;
  setLogoutDialogOpen: (open: boolean) => void;
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

  return (
    <DialogContext.Provider
      value={{
        createFormDialogOpen,
        setCreateFormDialogOpen,
        logoutDialogOpen,
        setLogoutDialogOpen,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

export default DialogProvider;
