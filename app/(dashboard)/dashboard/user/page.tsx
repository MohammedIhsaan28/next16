import Link from "next/link";

export default function Users() {
  return (
    <div>
      Users
      <Link href="/dashboard/user/1">User 1</Link>
      <Link href="/dashboard/user/2">User 2</Link>
      <Link href="/dashboard/user/3">User 3</Link>
      <Link href="/dashboard/user/4">User 4</Link>
    </div>
  );
}
