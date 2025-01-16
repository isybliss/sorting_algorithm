const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
    event.preventDefault();

    //console.log([...document.getElementsByClassName("values-dropdown")]);...HTMLCollection

    //change to array using sprad operator and get the values of each class as a number into an array using map()
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => Number(dropdown.value));

    //console.log(inputValues);...array

    //const sortedValues = bubbleSort(inputValues);
    //const sortedValues = selectionSort(inputValues);
    //const sortedValues = insertionSort(inputValues);
    
    const sortedValues = inputValues.sort((a, b) => {
       return a - b;
       //since i want it to be sorted in ascending order(small to large),
       //if a is smaller, it returns negative and puts a before b
       //if b is smaller value, it returns positive and put b before a
    });
    
    updateUI(sortedValues);
};

//update the display with the sorted numbers
const updateUI = (array = []) => {
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num;
    })
};

const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            //console.log(array, array[j], array[j+1]);
            if (array[j] > array[j+1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
};

const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            //console.log(array, array[j], array[minIndex]);
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }

    return array;
};

const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        const currValue = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > currValue){
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = currValue;
    }
    return array;
};

sortButton.addEventListener("click", sortInputArray)


//Note
/**
 * Because buttons associated with a form element submit by default, 
 * Call event.preventDefault() in your function to prevent default submission.
 * 
 * .getElementsByClassName() method returns an HTMLCollection: an array-like object of all the elements that have a matching class name. 
 * EG HTMLCollection(5) [select.values-dropdown, select.values-dropdown, select.values-dropdown, select.values-dropdown, select.values-dropdown, values: select.values-dropdown]
 * Spread operator is used to convert it into an array ie [...htmlcollection]
 * EG (5) [select.values-dropdown, select.values-dropdown, select.values-dropdown, select.values-dropdown, select.values-dropdown]
 * 
 * (array = []) fallback value of array used as a parameter
 * 
 * Bubble sort iterates through an array, comparing the current element with the next element.
 * if the current element is larger than the next element, it is swapped.
 * 
 * Selection sort works by finding the smallest value in the array, then swapping it with the first value in the array. 
 * Then, it finds the next smallest value in the array, and swaps it with the second value in the array. 
 * It continues iterating through the array until it is completely sorted.
 * It relies on tracking the index of the smallest value in the array
 * 
 * Insertion sort algorithm works by building up a sorted array at the beginning of the list. 
 * It begins the sorted array with the first element.
 * Then it inspects the next element and swaps it backward into the sorted array until it is in a sorted position, and so on.
 * An insertion sort algorithm starts the sort at the beginning of the list, meaning the first element is already sorted
 * 
 * array.sort() is a built-in method used to sort elements of an array. 
 * It works straightforward for single digits and not as expected with complex values eg 10
 * 
 * Notice how the number 10 is placed at the beginning of the array. 
 * This is because the default behavior of .sort() is to convert the numbers values to strings, and sort them alphabetically. 
 * And "10" comes before "2" alphabetically.
 * To fix this, you can pass a callback function to the .sort() method. 
 * The callback function has two parameters - for yours, use a and b. 
 * The parameters of a and b represent the number values in the array that will be sorted.
 * 
 * The callback to .sort() should return a number. That number determines how to sort the elements a and b:

    If the number is negative, sort a before b.
    If the number is positive, sort b before a.
    If the number is zero, do not change the order of a and b.

    since it is in ascending order (small to big), it will be put as a - b   
*/