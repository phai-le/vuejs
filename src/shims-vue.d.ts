declare module "*.vue" {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

import { VNode } from 'vue';

declare global {
    namespace JSX {
        interface Element extends VNode { }
        interface ElementClass {
            $props: any;
        }
        interface IntrinsicElements {
            [elem: string]: any;
        }
    }
}