import { use } from "react";

export async function fetch2() {
  const res = await fetch(
    "https://timeapi.io/api/Time/current/zone?timeZone=Asia/Seoul",
    {
      next: { revalidate: 3 },
    }
  );
  const json = await res.json();
  console.log(json.dateTime, "timeapi");

  return json.dateTime.split(".")[0];
}

export function Fetch2() {
  const data = use(fetch2());
  return (
    <>
      <b>current time from timeapi.io: </b>
      <div>
        <code>{data}</code>
      </div>
    </>
  );
}
