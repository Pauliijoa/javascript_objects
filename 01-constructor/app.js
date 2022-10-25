function Hero (name){
    this.name = name
    this.sayName = function(){
        return  " mi nombre " + this.name 
    }
}
const names =['chapulin','stuart','kevin','doctor nefario','vector']
const heroes = []
//for(let i=0; < name.lenght; i++){}// una forma mas// 

 names.forEach((name) => {
    heroes.push(new Hero(name))
 })
 

 heroes.forEach((hero) => {
    console.log(hero.sayName());
 })
