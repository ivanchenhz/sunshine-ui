<script>
    export let group = null
    export let name = null
    export let value = null
    export let label = null
</script>

<label class="tw-flex tw-items-center tw-cursor-pointer">
    <input
            type=radio
            class="tw-appearance-none tw-w-3.5 tw-h-3.5 tw-mr-3 tw-border tw-border-solid tw-rounded-full tw-border-gray-30 hover:tw-border-gray-40 checked:tw-border-theme-60 checked:tw-border-4 tw-cursor-pointer"
            bind:group {name} {value}
            on:change
    >
    <span class="tw-text-sm tw-leading-none tw-text-gray-70">{label}</span>
</label>