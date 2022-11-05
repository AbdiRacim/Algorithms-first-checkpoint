function sort(arr) {
    //number of elements in the array
    var len = arr.length;       
    var tmp, i, j;                  
    
    for(i = 1; i < len; i++) {
      //store current value 
        tmp = arr[i]
        j = i - 1
        while (j >= 0 && arr[j] > tmp) {
        //move the number 
        arr[j+1] = arr[j]
        j--
        }
      //Inserts the temporary value at position
      //correct in the sorted part.
        arr[j+1] = tmp
    }
    return arr
    }
    var arr = [5, 8, 11, 6, 1, 9, 3];
    sort(arr);
    console.log("here is our final array for the solution one: ",arr);



//TODO Another Solution for this Checkpoint !

    function insertionSort(arr1, n) 
{ 
    let i, key, j; 
    for (i = 1; i < n; i++)
    { 
        key = arr1[i]; 
        j = i - 1; 

        /* Move elements of arr1[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && arr1[j] > key)
        { 
            arr1[j + 1] = arr1[j]; 
            j = j - 1; 
        } 
        arr1[j + 1] = key; 
    } 
} 

// A utility function to print an array of size n 
function printArray(arr1, n) 
{ 
    let i; 
    for (i = 0; i < n; i++) 
        document.write(arr1[i] + " "); 
    document.write("<br>");
} 

// Driver code
    let arr1 = [12, 11, 13, 5, 6, 2 ]; 
    let n = arr1.length; 

    insertionSort(arr1, n); 
    printArray(arr1, n); 
    console.log("here is our final array for the second solution:",arr1," and the number of digits in this array is:",n);
