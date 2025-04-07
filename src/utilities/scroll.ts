export const scrollToTop = (behavior: ScrollBehavior | undefined) => {
  window.scrollTo({
    top: 0,
    behavior,
  });
};
