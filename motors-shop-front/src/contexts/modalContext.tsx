import { createContext, useState } from "react";

export const AuthContext = createContext<Values>({} as Values);

interface Values {
  modal: boolean;
  modalDelete: boolean;
  openModal: () => void;
  closeModal: () => void;
  openModalDelete: () => void;
  closeModalDelete: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [modal, setModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  function openModalDelete() {
    setModal(false);
    setModalDelete(true);
  }

  function closeModalDelete() {
    setModal(true);
    setModalDelete(false);
  }

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
    document.body.classList.remove("modal_body");
  }

  return (
    <AuthContext.Provider value={{ modal, openModal, closeModal, modalDelete, openModalDelete, closeModalDelete }}>
      {children}
    </AuthContext.Provider>
  );
};
