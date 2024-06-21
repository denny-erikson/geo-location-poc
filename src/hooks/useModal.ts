import { useContext } from "react"
import { ModalContext } from "../context/modalContext"




export const useModal = () => {
    return useContext(ModalContext)
}