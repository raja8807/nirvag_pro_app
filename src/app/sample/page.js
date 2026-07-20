"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";

export default function SamplePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from our new Next.js API route
    fetch("/api/sample", {
      method: "POST",
      body: JSON.stringify({
        name: "Raja",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch API:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Sample Page</h1>
        <p className={styles.description}>
          This page demonstrates fetching data from the <code>/api/sample</code>{" "}
          route using a Client Component.
        </p>

        <div className={styles.dataBox}>
          {loading ? (
            <p className={styles.loading}>Loading data from API...</p>
          ) : (
            <>
              <h3>API Response:</h3>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
