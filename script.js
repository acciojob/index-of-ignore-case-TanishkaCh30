function indexOfIgnoreCase(str, subStr) {
  if (subStr === "") {
        return 0; // If subStr is empty, return 0 (first occurrence)
    }
    if (str === "" || subStr.length > str.length) {
        return -1; // If str is empty or subStr is longer than str, return -1
    }

    // Convert both strings to lower case for case-insensitive comparison
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();

    // Use indexOf to find the first occurrence of lowerSubStr in lowerStr
    return lowerStr.indexOf(lowerSubStr);
}
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(str, subStr));
