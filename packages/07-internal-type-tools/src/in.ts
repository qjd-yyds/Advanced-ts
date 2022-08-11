interface Foo {
	foo: string;
	fooOnly: boolean;
	diffType: string;
	shared: number;
}

interface Bar {
	bar: string;
	barOnly: boolean;
	diffType: number;
	shared: number;
}

function handle(input: Foo | Bar) {
	if ('foo' in input) {
		// 这个时候 input 是 Foo 类型
		input.foo;
	} else {
		// 这个时候 input 是 Bar 类型
		input.bar;
	}
  if(typeof input.diffType === "string") {
    input.foo // 不能使用简单的typeof判断
  }
}
