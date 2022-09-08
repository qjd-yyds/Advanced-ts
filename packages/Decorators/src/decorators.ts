export enum METADATA_KEY {
    METHOD = 'ioc:method',
    PATH = 'ioc:path',
    MIDDLEWARE = 'ioc:middleware',
}

export enum REQUEST_METHOD {
    GET = "ioc:get",
    POST = "ioc:post",
}

export const Controller = (path?: string): ClassDecorator => {
    return (target) => {
        Reflect.defineMetadata(METADATA_KEY.PATH, path ?? '', target);
    };
};

export const methodDecoratorFactory = (method: string) => {
    return (path: string): MethodDecorator => {
        return (_target, _key, descriptor) => {
            // 在方法实现上注册 ioc:method - 请求方法 的元数据
            Reflect.defineMetadata(METADATA_KEY.METHOD, method, descriptor.value!);
            // 在方法实现上注册 ioc:path - 请求路径 的元数据
            Reflect.defineMetadata(METADATA_KEY.PATH, path, descriptor.value!);
        }
    }
}
export const Get = methodDecoratorFactory(REQUEST_METHOD.GET);
export const Post = methodDecoratorFactory(REQUEST_METHOD.POST);