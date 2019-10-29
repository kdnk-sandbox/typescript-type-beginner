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
