export type UserProps = {
    name : string
    email: string
    password: string
    CreateAt?: Date
}

export class UserEntity {
    constructor(public readonly props: UserProps){
        this.props.CreateAt = this.props.CreateAt ?? new Date()
    }
}