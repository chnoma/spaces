function assert_env_exists(env_name: string) {
    if(!Deno.env.has(env_name)) {
        console.error(`${env_name} environment variable not set`)
        Deno.exit(-1);
    }
}

assert_env_exists("SPACES_ARANGO_ENDPOINT")
export const ARANGO_ENDPOINT = Deno.env.get("SPACES_ARANGO_ENDPOINT");