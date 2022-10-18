export class Animal {
    age: number;
    legs: number;
    name: string;

    constructor(age: number, legs: number, name: string){
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
}

//Child Class

export class Dog extends Animal {
    woof(): string{
    return 'WOOF WOOF'
    }
}

const dog = new Dog(4, 4, 'Nebula')
dog.name;
dog.woof();

export class Cat extends Animal {
    meow(): string{
        return 'MEOWWW'
    }
}

const cat = new Cat(8, 4, 'Bigotitos')
cat.age
cat.meow();