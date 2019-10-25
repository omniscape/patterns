<template>
  <div class="bg min-w-full z-10">
    <div class="container z-20 fixed bg-black opacity-50 min-h-screen max-h-screen min-w-full max-w-full">
    </div>
    <div class="container z-50 relative flex justify-between min-h-screen max-h-screen min-w-full max-w-full">
      <div class="flex flex-col justify-around ml-12">
        <div class="">
          <h1 class="align-middle text-5xl text-gray-100 font-medium leading-none mb-4">{{ message }}</h1>
          <p class="max-w-lg text-lg text-gray-400 leading-relaxed mb-12">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div class="flex flex-col">
            <p class="max-w-md text-lg text-gray-200 font-medium mb-4">
              <span class=" text-gray-100 font-semibold ">Interested?</span> Click below to send us a secure, encrypted message and we'll be in touch soon.
            </p>
            <button class="w-40 h-12 bg-white hover:bg-gray-300 text-gray-700 font-bold py-2 border border-gray-400 hover:border-gray-500 hover:text-gray-900 rounded shadow">
              Send message
            </button>
          </div>
        </div>
      </div>
      <div class="self-end px-12 py-4">
        <p class="text-lg text-gray-500">
          Explore the
          <a href="https://trailblaze.pro" target="_blank" class="font-semibold text-gray-400 tracking-wider">trailblaze</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: 'Pattern: Scout',
    };
  },
};
</script>

<style scoped>
</style>
