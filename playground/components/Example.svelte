<script>
    import { Card } from '../../src'

    export let example
    let exampleComponent
</script>

<Card radius="xl">
    <div class="tw-grid tw-grid-cols-2 tw-gap-12">
        <div class="tw-flex tw-justify-around tw-items-center tw-justify-center tw-py-4">
            <svelte:component bind:this={exampleComponent} this="{example}"></svelte:component>
        </div>

        <div class="tw-bg-gray-10 tw-text-gray-70 tw-overflow-x-auto tw-px-4 tw-py-2">
            <pre>
                <code class="tw-font-mono tw-text-sm">
                    {#if exampleComponent}
                        {exampleComponent.code}
                    {/if}
                </code>
            </pre>
        </div>
    </div>
</Card>