// =================================


// A ⊃ B

// const a: A = { foo: 'aa' }
// const b: B = { foo: 'b', bar: 1 }

// これはできない
// const c: A = {foo: 'b', bar: 1};
// const d: A = b;


type Func = (arg: number) => number;
interface MyObj {
    prop: string;
}

const a: number = 42;
const b: number | string = a;

const f = (x: number | string) => {};
const g: (x: number) => void = f;

const ff = (): number => 42;
const gg: () => number | string = ff;

const arr1: number[] = [42];
const arr2: (number | string)[] = ['aaa'];
arr2[0] = "foo";
console.log(arr1[0]);

// 双変
type Foo<T> = {};

const X: Foo<number> = {}
const Y: Foo<string> = X;

// 型強制

// nominal
// structual

// ============================================================

type None = { type: 'None' };
type Some<T> = { type: 'Some'; value: T };
type Option<T> = None | Some<T>;

type ValueOfOption<V> = V extends Some<infer R> ? R : undefined;
const opt1: Some<number> = { type: 'Some', value: 123 }
const val1: ValueOfOption<typeof opt1> = opt1.value;

const opt2: None = { type: 'None' };
const val2: ValueOfOption<typeof opt2> = undefined;


interface A {
  foo: string;
}

interface B {
  foo: string;
  bar: number;
}


// 文字列はstring | number型に代入可能
// const val1: string | number = 'foo';

// 数値もstring | number型に代入可能
// const val2: string | number = 123;

// それ以外はだめ（エラー）
// const val3: string | number = {foo: 'bar'};

function func(arg: string | number) {
  if ('string' === typeof arg) {
    console.log(arg.length);
  } else {
    console.log(arg * 10);
  }
}

function map<T, U>(opt: Option<T>, func: (value: T) => U ): Option<U> {
  if (opt.type === 'Some') {
    const newValue = func(opt.value);
    return { type: 'Some', value: newValue };
  } else {
    return { type: 'None' }
  }
}



