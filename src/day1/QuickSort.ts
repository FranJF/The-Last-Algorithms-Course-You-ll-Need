/*
Quick Sort es un algoritmo de ordenamiento que utiliza la tecnica de divide y venceras. 
Complejidad: O(n log n).

Es un algoritmo recursivo que divide una lista en dos partes, una con los elementos menores
y otra con los elementos mayores. Luego ordena las dos partes de forma recursiva.
Se utiliza un elemento pivote para realizar la particion de la lista.
*/

function qs(arr: number[], left: number, right: number): void {
    if (left < right) {
        const pivot: number = partition(arr, left, right);
        qs(arr, left, pivot - 1);
        qs(arr, pivot + 1, right);
    }
}

function partition(arr: number[], left: number, right: number): number {
    const pivot = arr[right];
    let idx = left - 1;

    for (let i = left; i < right; i++) {
        if (arr[i] <= pivot) {
            idx++;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }

    idx++;
    arr[right] = arr[idx];
    arr[idx] = pivot;

    return idx
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
