import { PageProps } from "gatsby"

export interface HomeProps extends Omit<PageProps, "data">{
    data: any
}
