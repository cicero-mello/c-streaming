import { Episode } from "@stores"

export interface MediaTitleProps {
    title: string
    mediaId: string
    watchLaterText?: string
    episode?: Episode
}
