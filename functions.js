const getInitials = name => {

    const splitName = name.split(' ').filter(str => str != '')
    const initials =  `${splitName[0].charAt(0).toUpperCase()}.${splitName[1].charAt(0).toUpperCase()}.`
    return initials

}

const createSlug = stringa => {
    const minuscolo = stringa.toLowerCase()
    return minuscolo
}

module.exports = {
    getInitials,
    createSlug
} 