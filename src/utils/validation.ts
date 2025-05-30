
export const validateEmail = (email: string): string | undefined => {
  if (!email) return 'Email is required';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return 'Please enter a valid email address';
  return undefined;
};

export const validatePassword = (password: string): string | undefined => {
  if (!password) return 'Password is required';
  if (password.length < 8) return 'Password must be at least 8 characters';
  return undefined;
};

export const validateUsername = (username: string): string | undefined => {
  if (!username) return 'Username is required';
  if (username.length < 3) return 'Username must be at least 3 characters';
  if (username.length > 15) return 'Username must be 15 characters or less';
  if (!/^[a-zA-Z0-9]+$/.test(username)) return 'Username must be alphanumeric';
  return undefined;
};

export const validateConfirmPassword = (password: string, confirmPassword: string): string | undefined => {
  if (!confirmPassword) return 'Please confirm your password';
  if (password !== confirmPassword) return 'Passwords do not match';
  return undefined;
};
