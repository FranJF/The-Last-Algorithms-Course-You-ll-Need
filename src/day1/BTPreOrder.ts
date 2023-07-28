function walk(current: BinaryNode<number>|null, arr: number[]): number[] {
    if (!current) {
        return arr;
    }
    arr.push(current.value);
    walk(current.left, arr);
    walk(current.right, arr);
    return arr;
}

export default function pre_order_search(head: BinaryNode<number>):number[] {
    return walk(head, []);
}
