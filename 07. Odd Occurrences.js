function solve(input) {
    const words = {};

    input.split(' ').forEach(word => {
        word = word.toLowerCase()
        if (!words.hasOwnProperty(word)) {
            words[word] = 0;
        }
        words[word] += 1;

    });
    let result = [];
    for (const word in words) {
        if (words[word] % 2 !== 0) {
            result.push(word);
        }
    }

    console.log(result.join(' '));
}
    solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
    solve('Cake IS SWEET is Soft CAKE sweet Food')