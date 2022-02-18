import request from '@/utils/request'
export function getTest() {
  return request({
    url: '/test',
    method: 'get'
  })
}


export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
} 



export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
} 
