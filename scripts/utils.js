export function titleToFilename(title) {
    return (title.toLowerCase()
        .replace(/\+/g, "plus")
        .replace(/^\./, "dot-")
        .replace(/\.$/, "-dot")
        .replace(/\./g, "-dot-")
        .replace(/^&/, "and-")
        .replace(/&$/, "-and")
        .replace(/&/g, "-and-")
        .replace(/[ !’]/g, ""));
}
