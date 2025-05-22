const { getInitials, createSlug, average } = require('./functions')

//SNACK 1
test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials('Marco Rossi')).toBe('M.R.')
    expect(getInitials('maria verdi')).toBe('M.V.')
    expect(getInitials('Giuseppe  Gialli')).toBe('G.G.')
})

//SNACK 2
test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug('JaVaScript')).toBe('javascript')
    expect(createSlug('Sono Stato in Francia')).toBe('sono stato in francia')
})

//SNACK 3
test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    const arrayNumeri = [3, 6, 9, 12, 15]
    expect(average(arrayNumeri)).toBe(9)
})