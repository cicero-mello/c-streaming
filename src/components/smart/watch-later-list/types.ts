import { HTMLAttributes } from "react";
import { WatchLaterCardProps } from "./card/types";

export interface WatchLaterListProps extends Omit<
    HTMLAttributes<HTMLDivElement>, "className"
>{
    cards?: WatchLaterCardProps[]
}
