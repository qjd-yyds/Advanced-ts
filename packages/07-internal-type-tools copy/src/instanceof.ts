// ! 可以使用instanceof 收缩类型
class FooBase {}

class BarBase {}

class Foo extends FooBase {
	fooOnly() {}
}
class Bar extends BarBase {
	barOnly() {}
}
function handle(params: Foo | Bar) {
	if (params instanceof FooBase) {
		params.fooOnly();
	}
}

export {};
