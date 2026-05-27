const temparature = 20

if (temparature < 0) {
    console.log("It's freezing!")
}

else if (temparature >= 0 && temparature <= 15) {
    console.log("It's cold")
}

else if (temparature >= 16 && temparature <= 25) {
    console.log("It's mild")
}

else {
    console.log("It's warm")
}