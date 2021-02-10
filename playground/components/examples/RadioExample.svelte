<script>
    import Radio from '../../../src/components/Radio'

    let radioGroup = 2
    export const code = `
<Radio name="RadioGroup" bind:group={radioGroup} label="Radio One" value="{1}"
       on:change={(e) => console.log('Radio One changed', e.target.value)}></Radio>
<Radio name="RadioGroup" bind:group="{radioGroup}" label="Radio Two" value="{2}"></Radio>
<Radio name="RadioGroup" bind:group="{radioGroup}" label="Radio Three" value="{3}"></Radio>
    `
</script>

<Radio name="RadioGroup" bind:group={radioGroup} label="Radio One" value="{1}"
       on:change={(e) => console.log('Radio One changed', e.target.value)}></Radio>
<Radio name="RadioGroup" bind:group="{radioGroup}" label="Radio Two" value="{2}"></Radio>
<Radio name="RadioGroup" bind:group="{radioGroup}" label="Radio Three" value="{3}"></Radio>