const LETTERS = '0123456789ABCDEF';

export function getRandomColor():string {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += LETTERS[Math.floor(Math.random() * 16)];
    }
    return color;
}