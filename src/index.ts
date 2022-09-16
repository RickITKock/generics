/* Copyright (c) 2021 Rick Kock

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnything(["a", "b", "c"]);

// Example of generics with functions

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(["a", "b", "c"]);

// Genric Constraints

class Car {
  print() {
    console.log("I am a car");
  }
}

class House {
  print() {
    console.log("I am a house");
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
