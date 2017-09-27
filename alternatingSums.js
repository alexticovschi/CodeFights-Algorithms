function alternatingSums(a) {
    let team1 = 0, team2 = 0;
    if(a.length !== 1) {
        a.map((num, index) => (index % 2 === 0) ? team1 += a[index]: team2 += a[index]);
        return [team1, team2];
    }
    return [a[0], team2];
}
