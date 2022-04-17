import ccRequest from "@/service";
import {IHandleType} from './type'

enum handleAPI {
  DeleteUser = '/handle/deluser',
  QueryUser = '/handle/finduser',
  CreateUser='/handle/createuser',
  EditUser='/handle/edituser',
  UserMenu = '/handle/usermenu'
}

export function deleteUserRequest(userId: number) {
  return ccRequest.delete({
    url: handleAPI.DeleteUser,
    data: userId
  })
}

export function queryUserRequest(userInfo: any) {
  return ccRequest.post<IHandleType>({
    url: handleAPI.QueryUser,
    data: userInfo
  })
}

export function createUserRequest(createInfo: any) {
  return ccRequest.post({
    url: handleAPI.CreateUser,
    data: createInfo
  })
}

export function editUserRequest(userId: number, content: any) {
  return ccRequest.patch({
    url: handleAPI.EditUser,
    data: {userId, content}
  })
}

export function userMenuRequest(userId: number) {
  return ccRequest.post({
    url: handleAPI.UserMenu,
    data: userId
  })
}
