<template>
  <div className="typewriter">
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts">

export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.typewriter p {
  overflow: hidden;
  border-right: .15em solid orange;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .55em;
  /* Adjust as needed */
  font-size: 1.5em;
  animation:
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0
  }

  to {
    width: 100%
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {

  from,
  to {
    border-color: transparent
  }

  50% {
    border-color: orange;
  }
}
</style>