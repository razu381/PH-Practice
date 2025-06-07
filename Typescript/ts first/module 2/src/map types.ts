interface User {
    user: string;
    class: string;
}


type NewUser = {
    [key in keyof User] : string
}