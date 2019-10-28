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

// =================================


type None = { type: 'None' };
type Some<T> = { type: 'Some'; value: T };
type Option<T> = None | Some<T>;

type ValueOfOption<V> = V extends Some<infer R> ? R : undefined;
const opt1: Some<number> = { type: 'Some', value: 123 }
const val1: ValueOfOption<typeof opt1> = opt1.value;

const opt2: None = { type: 'None' };
const val2: ValueOfOption<typeof opt2> = undefined;
