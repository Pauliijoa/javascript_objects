# objetos de javascript
hemos visto los objetos primitivos de javascript como:

- numbers
- boolean
- string
- symbols
- null
- undefined

otros elemnetos de javascript muy utilizados poero que no son primitivos, ya que tienen "superpoderes"(metodos) son los arreglos y son los objetos y son:

- arreglos
- objetos

Ejemplos

```javascript
var arr = []
var obj = {}
```
los arreglos se declaran utilizando
`[]` y los objetos se declaran con llaves `{}`.

los arreglos tienen sus elemtos ordenados por indice en cambio los objetos no tiene indice sus elemtos se rescatan u obtienes mediente 
**llaves**. Ejemplo 

``` javascript
var hero = {
    name: "thor",
    weapon: "martillo",
    hair: "rubio"
}
console.log(hero["name"])
console.log(hero["weapon"])
console.log(hero["hair"])
```

``` javascript
console.log(hero.name)
console.log(hero.weapon)
console.log(hero.hair)
```
















