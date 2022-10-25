var hero = {
    name: 'chapulin',
    weapon: 'chipote chillon',
    hair: 'antenas',
    Iam: function() {
return " soy el " + this.name
+ " mi arma es un " + this.weapon +
" y uso mis " + this.hair
    }

}
console.log(hero.name);
console.log(hero.weapon);
console.log(hero.hair);

console.log(hero.Iam());

