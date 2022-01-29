function wordsUpper(text) {
    const pattern = /[\w]+/g;
    let result = text.match(pattern);
    console.log(result.join(', ').toUpperCase());
}
wordsUpper('Hi, how are you?')