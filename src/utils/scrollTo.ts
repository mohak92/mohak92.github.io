export const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80; // Height of your fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}; 