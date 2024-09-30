type ElementWithId = React.ReactElement<{ id: string }>

export interface KeepFocusOnRemoveProps {
    children?: ElementWithId | ElementWithId[] | false
    ariaNotification?: string
}
