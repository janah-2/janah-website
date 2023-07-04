const mouse = document.querySelector('.mouse');
const aboutMeSection = document.querySelector('.about-me');
const scrollableResume = document.querySelector('.scrollable-resume');

scrollableResume.addEventListener('scroll', () => {
    const aboutMeOffset = aboutMeSection.offsetTop;
    const scrollPosition = scrollableResume.scrollTop + scrollableResume.clientHeight;

    if (scrollPosition > aboutMeOffset) {
        mouse.classList.add('hidden');
    } else {
        mouse.classList.remove('hidden');
    }
});
