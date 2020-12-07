export function getHint(secret: string, guess: string): string {
    // sanity check
    if (!secret || !guess || secret.length != guess.length)
        return ""

    const len: number = secret.length

    const freqs: number[] = new Array<number>(10).fill(0)

    let bulls = 0
    let cows = 0

    for (let i = 0; i < len; ++i) {
        const chS: string = secret.charAt(i)
        const chG: string = guess.charAt(i)

        if (chS == chG) ++bulls
        else {
            if (freqs[+chS]++ < 0) ++cows
            if (freqs[+chG]-- > 0) ++cows
        }
    }

    return `${bulls}A${cows}B`
}