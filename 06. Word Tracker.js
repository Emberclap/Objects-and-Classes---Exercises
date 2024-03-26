function solve(input) {
    const wordTracker = {};
    const words = input.shift().split(' ');
    words.forEach(element => {
        wordTracker[element] = 0;
    });
    input.forEach(element => {
        if (wordTracker.hasOwnProperty(element)){
            wordTracker[element] += 1;
        }
        
    });
    Object.entries(wordTracker)
    .sort((a, b) => b[1] - a[1]).forEach(([word, counter]) => console.log(`${word} - ${counter}`));

}
solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])
solve([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])