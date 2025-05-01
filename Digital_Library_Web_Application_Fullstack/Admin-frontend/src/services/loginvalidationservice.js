const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const validatePassword = (password) => {
    if(password)
    {
        if(password.length < 8){
            return false;
        }
        else 
            return true;
    }
    return false; 
}

export{validateEmail, validatePassword};

