import { ILoginState } from "./login/type"
import { IHandleState } from "./main/system/type"
import { IDataState } from "./main/analyze/type"

export interface IRootState {
  entireRole: any,
  userCount: Number
}

export interface IRootWithModule {
  login: ILoginState,
  system: IHandleState,
  analyze: IDataState
}

export type IStoreType = IRootState & IRootWithModule
