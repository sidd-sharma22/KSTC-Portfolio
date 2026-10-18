document.addEventListener('DOMContentLoaded', function() {
    
    // --- Notification Modal Logic ---
    const modal = document.getElementById('notification-modal');
    const modalContent = document.getElementById('notification-content');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const showNoticeBtn = document.getElementById('show-notice-btn');

    // Function to show the modal with animation
    const showModal = () => {
        if (modal && modalContent) {
            modal.classList.remove('hidden');
        }
    };

    // Function to hide the modal with animation
    const hideModal = () => {
        if (modal && modalContent) {
            modal.classList.add('hidden');
        }
    };

    // Check if the popup has been shown in this session
    if (!sessionStorage.getItem('noticeShown')) {
        setTimeout(showModal, 2000);
        sessionStorage.setItem('noticeShown', 'true');
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', hideModal);
    }

    const showNoticeNavBtn = document.getElementById('show-notice-nav-btn');
    if (showNoticeBtn) {
        showNoticeBtn.addEventListener('click', showModal);
    }
    if (showNoticeNavBtn) {
        showNoticeNavBtn.addEventListener('click', showModal);
    }

    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                hideModal();
            }
        });
    }

    // --- Mobile Menu Toggle Logic ---
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }

    // Close mobile menu on link click
    if (mobileMenu) {
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }
});
