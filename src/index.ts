// console.log("¡Hola desde TypeScript!");

// var nombre: string = "Juan";

// let edad = 25;
// const nombre = "Juan";

// console.log(edad, nombre);

// function ejemploVar() {
//   for (var i = 0; i < 3; i++) {
//     // i es function-scoped
//   }
//   console.log("i después del for (con var):", i); // i sigue accesible aquí
// }

// function ejemploLet() {
//   for (let j = 0; j < 3; j++) {
//     // j es block-scoped
//   }
//   console.log("j después del for (con let):", j); // Error, j no está definida fuera del bloque
// }

// ejemploVar();
// ejemploLet();

// const nombre: string = "Juan";
// const edad: number = 25.5;
// const casado: boolean = false;
// const varNull: null = null;
// const varUndefined: undefined = undefined;
// const varSymbol: symbol = Symbol("mi-simbolo");
// const varBigInt: bigint = 1234567890123456789012345678901234567890n;

// function suma(a: number, b: number): number | string {
//   if (b) {
//     return a / b;
//   }
//   return "Error: no se puede dividir por 0";
// }

// console.log(suma(1.23, 0));

// const suma = (a: number, b: number): number | string => {
//   if (b) {
//     return a / b;
//   }
//   return "Error: no se puede dividir por 0";
// };

// console.log(suma(1.23, 1));

// interface Persona {
//   nombre: string;
//   edad: number;
//   direccion?: string;
// }

// interface Empleado extends Persona {
//   salario: number;
// }

// const dedscribirPersona = (persona: Persona) => {
//   console.log(persona.nombre, persona.edad);
//   if (persona.direccion) {
//     console.log(persona.direccion);
//   }
// };

// console.log(
//   dedscribirPersona({ nombre: "Juan", edad: 25, direccion: "Calle Falsa 123" })
// );

// type Punto2D = number | string;

// type Punto2D = {
//   x: number;
//   y: number;
// };

// type Punto3D = Punto2D & {
//   z: number;
// };

// type Fn = (a: number, b: number) => number;

class Empleado {
  nombre: string;
  private salario: number;

  constructor(nombre: string, salario: number) {
    this.nombre = nombre;
    this.salario = salario;
  }

  public obtenerSalario(): number {
    return this.salario;
  }
}

class Manager extends Empleado {
  private subordinados: Empleado[] = [];

  constructor(nombre: string, salario: number) {
    super(nombre, salario);
  }

  public agregarSubordinado(subordinado: Empleado) {
    this.subordinados.push(subordinado);
  }

  public obtenerSubordinados(): Empleado[] {
    return this.subordinados;
  }
}

const manager = new Manager("Juan", 1000);

console.log(manager.nombre);
