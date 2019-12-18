function ch(event) {
	let i = event;
	let c = i.classList;
    switch (i.getAttribute('aria-checked')) {
        case "true":
            i.setAttribute('aria-checked', "false");
            c.remove("on");
            break;
        case "false":
            i.setAttribute('aria-checked', "true");
            c.add("on");
            break;
    }
}

function res(event) {
	let i = $(".scroll_fix");
	let w = $('body');
	i.css("width", w.css("width"));
}

$(document).ready(function () {
	res();
})