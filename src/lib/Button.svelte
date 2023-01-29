<script>
    export let size = "medium";
</script>

<button
class:small={size=="small"}
class:medium={size=="medium"}
{...$$restProps}
>
<slot />
</button>

<style>

    button {
        cursor: pointer;
    }

    .small {
        font-size: small;
    }
    
    .medium {
        font-size: medium;
    }

</style>