/*
 * @Descripttion: free
 * @version: 1.1
 * @Author: VLOU
 * @Date: 2022-04-22 00:02:15
 * @LastEditors: VLOU
 * @LastEditTime: 2022-05-05 22:54:17
 */
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

export default {
  is_docx,
  is_doc,
  is_pdf,
  is_image
}