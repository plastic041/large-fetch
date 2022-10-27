import { use } from "react";

export async function fetch1() {
  const res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Seoul", {
    cache: "force-cache",
  });
  const json = await res.json();
  console.log(json.datetime, "worldtimeapi");

  return json.datetime.split(".")[0];
}

export function Fetch1() {
  const data = use(fetch1());
  return (
    <>
      <h2>Static Data</h2>
      <b>current time from worldtimeapi.org: </b>
      <div>
        <code>{data}</code>
      </div>
    </>
  );
}
