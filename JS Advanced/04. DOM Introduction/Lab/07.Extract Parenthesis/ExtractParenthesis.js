function extract(id) {
    let contentParagraph = document.getElementById(id);
    let matches = contentParagraph.textContent
        .matchAll(/\((?<name>[^\)]+)\)/g);

    let result = [];

    for (let match of matches) {
        result.push(match.groups.name);
    }

    contentParagraph.textContent = result.join('; ');
}