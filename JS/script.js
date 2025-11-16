document.addEventListener('DOMContentLoaded', function() {
    
    // --- Initialize Swiper for the hero banner slider ---
    const swiper = new Swiper('.mySwiper', {
        // Parameters
        loop: true, // Enables continuous looping
        autoplay: {
            delay: 5000, // 5 seconds between slides
            disableOnInteraction: false, // Autoplay will not be disabled after user interactions
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // --- Notification Modal Logic ---
    const modal = document.getElementById('notification-modal');
    const modalContent = document.getElementById('notification-content');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const showNoticeBtn = document.getElementById('show-notice-btn');

    // Function to show the modal with animation
    const showModal = () => {
        if (modal && modalContent) {
            modal.classList.remove('hidden');
            modalContent.classList.remove('modal-fade-out');
            modalContent.classList.add('modal-fade-in');
        }
    };

    // Function to hide the modal with animation
    const hideModal = () => {
        if (modal && modalContent) {
            modalContent.classList.remove('modal-fade-in');
            modalContent.classList.add('modal-fade-out');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300); // Wait for animation to finish
        }
    };

    // Check if the popup has been shown in this session
    if (!sessionStorage.getItem('noticeShown')) {
        // If not shown, show it after 2 seconds
        setTimeout(showModal, 2000);
        // And mark it as shown for this session
        sessionStorage.setItem('noticeShown', 'true');
    }

    // Event listener for the close button
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', hideModal);
    }

    // Event listener to open the modal with the new floating button
    if (showNoticeBtn) {
        showNoticeBtn.addEventListener('click', showModal);
    }

    // Event listener to close modal when clicking on the background overlay
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                hideModal();
            }
        });
    }

    // --- Mobile Menu Logic ---
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
});
