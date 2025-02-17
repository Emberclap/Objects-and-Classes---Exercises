function solve(input) {
    let heroes = [];
    input.forEach(element => {
        const [name, level, items] = element.split(' / ');
        const hero = {
            name,
            level: Number(level),
            items,
        }
        heroes.push(hero);
    });
    heroes.sort((a,b) => a.level - b.level)
    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])
solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])