<script>
    import { formControlSize, fontSize, borderRadius } from '../classes'

    export let value = null
    export let size = 'sm'
    export let radius = 'DEFAULT'
    export let placeholder = ''
    export let readonly = false

    const defaultClass = 'tw-w-full tw-px-4 tw-text-gray-70 tw-placeholder-gray-40 tw-bg-gray-10 tw-border tw-border-solid tw-border-gray-30 hover:tw-border-gray-40 focus:tw-border-theme-60'

    $: sizeClass = formControlSize[size]
    $: fontSizeClass = fontSize[size]
    $: borderRadiusClass = borderRadius[radius]
</script>

<div class="tw-relative">
    {#if $$slots.prefix}
        <span class="tw-inline-flex tw-absolute tw-left-3 tw-top-1/2 tw-transform tw--translate-y-1/2">
            <slot name="prefix"></slot>
        </span>
    {/if}

    {#if $$slots.suffix}
        <span class="tw-inline-flex tw-absolute tw-right-3 tw-top-1/2 tw-transform tw--translate-y-1/2">
            <slot name="suffix"></slot>
        </span>
    {/if}

    <input
            bind:value
            {placeholder}
            class="{defaultClass} {sizeClass} {fontSizeClass} {borderRadiusClass} {$$props.class}"
            class:tw-pl-10={$$slots.prefix}
            class:tw-pr-10={$$slots.suffix}
            style="{$$props.style}"
            {readonly}
            on:focus on:blur on:input on:change
    />
</div>
