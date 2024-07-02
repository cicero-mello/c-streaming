import { GenericModalHandle } from "../../components/modals"

export interface ModalsContextProps {
    deleteAccountQuestion: GenericModalHandle | null
    deleteAccountConfirmation: GenericModalHandle | null
    linkSendToEmail: GenericModalHandle | null
    confirmYourPassword: GenericModalHandle | null
}
