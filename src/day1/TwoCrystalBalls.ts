// Dos bolas de cristal, infinitos pisos, una de ellas es frágil y se rompe al caer desde un piso determinado.
// ¿Cuál es el piso más alto desde el que se puede tirar una bola sin romperla?
// Algoritmo: Saltos de raíz cuadrada
// Complejidad: O(sqrt(n))
// Entrada: Array de booleanos, true si se rompe, false si no
export default function two_crystal_balls(breaks: boolean[]): number {
    const jump = Math.floor(Math.sqrt(breaks.length));
    let i = jump;

    for (; i < breaks.length; i++) {
        if(breaks[i]) break;
    }

    i -= jump;

    for (; i < breaks.length; i++) {
        if(breaks[i]) return i;
    }

    return -1
}

