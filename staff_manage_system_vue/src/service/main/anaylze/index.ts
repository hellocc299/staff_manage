import ccRequest from "@/service";

enum DataAPI {
  DepartmentCount = '/analyze/department',
  RecordCount = '/analyze/record'
}

export function getDepartmentCountRequest() {
  return ccRequest.get({
    url: DataAPI.DepartmentCount
  })
}

export function getRecordCountRequest() {
  return ccRequest.get({
    url: DataAPI.RecordCount
  })
}
