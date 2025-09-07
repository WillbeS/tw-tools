"use client";
import { useEffect, useState } from "react";

interface Village {
  name: string;
  points: number;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL_NEW;

export default function TestApiPage() {
  const [data, setData] = useState<null | Village>(null);
  const [loading, setLoading] = useState(true);

  console.log(`${API_BASE_URL}/api/test-data`);

  useEffect(() => {
    // Change this URL if your Flask API runs elsewhere
    fetch(`${API_BASE_URL}/api/test-data`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="text-center py-6 text-slate-50">
      <h1>Tribal Wars Test Data</h1>
      {data ? (
        <div>
          <p>
            <strong>Name:</strong> {data.name}
          </p>
          <p>
            <strong>Points:</strong> {data.points}
          </p>
        </div>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
}
