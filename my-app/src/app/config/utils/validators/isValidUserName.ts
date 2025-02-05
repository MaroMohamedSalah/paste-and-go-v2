import { MAX_USERNAME_LENGTH, MIN_USERNAME_LENGTH } from "../constants/validation";

export const isValidUserName = (userName: string): boolean => {
    return userName.length > MIN_USERNAME_LENGTH && userName.length < MAX_USERNAME_LENGTH;
};