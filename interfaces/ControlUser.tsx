
interface ControlUser {
    credentials: [{
        auth_provider_type: String,
        auth_provider_id: String,
    }],
    id: String,
    is_admin: boolean,
    is_owner: boolean,
    mfa_modules: [{
        enabled: boolean,
        id: String,
        name: String
    }],
    name: String
}

// Control User Interface
class ControlUser implements ControlUser {

}

export { ControlUser };