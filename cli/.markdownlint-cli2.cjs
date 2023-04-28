module.exports = function() {
    console.log("CDW:", process.cwd())
    return {
        "config": {
            "MD032": false,
            "no-multiple-blanks": false
        }
    }
};