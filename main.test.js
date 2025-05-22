const getInitials = name => {

    const splitName = name.split(' ')
    const initials =  splitName[0].charAt(0) + ' ' + splitName[1].charAt(0)
    return initials

}

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials('Marco Rossi')).toBe('M R')
})