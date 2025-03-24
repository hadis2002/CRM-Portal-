const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const scrollToBottom = (): void => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    window.scrollTo({
      top: documentHeight - windowHeight,
      behavior: 'smooth'
    });
  };
  
  export { scrollToTop, scrollToBottom };