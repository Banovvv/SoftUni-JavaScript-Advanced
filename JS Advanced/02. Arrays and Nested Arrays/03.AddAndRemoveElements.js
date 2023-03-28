function addAndRemoveElements(commands) {
    let result = [];

    for (let i = 1; i <= commands.length; i++) {
        let command = commands[i - 1];

        if (command == 'add') {
            result.push(i);
        } else if (command == 'remove') {
            result.pop();
        }
    }

    if (result.length != 0) {
        result.forEach(element => {
            console.log(element);
        });
    } else {
        console.log('Empty');
    }
}

addAndRemoveElements(['add', 'add', 'add', 'add']);
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElements(['remove', 'remove', 'remove'])