<script>
  import { signIn, signOut } from "@auth/sveltekit/client";
</script>

<h1>Login</h1>
<span class="notSignedInText">You are not signed in</span>
<button on:click={() => signIn("github", { callbackUrl: "/" })}
  >Sign In with GitHub</button
>
