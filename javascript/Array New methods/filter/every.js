
// some() method
let score = [85,72,67,90]
let hasGradeA = score.some((x)=> x>85)
console.log(hasGradeA)  // true

// every() method

// let hasPassed = score.every((x)=> x>=50) // true
let hasPassed = score.every((x)=> x>=70)
console.log(hasPassed)  // false