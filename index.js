// Code your solutions in this file
// Function to generate thank you messages using a for loop
function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  // Function to count down using a while loop
  function countDown(n) {
    while (n >= 0) {
      console.log(n);
      n--;
    }
  }
  
  // Example usage of both functions
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
  countDown(10);  // Logs from 10 down to 0
  