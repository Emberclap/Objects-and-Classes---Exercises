function solve(input) {
    let towns = {};
    input.forEach(element => {
        const [town, latitude, longitude] = element.split(' | ')
        towns = { town: town, latitude: Number(latitude).toFixed(2), longitude: Number(longitude).toFixed(2) }

        console.log(towns);
    });
}
solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])
solve(
    ['Plovdiv | 136.45 | 812.575'])