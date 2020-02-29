function answer_confirm(answer) {
    let result="";
    if (answer) {
        result="OK! Let's go";
    } else {
        result="Thank God";
    }
    return result;
}

let answer=confirm('Do you want to go out with me tonight ?');
alert(answer_confirm(answer));
