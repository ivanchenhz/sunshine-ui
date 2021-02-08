<script>
    export let size = 48
    export let src = null
</script>

<span class="tw-inline-flex tw-items-center tw-justify-center tw-bg-gray-30 tw-rounded-full tw-overflow-hidden" style="width: {size}px; height: {size}px">
{#if src}
    <img src="{src}" alt="Avatar" class="tw-bg-clip-border">
{:else}
    <span class="tw-text-white" style="font-size: {size * .66}px">
        <slot></slot>
    </span>
{/if}
</span>
