/**
 * write a function that returns the majority element.
 * The majority element is the element that appears more than other element.
 * READ EXAMPLE BELOW!

console.log(majorityElement([3, 2, 3])); // Output: 3 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 

 * You may assume that the majority element always exists in the array.

 * Returns the majority element from the input array of integers.

 * @param {number[]} nums - The input array of integers.
 * @return {number} Returns the majority element.
 */
function majorityElement(nums) {
    const numberMajority = {}
    nums.forEach((number) => {
        if (!numberMajority[number]) {
            numberMajority[number] = 0
        }

        numberMajority[number]++
    })


    const arr = Object.entries(numberMajority);
    let elementNumber = arr[0];

    for (let i = 1; i< arr.length; i++) {
        if (arr[i][1] > elementNumber[1]) {
            elementNumber = arr[i];
        }
    } 


    
    console.log(numberMajority);
    console.log(arr);
    console.log(elementNumber);
    return elementNumber[0];
  }

console.log(majorityElement([3, 2, 3, 2])); // Output: 3 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 