// console.log("¡Hola desde TypeScript!");
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
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
// class Empleado {
//   nombre: string;
//   private salario: number;
//   constructor(nombre: string, salario: number) {
//     this.nombre = nombre;
//     this.salario = salario;
//   }
//   public obtenerSalario(): number {
//     return this.salario;
//   }
// }
// class Manager extends Empleado {
//   private subordinados: Empleado[] = [];
//   constructor(nombre: string, salario: number) {
//     super(nombre, salario);
//   }
//   public agregarSubordinado(subordinado: Empleado) {
//     this.subordinados.push(subordinado);
//   }
//   public obtenerSubordinados(): Empleado[] {
//     return this.subordinados;
//   }
// }
// const manager = new Manager("Juan", 1000);
// console.log(manager.nombre);
function logConstructor(constructor) {
    console.log("Clase registrada:", constructor.name);
}
var EjemploConDecorador = function () {
    var _classDecorators = [logConstructor];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var EjemploConDecorador = _classThis = /** @class */ (function () {
        function EjemploConDecorador_1() {
            console.log("Instancia creada de EjemploConDecorador");
        }
        return EjemploConDecorador_1;
    }());
    __setFunctionName(_classThis, "EjemploConDecorador");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        EjemploConDecorador = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return EjemploConDecorador = _classThis;
}();
var instancia = new EjemploConDecorador();
// "Clase registrada: EjemploConDecorador"
// "Instancia creada de EjemploConDecorador"
