declare module 'storybook-router' {
    global {
        interface Window {
            location: any;
        }
    }
}

interface Element { }
interface Node { }
interface NodeListOf<TNode = Node> { }