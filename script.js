let currentContent = 1;
const totalContents = 5;

function showContent(index) {
    document.querySelectorAll('.content').forEach((content, i) => {
        if (i + 1 === index) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    showContent(currentContent);

    window.addEventListener('wheel', function(event) {
        if (event.deltaY > 0) {
            if (currentContent < totalContents) {
                currentContent++;
            }
        } else {
            if (currentContent > 1) {
                currentContent--;
            }
        }
        showContent(currentContent);
    });
});
