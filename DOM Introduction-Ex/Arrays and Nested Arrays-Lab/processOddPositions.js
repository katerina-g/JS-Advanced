function oddPos(nums) {
    const filtered = nums.filter((v, i) => i % 2 === 1);
    const doubled = filtered.map(x => x * 2);
    return doubled.reverse().join(' ');
}

console.log(oddPos([3, 0, 10, 4, 7, 3]));