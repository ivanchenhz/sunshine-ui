<script>
    import Card from '../../src/components/Card/index.svelte'
</script>

<Card radius="xl">
    <div class="tw-grid tw-grid-cols-2 tw-gap-12">
        <div class="tw-flex tw-justify-around tw-items-center tw-justify-center tw-py-4">
            <slot></slot>
        </div>

        <div class="tw-bg-gray-10 tw-text-gray-70">
            <pre>
                <code class="tw-font-mono tw-text-sm">
                    <slot name="code"></slot>
                </code>
            </pre>
        </div>
    </div>
</Card>