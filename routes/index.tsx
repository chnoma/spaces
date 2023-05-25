import { Head } from "$fresh/runtime.ts";
import { HandlerContext, PageProps } from "$fresh/server.ts";
import Post from "../components/Post.tsx";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <body class="flex ml-64 bg-gray-600">
        <div class="flex w-full flex-col overflow-auto">
        <Post username="chnoma" body="Hello!" title="Title"/>
        </div>
      </body>
    </>
  );
}
