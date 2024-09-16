const tokenName = "Mytoken";

// Function to set token in localStorage
export const setToken = (token) => {
  localStorage.setItem(tokenName, token);
};

// Function to clear token from localStorage
export const clearToken = () => {
  localStorage.removeItem(tokenName);
};

// Function to get user details from token
export const getUserDetails = () => {
  const token = localStorage.getItem(tokenName);
  if (!token) return null;
  
  // Assuming the token contains a JSON object
  try {
    const userDetails = JSON.parse(atob(token.split('.')[1]));
    return userDetails;
  } catch (error) {
    console.error("Error parsing token:", error);
    return null;
  }
};