<script>
    import Example from './components/Example.svelte'

    import  * as examples from './components/examples'
</script>

<main class="tw-px-24 tw-pb-36">
    <section>
        <p class="tw-flex tw-place-content-center tw-py-24 tw-text-8xl tw-text-pink-40">
            Hello Sunshine
        </p>
    </section>

    <section class="tw-grid tw-grid-cols-1 tw-gap-12">
        {#each Object.values(examples) as example}
            <Example {example}></Example>
        {/each}
    </section>
</main>
