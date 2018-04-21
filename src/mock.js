/**
 * @file mock.js
 * @author liumapp
 * @email liumapp.com@gmail.com
 * @homepage http://www.liumapp.com
 * @date 4/21/18
 */

const Mock = require('mockjs')

Mock.mock('/api/data', (req, res) => {
  return {
    data: ['a','b']
  }
})

/**
 * String
 * 'name|min-max': string
 * generate 1 to 10 * of String type
 */
Mock.mock('/api/data/string', (req, res) => {
  return {
    data: Mock.mock({
      "string|1-10": "★"
    })
  }
})
