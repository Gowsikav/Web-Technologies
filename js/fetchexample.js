console.log("before");
async function getImage() {
    console.log("fetch started");

    await fetch("https://m.media-.com/images/G/01/msa/vowels/metrics.jpg")
        .then(() => console.log("response received"))
        .catch(() => console.log('Error fetching image:'));
    console.log("fetch completed");
}

console.log("before fetch call");
getImage();

console.log("after fetch call");




