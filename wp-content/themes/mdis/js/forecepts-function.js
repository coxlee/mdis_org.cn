
function winpopup(url, win_width, win_height) {
    sw = screen.width;
    sh = screen.height;

    x = Math.ceil((sw - win_width) / 2);
    y = Math.ceil((sh - win_height) / 2);
    window.open(url, "_blank", "left=" + x + ",top=" + y + ",menubar=yes,toolbar=yes,scrollbars=yes,status=yes,resizable=yes,width=" + win_width + ",height=" + win_height);
}

function winpopup2(url, win_width, win_height) {
    sw = screen.width;
    sh = screen.height;

    x = Math.ceil((sw - win_width) / 2);
    y = Math.ceil((sh - win_height) / 2);
    window.open(url, "_blank", "left=" + x + ",top=" + y + ",toolbar=yes,menubar=yes,scrollbars=yes,status=yes,resizable=yes,width=" + win_width + ",height=" + win_height);
}

function winpopup3(url, win_width, win_height) {
    sw = screen.width;
    sh = screen.height;

    x = Math.ceil((sw - win_width) / 2);
    y = Math.ceil((sh - win_height) / 2);
    window.open(url, "_blank", "left=" + x + ",top=" + y + ",menubar=no,scrollbars=no,status=yes,resizable=no,width=" + win_width + ",height=" + win_height);
}

function winpopup4(url, win_width, win_height) {
    sw = screen.width;
    sh = screen.height;

    x = Math.ceil((sw - win_width) / 2);
    y = Math.ceil((sh - win_height) / 2);
    window.open(url, "_blank", "left=" + x + ",top=" + y + ",menubar=no,scrollbars=yes,status=yes,resizable=no,width=" + win_width + ",height=" + win_height);

    return false;
}

function winpopup5(url, win_width, win_height) {
    sw = screen.width;
    sh = screen.height;

    x = Math.ceil((sw - win_width) / 2);
    y = Math.ceil((sh - win_height) / 2);
    window.open(url, "_MOVE", "left=" + x + ",top=" + y + ",menubar=no,scrollbars=yes,status=yes,resizable=no,width=" + win_width + ",height=" + win_height);

    return false;
}

function winpopup3s(url, win_width, win_height) {
    sw = screen.width;
    sh = screen.height;

    x = Math.ceil((sw - win_width) / 2);
    y = Math.ceil((sh - win_height) / 2);
    window.open(url, "_dp", "left=" + x + ",top=" + y + ",menubar=no,scrollbars=no,status=yes,resizable=no,width=" + win_width + ",height=" + win_height);

    return false;
}

function winpopup6(url, win_width, win_height) {
    sw = screen.width;
    sh = screen.height;

    x = Math.ceil((sw - win_width) / 2);
    y = Math.ceil((sh - win_height) / 2);
    window.open(url, "_blank", "left=" + x + ",top=" + y + ",status=yes,scrollbars=yes,width=" + win_width + ",height=" + win_height);

    return false;
}     