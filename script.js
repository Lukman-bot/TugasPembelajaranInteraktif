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

    // Event listener untuk scroll mouse
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

    // Event listener untuk sentuhan (touch event)
    let initialTouchY = null;
    window.addEventListener('touchstart', function(event) {
        initialTouchY = event.touches[0].clientY;
    });

    window.addEventListener('touchmove', function(event) {
        if (initialTouchY === null) {
            return;
        }

        let currentTouchY = event.touches[0].clientY;
        let deltaY = currentTouchY - initialTouchY;

        if (deltaY > 50) {
            // Swipe ke bawah
            if (currentContent > 1) {
                currentContent--;
                showContent(currentContent);
            }
            initialTouchY = null;
        } else if (deltaY < -50) {
            // Swipe ke atas
            if (currentContent < totalContents) {
                currentContent++;
                showContent(currentContent);
            }
            initialTouchY = null;
        }
    });

    window.addEventListener('touchend', function() {
        initialTouchY = null;
    });

    // Event listener tambahan untuk mendukung scroll pada perangkat mobile
    let startY = 0;
    window.addEventListener('touchstart', function(event) {
        startY = event.touches[0].clientY;
    });

    window.addEventListener('touchend', function(event) {
        let endY = event.changedTouches[0].clientY;
        let distance = startY - endY;

        // Jika jarak pergerakan cukup besar, ganti konten
        if (Math.abs(distance) > 50) {
            if (distance > 0) {
                // Swipe ke atas
                if (currentContent < totalContents) {
                    currentContent++;
                    showContent(currentContent);
                }
            } else {
                // Swipe ke bawah
                if (currentContent > 1) {
                    currentContent--;
                    showContent(currentContent);
                }
            }
        }
    });
});
