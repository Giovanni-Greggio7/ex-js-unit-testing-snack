const { getInitials, createSlug, average, isPalindrome, findPostById } = require('./functions')

//SNACK 1
test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials('Marco Rossi')).toBe('M.R.')
    expect(getInitials('maria verdi')).toBe('M.V.')
    expect(getInitials('Giuseppe  Gialli')).toBe('G.G.')
})

//SNACK 2
test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug('JaVaScript')).toBe('javascript')
})

//SNACK 3
test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    const arrayNumeri = [3, 6, 9, 12, 15]
    expect(average(arrayNumeri)).toBe(9)
    expect(() => average([3, 4, 'ciao'])).toThrow()
})

//SNACK 4
test("La funzione createSlug sostituisce gli spazi con -.", () => {
    expect(createSlug("Questo è un test")).toBe("questo-è-un-test")
})

//SNACK 5
test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("Osso")).toBeTruthy()
    expect(isPalindrome("Ossia")).toBeFalsy()
})

//SNACK 6
test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => createSlug('')).toThrow()
    expect(() => createSlug(null)).toThrow()
})

const posts = [
    { id: 1, title: 'Giornata al mare', slug: 'Arianna'},
    { id: 2, title: 'Cuocere una pizza', slug: 'Paola'},
    { id: 3, title: 'Sciare in montagna', slug: 'Giacomo'},
    { id: 4, title: 'Allenardi in acqua', slug: 'Francesco'},
]

//SNACK 7
test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    expect(findPostById(posts, 3)).toEqual({ id: 3, title: 'Sciare in montagna', slug: 'Giacomo'})
    expect(findPostById(posts, 1)).toEqual({ id: 1, title: 'Giornata al mare', slug: 'Arianna'})
    expect(findPostById(posts, 2)).toEqual({ id: 2, title: 'Cuocere una pizza', slug: 'Paola'})
})


