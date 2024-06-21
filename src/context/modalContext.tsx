import {ReactNode, createContext, useState} from 'react'


export const ModalContext = createContext({
    isOpen: false,
    toggleModal: () => {},
})


interface ModalProvider {
    children: ReactNode
}

export const ModalContextProvider = ({children}:ModalProvider)=>{
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <ModalContext.Provider value={{
            isOpen,
            toggleModal: () => setIsOpen(!isOpen)
        }}>{children}</ModalContext.Provider>
    )
}