document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('confirmButton').addEventListener('click', function () {
        Swal.fire({
            title: 'เป็นแฟนแล้วน้า',
            text: 'ต่อจากนี้เค้าจะเป็นเด็กดีของเธอเสมอ❤️',
            icon: 'success',
            showConfirmButton: false,
            timer: 8000
        });

        // Create floating hearts effect
        for (let i = 0; i < 30; i++) {
            createHeart();
        }
    });

    document.getElementById('cancelButton').addEventListener('click', function () {
        Swal.fire({
            title: 'เกิดข้อผิดพลาด',
            text: 'กรุณาลองใหม่อีกครั้ง',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    });
});

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤️';
    document.body.appendChild(heart);

    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;

    setTimeout(() => {
        heart.remove();
    }, 8000);
}