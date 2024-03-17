<template>
  <div class="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
    v-bind:style="{ 'background-image': 'url(' + backGroundUrl + ')' }">
    <div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
      <div class="text-white">
        <div class="mb-8 flex flex-col items-center">
          <h1 class="mb-2 text-2xl">Nutria CRM</h1>
          <span class="text-gray-300">Enter Login Details</span>
        </div>
        <form action="#">
          <div class="mb-4 text-lg">
            <label htmlFor="">Email or user</label>

            <input
              class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              type="text" name="name" placeholder="id@email.com" />

          </div>

          <div class="mb-4 text-lg">
            <label htmlFor="">Pass</label>

            <input
              class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              type="text" name="name" placeholder="id@email.com" />

          </div>
          <div class="mt-8 flex justify-center text-lg text-black">
            <button type="submit"
              class="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const backGroundUrl = "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
</script>

<style></style>