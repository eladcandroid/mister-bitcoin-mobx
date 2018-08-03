const signup = (name) => {
    const user = {name, coins: 100, moves: []}
    saveToLocal(user)

    return user
}

const loadUser = () => {
    return loadFromLocal()
}

const updateUser = (user) => {
    saveToLocal(user)
}

const saveToLocal = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
}

const loadFromLocal = () => {
    const user = localStorage.getItem('user')
    if (!user) return null

    return JSON.parse(user)
}
export const UserService = {
    signup,
    loadUser,
    updateUser
}