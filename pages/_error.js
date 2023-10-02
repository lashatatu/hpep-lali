import Router from "next/router";
import {useEffect, useState} from 'react'
import Link from "next/link";

const Error = ({ statusCode }) => {
  const [counter, setCounter] = useState(5);
  useEffect(() => {
    if (statusCode === 404) {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
      setTimeout(() => {
        Router.replace("/");
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [statusCode,counter]);

  return statusCode ? (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-9xl">მოხდა შეცდომა {statusCode} სერვერზე</h1>
      <h2 className="text-6xl">მთავარ გვერდზე დაბრუნება მოხდება {counter} წამში</h2>
      <Link href={"/"}>მთავარ გვერდზე დაბრუნება</Link>
    </div>
  ) : (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <p className="text-center">მოხდა შეცდომა</p>
      <h2 className="text-6xl">მთავარ გვერდზე დაბრუნება მოხდება {counter} წამში</h2>
      <Link href={"/"}>მთავარ გვერდზე დაბრუნება</Link>
    </div>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
