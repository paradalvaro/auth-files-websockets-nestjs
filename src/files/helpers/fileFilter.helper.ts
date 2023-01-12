export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  //cb: Function,
  cb: (error: Error, bool: boolean) => void,
) => {
  if (!file) return cb(new Error('File is empty'), false);
  const fileExtension = file.mimetype.split('/')[1];
  const validExtensions = ['jpg', 'jpeg', 'png', 'gif'];
  if (validExtensions.includes(fileExtension)) cb(null, true);
  cb(null, false);
};
