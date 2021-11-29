import DevToArticleMeta from "interfaces/dev-to-article-meta";
import { useEffect, useState } from "react";
import { DevToService } from "utils/dev-to-service";

/**
* Fetch all of my published dev.to articles
* @param onError a callback which is invoked if the request fails
*/
export default function useDevToArticles(onError?: () => void) {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState<Array<DevToArticleMeta>>([]);

  useEffect(() => {
    (async () => {
      try {
        setArticles(await DevToService.fetchArticles());
      } catch (e) {
        onError?.();
      }

      setLoading(false);
    })();
  }, [onError]);

  // return the array of articles, and the loading indicator
  return { articles, loading };
}