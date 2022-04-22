/*
 * @Descripttion: free
 * @version: 1.1
 * @Author: VLOU
 * @Date: 2022-04-22 00:02:15
 * @LastEditors: VLOU
 * @LastEditTime: 2022-04-22 00:02:15
 */
export function is_image(mime, t) {
  return mime === 'image/' + t.split('.')[1]
}

export function is_docx(mime) {
  return mime === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
}

export function is_doc(mime) {
  return mime === 'application/x-cfb' || mime === 'application/msword'
}

export function is_pdf(mime) {
  return mime === 'application/pdf'
}