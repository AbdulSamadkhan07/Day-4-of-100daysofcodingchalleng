// DAY 04  OF 100daysofcodingchallenge
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Question 18
// Store the locations in a array
var placesToVisit = ["china", "London", "New York", "Germany", "Japan"];
// Print your array in its original order.
console.log("Original Order:", placesToVisit);
// Print array in alphabetical order without modifying the actual list
console.log("Alphabetical Order:", __spreadArray([], placesToVisit.slice().sort(), true));
// Show that the original order is still intact
console.log("Original Order After Alphabetical Sorting:", placesToVisit);
// Print array in reverse alphabetical order without changing the order of the original list
console.log("Reverse Alphabetical Order:", __spreadArray([], placesToVisit.slice().sort().reverse(), true));
// Show that the original order is still intact
console.log("Original Order After Reverse Alphabetical Sorting:", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("Back to Original Order:", placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
// Question 19
var invitation = ["Azam", "Aqib"];
var count_invitation = invitation.length;
//print a message indicating the number of people you are inviting to dinner.
console.log((count_invitation), "People Will come to the Dinner.");
