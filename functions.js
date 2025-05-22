const getInitials = name => {

    const splitName = name.split(' ').filter(str => str != '')
    const initials =  `${splitName[0].charAt(0).toUpperCase()}.${splitName[1].charAt(0).toUpperCase()}.`
    return initials

}

module.exports = {
    getInitials
} 