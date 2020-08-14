// 斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
// F(0) = 0, F(1) = 1
// F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
// 给定 N，计算 F(N)。
//
// 示例 1：
// 输入：2
// 输出：1

const fib = function (N) {
    if (N === 0 || N === 1) return N
    const dp = new Array(N + 1)
    dp[0] = 0
    dp[1] = 1
    for (let i = 2; i <= N; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[N]
};

const res = fib(3)
console.log(res)


