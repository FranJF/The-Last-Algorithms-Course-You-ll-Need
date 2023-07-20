/*
Busqueda lineal.
Es un algoritmo muy simple, pero no es muy eficiente para listas grandes.
Complejidad: O(n).

Se trata de un algoritmo que recorre una lista de elementos desde el primero hasta el ultimo.
Si el elemento buscado se encuentra en la lista, la busqueda termina con exito.
Si el elemento buscado no se encuentra en la lista, la busqueda termina sin exito.
*/
export default function linear_search(haystack: number[], needle: number): boolean {

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            return true;
        }
    }

    return false;

}
