import { replaceIdByArray, replaceIdByObject } from "@/utils/replaceId";
import usersModel from "./users.model"

export const getAllUsers = async () => {
    const allUsers = await usersModel.find().lean();
    return replaceIdByArray(allUsers)
}

export const getUserById = async (email) => {
    const user = await usersModel.find({ email: email }).lean();
    return replaceIdByObject(user[0])
}