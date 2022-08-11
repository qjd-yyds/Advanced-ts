// ! 类型守卫
function foo(name: string | number) {
	if (typeof name === 'string') {
		name.replace('hello', 'world');
	} else {
		// 这里一定是一个number
		name.toFixed(2);
	}
}

// ? 但是如果把类型判断单独放到一个函数中
const isstring = (value: unknown) => typeof value === 'string';
// todo 使用is关键词来代替boolean
const isNumber = (value: unknown): value is number => typeof value === 'number';
function foo2(name: string | number) {
	if (isstring(name)) {
		// 无法判断他的类型
	}
  // 这里判断出来了他的类型，如果为true使用number的方法，如果为false使用string的方法
  if(isNumber(name)) {
    name.toFixed(2)
  }else{
    name.toLocaleUpperCase()
  }
}
