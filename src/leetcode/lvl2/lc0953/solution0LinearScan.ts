const CHAR_CODE_LOWER_A: number = "a".charCodeAt(0)

function isAlienSorted(words: string[], order: string): boolean {
    // sanity check
    if (!words.length) return false

    const lenOrder = order.length
    const dict = new Array<number>(26).fill(0)
    for (let i = 0; i < lenOrder; ++i)
        dict[order.charCodeAt(i) - CHAR_CODE_LOWER_A] = i;

    const len = words.length

    for (let i = 1; i < len; ++i)
        if (isBigger(words[i - 1], words[i], dict))
            return false

    return true
};

function isBigger(prevWord: string, curWord: string, dict: number[]): boolean {
    const len1: number = prevWord.length
    const len2: number = curWord.length
    const len: number = Math.min(len1, len2)

    for (let i = 0; i < len; ++i) {
        const ch1: string = prevWord.charAt(i)
        const ch2: string = curWord.charAt(i)
        if (ch1 == ch2) continue;
        return dict[prevWord.charCodeAt(i) - CHAR_CODE_LOWER_A] > dict[curWord.charCodeAt(i) - CHAR_CODE_LOWER_A]
    }

    return len1 > len2
}