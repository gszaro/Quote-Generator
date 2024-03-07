// Define arrays containing different pieces of inspirational messages
const beginnings = ["Believe in yourself", "Dream big", "Stay positive"];
const middles = ["and never give up", "because you are capable of great things", "and make it happen"];
const endings = ["you'll achieve your dreams", "the world is yours", "greatness awaits you"];

// Function to generate a random message
function generateMessage() {
    // Generate random indices for each array
    const beginIndex = Math.floor(Math.random() * beginnings.length);
    const middleIndex = Math.floor(Math.random() * middles.length);
    const endIndex = Math.floor(Math.random() * endings.length);
    
    // Construct the message by combining random elements from each array
    const message = `${beginnings[beginIndex]} ${middles[middleIndex]} ${endings[endIndex]}`;
    
    // Return the generated message
    return message;
}

// Call the function to generate and display a random message
console.log(generateMessage());