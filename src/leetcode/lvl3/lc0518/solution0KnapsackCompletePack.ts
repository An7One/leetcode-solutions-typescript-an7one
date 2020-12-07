function coinChange(coins: number[], amount: number): number {
    let dp = new Array<number>(1 + amount).fill(1 + amount)
    dp[0] = 0

    for(let coin of coins){
        for(let faceValue = coin; faceValue <= amount; ++faceValue){
            dp[faceValue] = Math.min(dp[faceValue], 1 + dp[faceValue - coin])
        }
    }
    
    return dp[amount] >= 1 + amount ? -1 : dp[amount]
};