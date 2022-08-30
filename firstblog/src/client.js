import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "jyfjw9h1",
    dataset: "production",
    useCdn: true,
});

