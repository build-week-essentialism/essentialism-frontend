export const checkAuth = () => {
    if (!localStorage.getItem('user')) {
      return false;
    } else {
      return true;
    }
  };
  