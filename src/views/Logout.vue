<script setup>
  import { getAuth, signOut } from 'firebase/auth';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log('Sign out ok');
      router.push({ name: 'Home' });
    })
    .catch((err) => console.error(err.message));
</script>

<template></template>
