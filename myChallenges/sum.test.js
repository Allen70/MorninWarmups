const {
    sum,
    difference,
    splitTheWord,
    splitTheWordBy,
    joinTheArray,
    callbackReturnsHello,
    commaList,
    wordToASCII,
    jonify,
    asciify,
    sumArray,
    sumEvenArray
} = require('./functions')

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('subtracts 1 - 2 = -1', () => {
    expect(difference(1, 2)).toBe(-1);
});

test('splitTheWord splits fuck into ["f","u","c","k"]', () => {
    expect(splitTheWord('fuck')).toStrictEqual(['f', 'u', 'c', 'k']);
});

test('splitTheWord splits fuck into ["f","u","c","k"]', () => {
    expect(splitTheWord('fuck')).toStrictEqual(['f', 'u', 'c', 'k']);
});

test('splitTheWordBy(string, substring) splits the string by the substring', () => {
    expect(splitTheWordBy('apple eater', ' ')).toStrictEqual(['apple', 'eater']);
    expect(splitTheWordBy('apple-eater', '-')).toStrictEqual(['apple', 'eater']);
});

test('joinTheArray(array) should equal a string of all array elements', () => {
    expect(joinTheArray(['go ', 'fuck ', 'yourself!'])).toBe('go fuck yourself!')
})

test('comma list should return a comma list of the array', () => {
    expect(commaList(['a', 'b', 'c'])).toBe('a,b,c')
})

test('callbackReturnsHello returns a callback function that returns hello', () => {
    let myFunction = callbackReturnsHello()
    expect(myFunction()).toBe('hello')
})

test('stringToASCII converts a string to ASCII', () => {
    let myFunction = callbackReturnsHello()
    expect(wordToASCII('a')).toBe(97)
})

test('converts all elements to equal jon', () => {
    let myFunction = callbackReturnsHello()
    expect(jonify(['a', 'b', 'c'])).toStrictEqual(['jon', 'jon', 'jon'])
})

test('splits a string to an array and makes all elements equal their ascii', () => {
    expect(asciify('hello')).toStrictEqual([104, 101, 108, 108, 111])
})

test('sums up all elements in the array', () => {
    expect(sumArray([1, 2, 3])).toStrictEqual(6)
})

test('sums up all even elements in the array', () => {
    expect(sumEvenArray([1, 2, 3, 4, 5, 6])).toStrictEqual(12)
})