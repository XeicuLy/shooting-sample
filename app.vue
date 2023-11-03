<script setup lang="ts">
const uploadFile = ref<HTMLInputElement | null>(null);

const selectedFile = async () => {
  if (!uploadFile.value) {
    console.error('No file selected');
    return;
  }
  const files = uploadFile.value.files;
  if (!files) {
    console.error('No files selected');
    return;
  }
  const file = files[0];
  const fileData = new FormData();
  fileData.append('image', file);
  const { data: resData } = await useFetch('/api/uploader', {
    method: 'POST',
    body: fileData,
  });
  // NOTE: API実行後の結果確認用
  console.log(resData.value);
};
</script>
<template>
  <div class="input-area">
    <label for="upload">写真を撮影する</label>
    <input
      ref="uploadFile"
      type="file"
      name="image"
      id="upload"
      accept="image/*"
      @change="selectedFile"
    />
  </div>
</template>
<style scoped lang="scss">
.input-area > input {
  display: none;
}
</style>
