import {datesType, metaType} from "~/types/global";

export interface NavigationType extends metaType {
    data: {
        id: number
        attributes: {
            Title: string,
            List: [{
                id: number,
                Title: string,
                Path: string
            }]
        } & datesType
    }
}

export interface PageType {
    id: number,
    attributes: {
        Head?: {
            Features: {
                Text: string
                id: number
            },
            Link: {
                Path: string
                Title: string
                id: number
            },
            Title: string
            id: number
        }
        Page: string
    } & datesType
}