# 下载
`npm i permission-file-type`
# permission-file-type
校验文件类型
# 解决的痛点
  - 1.在文件上传的时候用户强行切换其他格式进行上传。利用文件类型校验能很好的给予提示并控制。

# DOC
支持校验格式,dox、docx、pdf、ppt、pptx、所有图片格式
| Function | Description |
|   :---   |    :---:    |
| verifyFormat(supportTypeAr, mime, name):boolean |  supportTypeAr：['.jpg','.doc']，mine: fileMine, name: fileName |
| is_docx(mime):boolean | mine: fileMine, Function[is_docx, is_doc, is_pdf] |
| is_image(mime, extName):boolean | mine: fileMine, extName: fileExtName（文件后缀） |
