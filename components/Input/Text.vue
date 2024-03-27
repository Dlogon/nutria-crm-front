<template>
  <input
    :class="{ 'is-invalid': !!v$[vname].$error }"
    @change="v$[vname].$touch"
    v-bind="$attrs"
    v-model="model"
  />
  <span class="text-xs text-red-500" v-if="!!v$[vname].$error">
    <p v-for="error in v$[vname].$errors" :key="error">{{ error.$message }}</p>
  </span>
</template>

<script lang="ts" setup>
// import { required, minLength, maxLength } from "vuelidate/lib/validators";
const model = defineModel({ required: true });

defineProps({
  v$: {
    type: Object,
    required: true,
  },
  vname: {
    type: String,
    required: true,
  },
});
</script>

<style>
.is-invalid {
  border-color: red;
}

.error-message {
  color: red;
}
</style>
