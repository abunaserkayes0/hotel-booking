import { replaceIdByArray } from "@/utils/replaceId";
import usersModel from "./users.model"

export const getAllUsers = async () => {
    const allUsers = await usersModel.find().lean();
    return replaceIdByArray(allUsers)
}