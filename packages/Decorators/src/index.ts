function AddMethods(): ClassDecorator {
    return (target: any) => {
        target.prototype.myMethods = () => {
            console.log("这是我的一个方法")
        }
        target.staticMethod = () => {
            console.log("这是静态方法")
        }
    }
}

function AddProperty(value: string): ClassDecorator {
    return (target: any) => {
        target.prototype.name = value
    }
}

@AddProperty("lilei")
@AddMethods()
class Foo {
    a = 1
}

let foo: any = new Foo()
foo.myMethods()
Foo.staticMethod()
console.log(foo.name)

// 返回一个新的子类
const overrideBar = (target: Bar) => {
    return class extends target {
        print() {
            console.log("重写")
        }
    }
}

@overrideBar
class Bar {
    print() {
        console.log("画画")
    }
}

let bar = new Bar()
bar.print()

// 方法装饰
class Fet {
    @ComputeProfiler()
    async fetch() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('RES');
            }, 3000);
        });
    }
}
// 方法装饰器
function ComputeProfiler(): MethodDecorator {
    const start = new Date()
    return (_target, methodIdentifier, descriptor) => {
        const originalMethodImpl = descriptor.value! // 保存原来的逻辑
        descriptor.value = async function (...args: unknown[]) {
            const res = await originalMethodImpl.apply(this, args)
            const end = new Date()
            console.log(`${String(methodIdentifier)} Time:${end.getTime() - start.getTime()}`)
            return res
        }
    }
}
const fet = new Fet()
fet.fetch().then(res => {
    console.log(res)
})
// 访问器装饰器，只能应用一对getter和setter的其中一个