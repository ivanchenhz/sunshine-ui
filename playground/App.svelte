<script>
    import Example from './components/Example.svelte'

    import Avatar from '../src/components/Avatar/index.svelte'
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
                    src="https://avatar-prod-us-east-2.webexcontent.com/Avtr~V1~1eb65fdf-9643-417f-9974-ad72cae0e10f/V1~24962166-92a0-4a72-9175-1fd86ada4377~802c1f4742dd466f8ad389824ce32098~1600"></Avatar>
            <Avatar
                    src="https://avatar-prod-us-east-2.webexcontent.com/Avtr~V1~1eb65fdf-9643-417f-9974-ad72cae0e10f/V1~24962166-92a0-4a72-9175-1fd86ada4377~802c1f4742dd466f8ad389824ce32098~1600"
                    size="64">
            </Avatar>
            <Avatar>
                I
            </Avatar>
            <Avatar size="64">
                I
            </Avatar>

            <div slot="code">
                {`
   <Avatar src="https://avatar"></Avatar>
   <Avatar src="https://avatar" size="64"></Avatar>

   <Avatar>I</Avatar>
   <Avatar size="64">I</Avatar>
`}
            </div>
        </Example>
</main>
