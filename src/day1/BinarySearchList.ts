/* 
Se trata de un algoritmo de búsqueda binaria en una lista ordenada. No es el más eficiente, pero es el más sencillo de implementar.
Unicamente puede ser usado en listas ordenadas.
Complejidad: O(log n).

Funciona de la siguiente manera: divide la lista en dos mitades y comprueba si el elemento buscado está en la mitad izquierda o derecha.
Si está en la mitad izquierda, se repite el proceso en esa mitad, y si está en la derecha, se repite el proceso en esa mitad.
Se repite el proceso hasta que el elemento buscado se encuentra o hasta que la lista se reduce a cero.
Si el elemento buscado no se encuentra, se devuelve false.
Si el elemento buscado se encuentra, se devuelve true.
*/
export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const m = Math.floor(low + (high - low) / 2);
        const v = haystack[m];

        if (v === needle) {
            return true;
        } else if (v > needle) {
            high = m - 1;
        } else {
            low = m + 1;
        }

    } while (low < high);

    return false
}
