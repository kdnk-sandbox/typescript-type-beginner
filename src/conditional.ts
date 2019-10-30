// https://stackoverflow.com/questions/56577201/why-is-isolatedmodules-error-fixed-by-any-import
export {}

type None = { type: 'None' };
type Some<T> = { type: 'Some'; value: T };
type Option<T> = None | Some<T>;

type ValueOfOption<V extends Option<unknown>> = V extends Some<infer R> ? R : undefined;

// T1は number | undefined となる
type T1 = ValueOfOption<Option<number>>;

const val1: T1 = 123;
const val2: T1 = undefined;
console.log("val1: ", val1);
console.log("val2: ", val2);

type NoneToNull<V extends Option<unknown>> = V extends Some<unknown> ? V : null;
type T2 = NoneToNull<Option<number>>;

type T3 = Option<number> extends Some<infer R> ? R : undefined;
const val3: T3 = undefined;
// const val4: T3 = 124;


// mapped typeのunion distribution

// { [P in keyof T]: X }

type Arrayify<T> = { [P in keyof T]: Array<T[P]> };
type Foo = { foo: string };
type Bar = { bar: number };

type FooBar = Foo | Bar;

type A = Arrayify<Foo>

type FooBarArr = Arrayify<FooBar>;
const val4: FooBarArr = { foo: ['f', 'o', 'o'] };
const val5: FooBarArr = { bar: [0, 1, 2] }
// const val6: FooBarArr = {};


type FooBarArr2 = { [P in keyof FooBar]: Array<FooBar> };
const val7: FooBarArr2 = {};


// mapped typeと配列型

type NumArr = number[];
type StrArr = { [P in keyof NumArr]: string }
declare const a: StrArr;

const _ = a[0];
// a.forEach(val => {
//   console.log(val)
// })

type Strify<T> = { [P in keyof T]: string }
type StrArr2 = Strify<NumArr>
const arr: StrArr2 = ['foo', 'bar'];
arr.forEach(val => console.log(val));
