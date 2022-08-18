type World = "world"
type Greeting = `Hello ${World}`
type Greet<T extends  string | number | boolean | null | undefined | bigint> = `Hello ${T}`
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
const sku:SKU = "iphone-16G-official"

type KANKE<T extends  string > = `${Uppercase<T>}`
const kanke:KANKE<"kanke"> = "KANKE"

type Include<T extends string, K extends string> = T extends `${infer _R1}${K}${infer _R2}` ? true : false
type IncludeRes1 = Include<'kanke', 'kan'>; // 返回什么类型
type IncludeRes2 = Include<'aliang', 'kan'>; // 返回什么类型
