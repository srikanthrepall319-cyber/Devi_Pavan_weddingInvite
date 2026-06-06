"use client";

import { createContext, useContext, useState } from "react";

type InvitationContextType = {
  entered: boolean;
  setEntered: (value: boolean) => void;
};

const InvitationContext = createContext<InvitationContextType | null>(null);

export function InvitationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [entered, setEntered] = useState(false);

  return (
    <InvitationContext.Provider value={{ entered, setEntered }}>
      {children}
    </InvitationContext.Provider>
  );
}

export function useInvitation() {
  const context = useContext(InvitationContext);

  if (!context) {
    throw new Error("useInvitation must be used within InvitationProvider");
  }

  return context;
}
