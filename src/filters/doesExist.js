module.exports = function(programs, group) {
  let existingGroups = [];

  programs.map(program => {
    let currentGroup = program.name;

    if (!existingGroups.includes(currentGroup)) {
      existingGroups.push(currentGroup);
    }
  })

  if (existingGroups.includes(group)) {
    return true;
  }
  return false;
}