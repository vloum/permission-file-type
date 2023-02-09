/*
 * @Descripttion: free
 * @version: 1.1
 * @Author: VLOU
 * @Date: 2022-04-20 16:33:51
 * @LastEditors: VLOU
 * @LastEditTime: 2022-05-15 00:33:26
 */

import { functionObject as performObject } from './lib/is_type'
import { imageAr } from './lib/supported'

/**
 * 
 * @param {array} supportTypeAr ['.jpg','.doc']
 * @param {string} mine 'image/jpg'
 */

function splitSupportTypeAr(supportTypeAr: string[], type?: string) {
  const imgAr = []
  const txtAr = []

  for (const extname of supportTypeAr) {
    if (imageAr.includes(extname)) {
      imgAr.push(extname)
    } else {
      txtAr.push(extname)
    }
  }

  return type === 'img' ? imgAr : txtAr
}

function verifyFormat(supportTypeAr: string[], mime: string, name: string) {
  // 先判断mime类型
  let type = ''
  if (mime) {
    type = mime.split('/')[1]
  }
  if (type && supportTypeAr.includes('.' + type) && type !== 'pdf') {
    const supportAr = splitSupportTypeAr(supportTypeAr, 'img')
    for (const extname of supportAr) {
      if (performObject.is_image(mime, extname)) {
        return true
      }
    }
  } else if (type) {
    const supportAr = splitSupportTypeAr(supportTypeAr)
    for (const extname of supportAr) {
      const funName = 'is_' + extname.split('.')[1]
      if (performObject[funName] && performObject[funName](mime)) {
        return true
      }
    }
  }

  // 对于某些浏览器没有file.raw.type的处理
  if (type === '') {
    const funName = name.split('.')
    type = funName[funName.length - 1] || ''
    const supportAr = splitSupportTypeAr(supportTypeAr)
    if (type && supportAr.includes('.' + type)) {
      return true
    }
  }

  return false
}

export default {
  verifyFormat,
  ...performObject
}