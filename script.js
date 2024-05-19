let currentContent = 1;
const totalContents = 6;

function showContent(index) {
    document.querySelectorAll('.content').forEach((content, i) => {
        if (i + 1 === index) {
            content.classList.add('active');
            content.classList.remove('inactive-up', 'inactive-down');
        } else if (i + 1 < index) {
            content.classList.remove('active');
            content.classList.add('inactive-up');
        } else {
            content.classList.remove('active');
            content.classList.add('inactive-down');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    showContent(currentContent);

    let scrollTimeout; // Variabel untuk menahan timeout scroll

    // Event listener untuk scroll mouse
    window.addEventListener('wheel', function(event) {
        clearTimeout(scrollTimeout); // Hapus timeout sebelumnya (jika ada)
        scrollTimeout = setTimeout(function() {
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
        }, 200); // Waktu tunda sebelum menangani scroll
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
            clearTimeout(scrollTimeout); // Hapus timeout sebelumnya (jika ada)
            scrollTimeout = setTimeout(function() {
                if (currentContent > 1) {
                    currentContent--;
                    showContent(currentContent);
                }
            }, 200); // Waktu tunda sebelum menangani scroll
            initialTouchY = null;
        } else if (deltaY < -50) {
            // Swipe ke atas
            clearTimeout(scrollTimeout); // Hapus timeout sebelumnya (jika ada)
            scrollTimeout = setTimeout(function() {
                if (currentContent < totalContents) {
                    currentContent++;
                    showContent(currentContent);
                }
            }, 200); // Waktu tunda sebelum menangani scroll
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
            clearTimeout(scrollTimeout); // Hapus timeout sebelumnya (jika ada)
            scrollTimeout = setTimeout(function() {
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
            }, 200); // Waktu tunda sebelum menangani scroll
        }
    });
});
