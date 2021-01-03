export const regName = () => {
    return new RegExp(/^[A-Za-z0-9]+$/)
};

export const regTel = () => {
    return new RegExp(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)
};


export const regEmail = ()=>{
    return new RegExp(/^[\w-\.\d*]+@[\w\d]+(\.\w{2,4})$/)
};



export const validName = (value, callbackUP, callbackErr) => {
    if (regName().test(value) && value.length >= 3) {
        callbackUP(value);
        callbackErr("is-valid");
    } else {
        callbackUP("");
      callbackErr("err");
    }
}

export const validTel = (value, callbackUP, callbackErr) => {
    if (regTel().test(value) && value.length >= 6) {
        callbackUP(value);
        callbackErr("ok");
    } else {
        callbackUP("");
      callbackErr("err");
    }
}

export const validEmail = (value, callbackUP, callbackErr) => {
    if (regEmail().test(value) && value.length >= 3) {
        callbackUP(value);
        callbackErr("ok");
    } else {
        callbackUP("");
      callbackErr("err");
    }
}