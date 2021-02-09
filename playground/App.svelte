<script>
    import Example from './components/Example.svelte'
    import { Avatar, Card, Input } from '../src'

    let inputValue
    import searchSvg from './assets/search_16.svg'
</script>

<main class="tw-px-24 tw-pb-36">
    <section>
        <p class="tw-flex tw-place-content-center tw-py-24 tw-text-8xl tw-text-pink-40">
            Hello Sunshine
        </p>
    </section>

    <section class="tw-grid tw-grid-cols-1 tw-gap-12">
        <Example>
            <Avatar
                    src="https://cdn.pixabay.com/photo/2012/05/04/10/17/sun-47083_1280.png"></Avatar>
            <Avatar
                    src="https://cdn.pixabay.com/photo/2012/05/04/10/17/sun-47083_1280.png"
                    size="64"></Avatar>

            <Avatar>S</Avatar>
            <Avatar size="64">S</Avatar>
            <div slot="code">{`
<Avatar
        src="https://cdn.pixabay.com/photo/2012/05/04/10/17/sun-47083_1280.png"></Avatar>
<Avatar
        src="https://cdn.pixabay.com/photo/2012/05/04/10/17/sun-47083_1280.png"
        size="64"></Avatar>

<Avatar>S</Avatar>
<Avatar size="64">S</Avatar>
                `}
            </div>
        </Example>

        <Example>
            <Card>Card</Card>
            <Card shadow="lg" radius="xl">Card</Card>
            <Card shadow="xl" radius="full">Card</Card>
            <div slot="code">{`
<Card>Card</Card>
<Card shadow="lg" radius="xl">Card</Card>
<Card shadow="xl" radius="full">Card</Card>
                `}
            </div>
        </Example>

        <Example>
            <Input size="sm" placeholder="Something" class="tw-bg-white!" bind:value={inputValue}>
                <span slot="prefix">{@html searchSvg}</span>
            </Input>
            <Input size="md" radius="full" placeholder="You like" class="tw-border-transparent!"
                   on:focus={ () => console.log('focus')} on:blur={() => console.log('blur')}
                   on:input={() => console.log('input')}
                   on:change={(e) => console.log('change', e.target.value)}></Input>
            <div slot="code">{`
// let inputValue
// import searchSvg from './assets/search_16.svg'

<Input size="sm" placeholder="Something" class="tw-bg-white!" bind:value={inputValue}>
                <span slot="prefix">{@html searchSvg}</span>
</Input>
<Input size="md" radius="full" placeholder="You like" class="tw-border-transparent!"
       on:focus={ () => console.log('focus')} on:blur={() => console.log('blur')}
       on:input={() => console.log('input')}
       on:change={(e) => console.log('change', e.target.value)}></Input>
                `}
            </div>
        </Example>
    </section>
</main>
