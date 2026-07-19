// スマホ表示のときの「メニュー」ボタン開閉
document.addEventListener('DOMContentLoaded', function () {
	var toggle = document.querySelector('.nav-toggle');
	var nav = document.getElementById('site-nav');
	if (!toggle || !nav) return;

	toggle.addEventListener('click', function () {
		var open = nav.classList.toggle('open');
		toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
		toggle.textContent = open ? '閉じる' : 'メニュー';
	});
});
