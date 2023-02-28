require('fs').writeFile('file.json', JSON.stringify("1"), (error) => {
    if (error) {
        throw error;
    }
});