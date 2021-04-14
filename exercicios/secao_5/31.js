const negativos = nums => {
    let neg = 0
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] < 0) {
            neg++
        }
    }

    return neg
}

console.log(negativos([0, 3, -4, 5, -3]))