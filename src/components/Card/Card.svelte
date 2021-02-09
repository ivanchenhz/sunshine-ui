<script>
    import { borderRadius, boxShadow } from '../classes'

    export let shadow = 'DEFAULT'
    export let radius = 'DEFAULT'

    $: borderRadiusClass = borderRadius[radius]
    $: boxShadowClass = boxShadow[shadow]
</script>

<div class="{borderRadiusClass} {boxShadowClass} {$$props.class}">
    <div class="tw-p-4">
        <slot></slot>
    </div>
</div>