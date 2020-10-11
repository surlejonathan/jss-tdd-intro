const capitalizeFirstLetters = (string) => {
    return string.length > 0 ?
    string.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" "):
    '';
}

module.exports = capitalizeFirstLetters;