import { signOut } from "next-auth/react";
import React from "react";

export default function App() {

  return (
    <div>
      <h3>Authenticated</h3>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}
