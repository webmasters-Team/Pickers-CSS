//get image
document.querySelector("#img-file").addEventListener("change", function () {
	if (this.files && this.files[0]) {
		document.body.style.setProperty(
			"--bg",
			"url(" + URL.createObjectURL(this.files[0]) + ")"
		);
		document.querySelector("#img-post").src = URL.createObjectURL(this.files[0]);
		document.querySelector(".img-name").innerHTML = this.files[0].name;
	}
});

//random initial color
//var x = document.querySelectorAll("[name=color]");
//var y = Math.floor(Math.random() * 9);
//x[y].checked = true;