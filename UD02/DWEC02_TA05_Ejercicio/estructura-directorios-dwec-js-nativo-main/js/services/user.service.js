import { UserData } from "../data/user.data.js";

function mediaEdad() {
    let sum = 0;
    if (!UserData || UserData.length === 0)
        return 0;
    for (let i = 0; i < UserData.length; i++) {
        sum += Number(UserData[i].edad);
    }
    return (sum / UserData.length).toFixed(2);
}

export const UserService = {
    mediaEdad: mediaEdad,
};
