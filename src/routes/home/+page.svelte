<script>
  import { page } from "$app/stores";
</script>

<h1>Home</h1>
<p>Weclome {$page.data?.session?.user?.name}</p>
