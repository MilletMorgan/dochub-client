<template>
  <div class="py-5 px-4 bg-white rounded-tr rounded-br">
    <h3 class="text-2xl font-bold mb-6">Connexion</h3>

    <form action="">
      <div class="mb-6">
        <label>
          Email
          <input
            type="email"
            name="email"
            id="email"
            class="px-4 py-2 border bg-gray-100 rounded w-full"
          />
        </label>
      </div>

      <label>
        Mot de passe
        <input
          type="password"
          name="password"
          id="password"
          class="px-4 py-2 border bg-gray-100 rounded w-full"
        />
      </label>

      <button
        type="submit"
        class="p-4 text-center w-full bg-blue-500 hover:bg-blue-600 rounded mt-6 text-white"
      >
        Se connecter
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>
