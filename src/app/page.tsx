"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from './homepage.module.css';

const getJsonApiDummy = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    { cache: 'no-store'}
    );
  const data = await res.json();
  console.log(data.slice(0,10));
  return data.slice(0,10);
};

export default function HomePage(){
  const [data, setData] = useState([]);

  useEffect(() => {
    getJsonApiDummy().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div>
      <h1>Homepage</h1>
      <div className={styles.grid}>
        {data.map((post: any) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}

function Post({post}: any) {
  const {userId, id, title, body} = post || {};

  return (
    <Link href={`/components/${id}`}>
      <div className={styles.post}>
        <h2>{id}</h2>
        <h5>{title}</h5>
      </div>
    </Link>
  );

  }
