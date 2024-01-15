export const checkvalidatedata = (email, password) => {
    const isemailvalid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
    const ispasswordvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isemailvalid) return "Email Id not valid";
    if(!ispasswordvalid) return " Enter Valid Password ";

    return null;

};
