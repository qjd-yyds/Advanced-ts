// @ts-nocheck 这样所有的代码都不会有代码审查
// @ts-ignore 注释下一行的类型提示
const name: string = 123;
// @ts-expect-error 只有在下一行真的存在错误类型才能使用，如果使用了，那么会报错
const age: string = 25
const test: string = 123