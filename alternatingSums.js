function alternatingSums(a) {
    let team1 = [], team2 = [], arr = [], onePerson = [];
    
    function getSum(total, num) {
        return total + num;
    }
    if(a.length !== 1) {
        for(var i = 0; i < a.length; i++) {
          if (i % 2 === 0) {
              team2.push(a[i]);
          } else {
              team1.push(a[i]);
          }
        }
        team1 = team1.reduce(getSum);
        team2 = team2.reduce(getSum);
        arr.push(team2);
        arr.push(team1);
                
        return arr;
    } else {
        onePerson = a;
        onePerson.push(0);
        return onePerson;
    } 
}
