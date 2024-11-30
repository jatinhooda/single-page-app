
document.addEventListener('DOMContentLoaded', () => {
  // Modal functionality
  const modal = document.getElementById('communityModal');
  const openModal = document.getElementById('openModal');
  const closeModal = document.getElementById('closeModal');

  if (modal && closeModal) {
    document.querySelectorAll('.openModal').forEach(button => {
      button.addEventListener('click', () => modal.style.display = 'block');
    });
    closeModal.addEventListener('click', () => modal.style.display = 'none');
  }

  // Form submission
  document.getElementById('scheduleForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
  });
});
