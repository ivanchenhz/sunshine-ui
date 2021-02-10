<script>
    import Input from '../../../src/components/Input'

    let inputValue
    import searchSvg from '../../assets/search_16.svg'

    export const code = `
// let inputValue
// import searchSvg from './assets/search_16.svg'

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
    <img src="{searchSvg}" slot="prefix" alt="Search">
</Input>
<Input size="md" radius="full" placeholder="You like" class="tw-border-transparent!"
       on:focus={ () => console.log('focus')} on:blur={() => console.log('blur')}
       on:input={() => console.log('input')}
       on:change={(e) => console.log('change', e.target.value)}></Input>