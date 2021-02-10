<script>
    import Select from '../../../src/components/Select'

    const options = [{
        label: 'Svelte',
        value: 1,
    }, {
        label: 'React',
        value: 2,
    }, {
        label: 'Vue.js',
        value: 3,
    }, {
        label: 'Alpine.js',
        value: 4,
    }]
    let selectedValue1 = 1
    let selectedValue2 = 2

    export const code = `
<Select {options} bind:value={selectedValue1}></Select>
<Select {options} bind:value={selectedValue2} readonly="{false}"></Select>
    `
</script>

<Select {options} bind:value={selectedValue1}></Select>
<Select {options} bind:value={selectedValue2} readonly="{false}"></Select>