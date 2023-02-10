/*
 * @Descripttion: free
 * @version: 1.1
 * @Author: VLOU
 * @Date: 2022-05-15 00:20:52
 * @LastEditors: VLOU
 * @LastEditTime: 2022-05-15 00:52:59
 */

export interface funcType {
  [key: string]: Function
}

export interface isTypeFunctionType {
  is_doc: Function;
  is_docx: Function;
  is_image: Function;
  is_pdf: Function;
  is_ppt: Function;
  is_pptx: Function;
  is_txt: Function;
}

export interface optionsTypes extends isTypeFunctionType {
  verifyFormat: Function
}