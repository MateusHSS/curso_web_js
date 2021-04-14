const media = nums => {

    let media = 0

    for (let i = 0; i < nums.length; i++) {
        media += nums[i]
    }

    media /= nums.length

    return media

}

console.log(media([3, 4, 5, 10, 20]))