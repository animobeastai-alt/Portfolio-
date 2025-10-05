// 🎯 Scroll-triggered Animations
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.3 };

const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// 📊 Visionary Meter Logic
const slider = document.getElementById('visionSlider');
const label = document.getElementById('visionLabel');

if (slider && label) {
  slider.addEventListener('input', () => {
    const value = parseInt(slider.value);
    const labels = ['Follower', 'Leader', 'Visionary'];
    label.textContent = labels[value];

    // Update active label styling
    const labelSpans = document.querySelectorAll('.meter-labels span');
    labelSpans.forEach((span, index) => {
      span.classList.toggle('active', index === value);
    });
  });
}