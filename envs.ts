function assert_env_exists(env_name: string) {
    if(!Deno.env.has(env_name)) {
        throw new Error(`${env_name} environment variable not set`);
    }
}

assert_env_exists("SPACES_ARANGO_ENDPOINT")
export const ARANGO_ENDPOINT = Deno.env.get("SPACES_ARANGO_ENDPOINT");