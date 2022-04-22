/*
 * @Descripttion: free
 * @version: 1.1
 * @Author: VLOU
 * @Date: 2022-04-20 16:33:51
 * @LastEditors: VLOU
 * @LastEditTime: 2022-04-21 23:35:16
 */

/**
 * 
 * @param {array} supportTypeAr ['.jpg','.doc']
 * @param {string} mine 'image/jpg'
 */
 const imageAr = ['.jpg', '.jpeg', '.png', '.ioc', '.gif', '.svg', '.webp']

 function splitSupportTypeAr(supportTypeAr, type) {
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
 
 function is_image(mime, t) {
   return mime === 'image/' + t.split('.')[1]
 }
 
 function is_docx(mime) {
   return mime === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
 }
 
 function is_doc(mime) {
   return mime === 'application/x-cfb' || mime === 'application/msword'
 }
 
 function is_pdf(mime) {
   return mime === 'application/pdf'
 }
 
 const performObject = {
   is_docx,
   is_doc,
   is_pdf,
   is_image
 }
 
 export function verifyFormat(supportTypeAr, mime, name) {
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