import { useEffect, useState } from "react";

export default function useLatestCommit(owner, repo) {
  const [commit, setCommit] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!owner || !repo) return;
    setLoading(true);
    fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`) 
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setCommit({
            sha: data[0].sha,
            message: data[0].commit.message,
            author: data[0].commit.author.name,
            url: data[0].html_url,
            date: data[0].commit.author.date,
          });
        } else {
          setCommit(null);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [owner, repo]);

  return { commit, loading };
}