function tagFunction(array, ...args) {
    console.info(array);
    console.info(args);
}

test('tag function', () => {
    const name = 'TagFunction';
    const lastname = 'Try And Error';

    tagFunction`Hello ${name} ${lastname}!`;
})

test('tag function sql', () => {
    const name = 'Jhon';
    const age = 24;

    tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
})