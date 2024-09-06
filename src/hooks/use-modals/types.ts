import { GenericModalHandle } from "./modals"

export interface ModalsContextType {
    deleteAccountQuestion: GenericModalHandle | null
    deleteAccountConfirmation: GenericModalHandle | null
    linkSendToEmail: GenericModalHandle | null
    confirmYourPassword: GenericModalHandle | null
}
