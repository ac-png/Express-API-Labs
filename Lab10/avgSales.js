const fs = require("fs");

let total = 0;

fs.readFile("./JSONfiles/games.JSON", "utf8", (err, jsonString) => {
    if (err) {
        console.log("Error reading file from disk:", err);
        return;
    }
    try {
        const games = JSON.parse(jsonString);
        for (let i = 0; i < games.length; i++) {
            newTotal = total + games[i].copies_sold;
        }
        average = newTotal / games.length;
        console.log("The average sales is", average);
    } catch (err) {
            console.log("Error parsing JSON string:", err);
    }
});