import ccRequest from "../index";
import { IAccount, ILoginRequest } from "./type";

enum LoginAPI {
  AccountLogin = '/login',
  UserMenus = '/user/menu',
  UserInfo = '/user/userinfo',
  AllUserInfo = '/user/alluser',
  UserCount = '/user/usercount'
}

export function accountLoginRequest(account: IAccount) {
  return ccRequest.post<ILoginRequest>(
    {
      url: LoginAPI.AccountLogin,
      data: account
    }
  )
}

export function requestUserMenusByUserId(userId: number) {
  return ccRequest.get({
    url: LoginAPI.UserMenus,
    data: userId
  })
}

export function requestUserInfoByUserId(id: number) {
  return ccRequest.get({
    url: LoginAPI.UserInfo,
    data: id
  })
}

export function requestAllUserInfo(queryInfo: any) {
  return ccRequest.post({
    url: LoginAPI.AllUserInfo,
    data: queryInfo
  })
}

export function requestUserCount() {
  return ccRequest.get({
    url: LoginAPI.UserCount
  })
}


