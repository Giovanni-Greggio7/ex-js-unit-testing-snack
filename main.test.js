const { getInitials } = require('./functions')

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials('Marco Rossi')).toBe('M.R.')
    expect(getInitials('maria verdi')).toBe('M.V.')
    expect(getInitials('Giuseppe  Gialli')).toBe('G.G.')
})