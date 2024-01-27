import { Card } from "../../components";
import Layout from "../../layouts";
import Head from "next/head";
import axios from "axios"
import Link from "next/link";
import React from "react";

interface Post {
  name: string;
  url: string;
}

interface Props {
  posts: Post[]
}

const PostIndex = ({ posts }: Props) => {
  console.log(posts)

  return (
    <Layout>
      <Head>
        <title>{'Ini adalah halaman index'}</title>
      </Head>
      <Card>
        <h1>Daftar Post</h1>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Height</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            {posts?.map((post) => (
              <tr key={post.name}>
                
                <td>{post.name}</td>
                <td>{post.url}</td>
                
                <td>                
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </Layout>
  );
}

export const getServerSideProps = ( async () => {
  const fetch = await axios.get('https://pokeapi.co/api/v2/pokemon')
  const data: Post = fetch.data

  return {
    props: {
      posts: data
    }
  }
})

export default PostIndex