import { writeFile } from 'fs/promises';

export default defineEventHandler(async event => {
  const files = await readMultipartFormData(event);
  if (!files || !files.length) {
    throw createError({
      statusCode: 400,
      statusMessage: 'image not found',
    });
  } else if (files[0].name === 'image' && files[0].filename) {
    const { filename, data } = files[0];
    const filePath = `public/${filename}`;
    await writeFile(filePath, data);
    return {
      message: 'success',
    };
  } else {
    return {
      message: "It's not image",
    };
  }
});
