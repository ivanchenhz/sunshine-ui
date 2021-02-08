<script>
    import UiInput from '../Input/index.svelte'
    import clickOutside from '../../directives/use/clickOutside'
    import intersecting from '../../directives/use/intersecting'

    export let value = null
    export let options = []
    export let size = 'sm'
    export let readonly = true

    let showOptions = false
    let optionsBottom = true
    $: if (!showOptions) optionsBottom = true

    $: selectedClass = (option) => {
        return option.value === value ? 'tw-text-theme-60!' : 'tw-text-current'
    }
    $: optionsBottomClass = optionsBottom ? 'tw-mt-2' : 'tw--mt-2 tw-top-0 tw-transform tw--translate-y-full'

    const _option = options.find(option => option.value === value)
    let label = _option && _option.label

    function handleOptionClick(option) {
        value = option.value
        label = option.label
        showOptions = false
    }

    function handleIntersecting (e) {
        const intersectionRatio = e.detail.intersectionRatio
        if (intersectionRatio === 0) {
            return
        }

        const isIntersecting = intersectionRatio === 1
        optionsBottom = optionsBottom ? isIntersecting : !isIntersecting
    }
</script>

<div class="tw-relative"
     use:clickOutside on:clickOutside={() => showOptions = false}>

    <UiInput placeholder="Select" class="tw-bg-white! tw-cursor-pointer"
             bind:value={label} {size} {readonly}
             on:focus={() => showOptions = true} on:change></UiInput>

    {#if showOptions}
        <ul use:intersecting={[0, 1]} on:intersecting={handleIntersecting}
            class="tw-list-none tw-ml-0 tw-bg-white tw-shadow-md tw-border tw-rounded tw-border-solid tw-border-gray-05 tw-w-full tw-py-1.5 tw-absolute tw-left-0 {optionsBottomClass}">
            {#each options as option (option.value)}
                <li class="tw-px-5 tw-h-8 tw-text-sm tw-text-gray-70 tw-flex tw-items-center tw-cursor-pointer hover:tw-bg-theme-05 {selectedClass(option)}"
                    on:click={handleOptionClick(option)}>
                    <slot>
                        {option.label}
                    </slot>
                </li>
            {/each}
        </ul>
    {/if}

</div>
