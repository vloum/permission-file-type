/*
 * @Descripttion: free
 * @version: 1.1
 * @Author: VLOU
 * @Date: 2022-04-22 00:02:15
 * @LastEditors: VLOU
 * @LastEditTime: 2022-05-15 00:35:24
 */
import { isTypeFunctionType } from '../types/index'

function is_image(mime: string, t:string):boolean {
  return mime === 'image/' + t.split('.')[1]
}

function is_docx(mime: string):boolean {
  return mime === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
}

function is_doc(mime: string):boolean {
  return mime === 'application/x-cfb' || mime === 'application/msword' || mime === 'application/wps-writer'
}

function is_pdf(mime: string):boolean {
  return mime === 'application/pdf'
}

function is_ppt(mime: string):boolean {
  return mime === 'application/vnd.ms-powerpoint'
}

function is_pptx(mime: string):boolean {
  return mime === 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
}

function is_txt(mime: string):boolean {
  return mime === 'text/plain'
}

export const functionObject: isTypeFunctionType = {
  is_docx,
  is_doc,
  is_pdf,
  is_image,
  is_ppt,
  is_pptx,
  is_txt,
}