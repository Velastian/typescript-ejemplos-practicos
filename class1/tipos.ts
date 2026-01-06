// Inferencia
// Como a y b infieren que son numeros sin decir nada
const a = 1
const b = 3
const c = a + b // c tambien sera numero

// functions

// Primera forma de usar los tipos de datos en una funcion
// function saludar({name, age}: {name: string, age: number}){
//   console.log(`hola ${name} y tienes ${age} años.`)
// }
// saludar({name: 'pepe', age: 22})

// Segunda forma de usar los tipos de datos en una funcion
// function saludar(persona: {name: string, age: number}){
//   const {name, age} = persona
//   console.log(`hola ${name} y tienes ${age} años.`)
// }
// saludar({name: 'pepe', age: 22})

// Tercera forma de usar los tipos de datos en una funcion "Con arrow function"
const sayHiFromFunction = (fn: (name: string) => void ) => {
  return fn('Miguel')
}

const sayHi = (name: string) => {
  console.log(`Hola ${name}`)
}

sayHiFromFunction(sayHi)

// Tipar arrow function

// Primera forma (recomendada)
const sumar = (a: number, b: number): number =>{
  return a + b
}
// Segunda forma
const resta: (a: number, b: number) => number = (a,b) => {
  return a - b
}

// "Never" no devuelve nada
function throwError(message: string): never {
  throw new Error(message);
}

//Arrays
const avengers = ['spiderman', 'hulk', 'ironman']

avengers.forEach(avenger => {
  console.log(avenger.toUpperCase())
})

// Type alias
// type Hero = {
//   name: string,
//   age: number
// }

// let hero: Hero = {
//   name: 'thor',
//   age: 1500
// }

// function createHero (name: string, age: number): Hero {
//   return {
//     name, age
//   }
// }

// const thor = createHero('thor', 1500)

// Optional properties

//Template union type
// type HeroID = `${string}-${string}-${string}-${string}-${string}`

// type Hero = {
//   readonly id?: HeroID,
//   name: string,
//   age: number,
//   isActive?: boolean
// }

// let hero: Hero = {
//   name: 'thor',
//   age: 1500
// }

// function createHero (hero: Hero): Hero {
//   const { name, age } = hero
//   return { 
//     id: crypto.randomUUID(), 
//     name, 
//     age, 
//     isActive: true 
//   }
// }

// const thor = createHero({name:'thor', age:1500})

// console.log(thor.isActive)

// Unions Types
// type HeroID = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universe' | 'unknown'


// type Hero = {
//   readonly id?: HeroID,
//   name: string,
//   age: number,
//   isActive?: boolean
//   powerScale?: HeroPowerScale
// }

// let hero: Hero = {
//   name: 'thor',
//   age: 1500
// }

// function createHero (hero: Hero): Hero {
//   const { name, age } = hero
//   return { 
//     id: crypto.randomUUID(), 
//     name, 
//     age, 
//     isActive: true 
//   }
// }

// const thor = createHero({name:'thor', age:1500})
// thor.powerScale = 'galactic'

// Intersection Type
// type HeroID = `${string}-${string}-${string}-${string}-${string}`
// type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universe' | 'unknown'
// type HeroBasicInfo = {
//   name: string,
//   age: number,
// }

// type HeroProperties = {
//   readonly id?: HeroID,
  
//   isActive?: boolean
//   powerScale?: HeroPowerScale
// }

// type Hero = HeroBasicInfo & HeroProperties

// let hero: Hero = {
//   name: 'thor',
//   age: 1500
// }

// function createHero (input: HeroBasicInfo): Hero {
//   const { name, age } = input
//   return { 
//     id: crypto.randomUUID(), 
//     name, 
//     age, 
//     isActive: true 
//   }
// }

// const thor = createHero({name:'thor', age:1500})
// thor.powerScale = 'galactic'

// Type Indexing
// type HeroProperties = {
//   isActive?: boolean;
//   address: {
//     planet: string,
//     city: string,
//   }
// }

// const addressHero: HeroProperties['address'] = {
//   planet: 'Earth',
//   city: 'Managua'
// }

// const address = {
//   planet: 'Earth',
//   city: 'Managua'
// }

// type Address = typeof address

// const AdressTwitch: Address = {
//   planet: 'Earth',
//   city: 'Managua'
// }

// Type from function return
function createAddress() {
  return {
    planet: 'Earth',
    city: 'León'
  }
}

type Address = ReturnType<typeof createAddress>


// Arrays
// Primera forma (Recomendada)
const languages: (string | number)[] = []
// Segunda forma
// const languages: Array<string> = []
languages.push('Javascript')
languages.push('Typescript')
languages.push(2)

//Ejemplo con Hero
type HeroID = `${string}-${string}-${string}-${string}-${string}`
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universe' | 'unknown'
type HeroBasicInfo = {
  name: string,
  age: number,
}

const heroesWithBasicInfo: HeroBasicInfo[] = []

// Gane X & 0
// Tuples
type CellValue = 'X' | '0' | ''
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
]

const gameBoard: GameBoard = [
  ['X', '0', 'X'], 
  ['0', 'X', '0'], 
  ['X', '', '0']
]

type RGB = [number, number, number]
const rgb: RGB = [255, 255, 0]
