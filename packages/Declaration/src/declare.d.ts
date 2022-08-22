/// <reference path="fs.d.ts" />
declare var f: () => void

declare interface Foo {
    props: string
}

declare function foo(input: Foo): Foo

declare class Foo {
}

declare var job: {
    run: boolean;
    swim: string;
}

declare module "pkg" {
    const handler: () => boolean;
    export default handler
}
declare module "*.md" {
    const raw: string
    export default raw
}

interface Window {
    useTracker:(...args:any[]) => Promise<void>
}