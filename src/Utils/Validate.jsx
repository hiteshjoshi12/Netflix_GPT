export const checkvalidatedata = (email, password) => {
    const isemailvalid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
    const ispasswordvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isemailvalid) return "Please enter a valid email address (e.g., user@example.com).";
    if(!ispasswordvalid) return "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.";

    return null;

};
