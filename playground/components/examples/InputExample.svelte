<script>
    import Input from '../../../src/components/Input'
    import Icon from '../../../src/components/Icon'

    let inputValue
    export const code = `
<Input size="sm" placeholder="Something" class="tw-bg-white!" bind:value={inputValue}>
    <span slot="prefix">
        <Icon icon="outline--search"></Icon>
    </span>
</Input>

<Input size="md" radius="full" placeholder="You like" class="tw-border-transparent!"
       on:focus={ () => console.log('focus')} on:blur={() => console.log('blur')}
       on:input={() => console.log('input')}
       on:change={(e) => console.log('change', e.target.value)}></Input>
    `
</script>

<Input size="sm" placeholder="Something" class="tw-bg-white!" bind:value={inputValue}>
    <span slot="prefix">
        <Icon icon="outline--search"></Icon>
    </span>
</Input>

<Input size="md" radius="full" placeholder="You like" class="tw-border-transparent!"
       on:focus={ () => console.log('focus')} on:blur={() => console.log('blur')}
       on:input={() => console.log('input')}
       on:change={(e) => console.log('change', e.target.value)}></Input>