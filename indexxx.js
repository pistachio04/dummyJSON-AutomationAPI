import { check } from "k6";
import http from "k6/http";

export default function () {
let accessToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9FWTJSVGM1UlVOR05qSXhSRUV5TURJNFFUWXdNekZETWtReU1EQXdSVUV4UVVRM05EazFNQSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDY0MjViYjQ4OGE0YzM5ZTAzNTQwNDRmNiJ9LCJuaWNrbmFtZSI6InNpZ2lkLnByYXNldHlvIiwibmFtZSI6InNpZ2lkLnByYXNldHlvQGV2ZXJtb3MuY29tIiwicGljdHVyZSI6Imh0dHBzOi8vcy5ncmF2YXRhci5jb20vYXZhdGFyL2IxMTA4ZjA4YTU0YTBhZDg1MjNkZDkyMTJkNWU1M2UzP3M9NDgwJnI9cGcmZD1odHRwcyUzQSUyRiUyRmNkbi5hdXRoMC5jb20lMkZhdmF0YXJzJTJGc2kucG5nIiwidXBkYXRlZF9hdCI6IjIwMjMtMDMtMzBUMTY6Mzk6MzcuMTEzWiIsImlzcyI6Imh0dHBzOi8vZ3JhcGhxbC10dXRvcmlhbHMuYXV0aDAuY29tLyIsImF1ZCI6IlAzOHFuRm8xbEZBUUpyemt1bi0td0V6cWxqVk5HY1dXIiwiaWF0IjoxNjgwMjc4NzQyLCJleHAiOjE2ODAzMTQ3NDIsInN1YiI6ImF1dGgwfDY0MjViYjQ4OGE0YzM5ZTAzNTQwNDRmNiIsImF0X2hhc2giOiJuTTYybG9VdlhTQVNiLTVrVzc4LVlRIiwic2lkIjoiZHd6eldPekhmRkNiQTNGWEJqc2lyMnFidHNQaVVyMDYiLCJub25jZSI6IjlkWTR1RTlwVkF1dmNZQW1NM09sM2d1c0d2a2RSeGo3In0.G2xEMRITA02wfdavtaZHxdGAedsmmru4ehs5Ey-VPLTwvdktX-NVT7mN-gE1kE2VOlUfM6_SWaT1sDuFAIS5Hlvn4uG8Vh06vXCOsk4j0u6pwRpG-3X_ZunYeJ69VNdZtzjQJPUGdzXEx0PKFCRzP7KCe-mzYEp_6stUTGt_iGlmMcQTeHzUxPPz92jTzYtui96AHLJd9rQ22GivEUws-HeomuPBublxwDsAO9m8-zA-H8GbtJpJ5ia5kht-9qbEDKOQ0Si0N4CIdsKFqC8QxnzCJKcTjYn_eXvqfioJPmPw4a1Gl1GDXpyjovFakoWWkWRBGe216uBSV8moVW7wEg';
  
    const query = `
  {
    users {
      name
    }
  }
  `;
  const variables = {};

  const response = http.post(
    "https://hasura.io/learn/graphql",
    JSON.stringify({ query, variables }),
    {
      headers: { "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
     },
    }
  );

  check(response, {
      "is status 200": (r) => r.status === 200,
    //   "response body": (r) => {
    //       const result = (r.body);
    //       console.log(result);
        //   return result.data && result.data.name === "tui.glen";
    // },
  });
  console.log(response.json().data);
}