import { I_Attributes } from "./attributes"
import { I_User } from "./user"

export interface I_Post {
    id: string
    title: string
    star: string
    address: string
    description: string
    attributes: I_Attributes
    user: I_User
    imagesArr: { images: string }
}