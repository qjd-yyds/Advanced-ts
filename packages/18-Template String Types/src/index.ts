type World = "world"
type Greeting = `Hello ${World}`
type Greet<T extends string | number | boolean | null | undefined | bigint> = `Hello ${T}`
type Greet1 = Greet<123>
type Greet2 = Greet<599>
type Greet3 = Greet<true>
type Greet4 = Greet<"string">
type Greet5 = Greet<0x1fffffffffffffffffff>
type Greet6 = Greet<undefined>
type Greet7 = Greet<null>

type Greeting2 = `Hello ${string}`

const a: Greeting2 = `Hello 123`;
type Brand = 'iphone' | 'xiaomi' | 'honor';
type Memory = '16G' | '64G';
type ItemType = 'official' | 'second-hand';

type SKU = `${Brand}-${Memory}-${ItemType}`;
const sku: SKU = "iphone-16G-official"

type KANKE<T extends string> = `${Uppercase<T>}`
const kanke: KANKE<"kanke"> = "KANKE"

type Include<T extends string, K extends string> = T extends `${infer _R1}${K}${infer _R2}` ? true : false
type IncludeRes1 = Include<'kanke', 'kan'>; // 返回什么类型
type IncludeRes2 = Include<'aliang', 'kan'>; // 返回什么类型
type IncludeRes3 = Include<'', ''>; // 返回false 这个时候空字符串应该包含空字符串
type IncludeFirst<T extends string, K extends string> = T extends '' ? K extends '' ? true : false : T extends `${infer _R1}${K}${infer _R2}` ? true : false
type IncludeRes4 = IncludeFirst<'', ''>; // 返回false 这个时候空字符串应该包含空字符串
// 去除开头的空格,采用递归去除多个空格
type TrimLeft<T extends string> = T extends ` ${infer R}` ? TrimLeft<R> : T
// 去除尾部空格，采用递归去除多个空格
type TrimRight<T extends string> = T extends `${infer R} ` ? TrimRight<R> : T
type Trim<T extends string> = TrimLeft<TrimRight<T>>
let str1: Trim<"    sduas   hdasd   "> = "sduas   hdasd";

// 模拟Startwidth
type _StartWidth<Str extends string, Search extends string> = Str extends '' ? Search extends '' ? true : _StartWidth<Str, Search> : Str extends `${Search}${infer _R}` ? true : false
type StartsWithRes1 = _StartWidth<'linbudu', 'lin'>; // true
type StartsWithRes2 = _StartWidth<'linbudu', ''>; // true
type StartsWithRes3 = _StartWidth<'linbudu', ' '>; // false
type StartsWithRes4 = _StartWidth<'', ''>; // true
type StartsWithRes5 = _StartWidth<' ', ''>; // true

// 模拟替换字符串
type Replace<Str extends string, Search extends string, Replacement extends string> = Str extends `${infer L}${Search}${infer R}`
    ? `${L}${Replacement}${R}`
    : Str
type ReplaceStr1 = Replace<"看客","客","客真帅！">
// 来做题 实现一个replaceAll的类型?
type  ReplaceAll<Str extends string,Search extends string,Replacement extends string> = Str extends `${infer L}${Search}${infer R}`
    ? ReplaceAll<`${L}${Replacement}${R}`,Search,Replacement>
    : Str
type ReplaceStr2 = ReplaceAll<"看客客客客客客","客","真帅">

// kan-ke-s --> [kan,ke,s]
type Split<T> = T extends `${infer L}-${infer C}-${infer R}` ? [L,C,R] : []
type SplitRes = Split<"kan-ke-s">
// 字符串长度和分隔符不确定
type SuperSplit<Str extends string,Delimiter extends string> = Str extends `${infer L}${Delimiter}${infer R}` ? [L,...SuperSplit<R,Delimiter>] : Str extends Delimiter ? [] : [Str]
type SplitRes1 =  SuperSplit<"kan,ke",",">