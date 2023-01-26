import React from "react";
import { useRouter } from "next/router";

export default function BrowseDetail() {
  const router = useRouter();
  const browseId = router.query.browseid;
  console.log(browseId);
  return (
    <div>
      <h1>deets {browseId}</h1>
    </div>
  );
}
