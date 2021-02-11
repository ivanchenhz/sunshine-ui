<script>
    import Input from '../../../src/components/Input'

    let inputValue
    export const code = `
// let inputValue

<Input size="sm" placeholder="Something" class="tw-bg-white!" bind:value={inputValue}>
    <img src="{searchSvg}" slot="prefix" alt="Search">
</Input>
<Input size="md" radius="full" placeholder="You like" class="tw-border-transparent!"
       on:focus={ () => console.log('focus')} on:blur={() => console.log('blur')}
       on:input={() => console.log('input')}
       on:change={(e) => console.log('change', e.target.value)}></Input>
    `
</script>

<Input size="sm" placeholder="Something" class="tw-bg-white!" bind:value={inputValue}>
    <span slot="prefix">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
    </span>

</Input>
<Input size="md" radius="full" placeholder="You like" class="tw-border-transparent!"
       on:focus={ () => console.log('focus')} on:blur={() => console.log('blur')}
       on:input={() => console.log('input')}
       on:change={(e) => console.log('change', e.target.value)}></Input>