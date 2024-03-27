<template>
  <div
    className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"
  >
    <div>
      <NuxtLink to="/login">
        <img
          src="@/assets/image/crmlogo.png"
          alt="crm logo"
          width="450"
          height="200"
        />
        <VisualTypeWritting text="Welcome to CRM" />
      </NuxtLink>
    </div>

    <div
      className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"
    ></div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "guest",
});
</script>

<style scoped>
.content {
  text-align: center;
  margin-top: 100px;
}

h1 {
  font-size: 24px;
  color: #333;
}

p {
  font-size: 16px;
  color: #666;
}
</style>
