const getInitials = name => {

    const splitName = name.split(' ').filter(str => str != '')
    const initials = `${splitName[0].charAt(0).toUpperCase()}.${splitName[1].charAt(0).toUpperCase()}.`
    return initials

}

const createSlug = stringa => {
    const minuscolo = stringa.toLowerCase().split(' ').join('-')
    return minuscolo
}

const average = array => {

    array.forEach(element => {
        if(isNaN(element)){
            throw new Error('Average accetta solo numeri!')
        }
    });

    const somma = array.reduce((acc, curr) => {
        return acc + curr
    }, 0)

    const media = somma / array.length

    return media
    
}

const isPalindrome = word => {
    
    const controllo = word.toLowerCase().split('').reverse().join('')
    return controllo === word.toLowerCase()
    
}

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
} 