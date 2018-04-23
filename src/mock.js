/**
 * @file mock.js
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 4/21/18
 * get more detail from http://mockjs.com/examples.html
 */

const Mock = require('mockjs')

Mock.mock('/api/data', (req, res) => {
  return {
    data: ['a','b']
  }
})

/**
 * String
 * generate 1 to 10 * of String type
 */
Mock.mock('/api/data/string', (req, res) => {
  return {
    data: Mock.mock({
      "string|1-100": "123"
    })
  }
})

/**
 * String
 * copy 3 types of  '***'
 */
Mock.mock('/api/data/string/2', (req, res) => {
  return {
    data: Mock.mock({
      "string|3": "***"
    })
  }
})


