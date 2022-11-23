function managerEntries(entry = []) {
    return [...entry, require.resolve("./preset/manager.tsx")];
}

module.exports = {
    managerEntries
};