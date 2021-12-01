import DevToArticle from "interfaces/dev-to-article";
import { useState, useEffect } from "react";
import { DevToService } from "utils/dev-to-service";

/**
* Get a specific article given the article's slug.
* @param slug the slug of the article to retrieve.
* @param onError a callback which is invoked if the request fails
*/
export default function useDevToArticle(slug: string, onError?: () => void) {
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState<DevToArticle>();

  useEffect(() => {
    // this bit may not be necessary for you; I needed
    // it because I'm using Next.js server side rendering
    // so slug is `undefined` on the initial render
    // since I'm getting it from a route parameter
    // e.g. /blog/:slug
    if (slug == null || slug.length === 0) {
      return;
    }

    (async () => {
      try {
        setArticle(await DevToService.getArticle(slug));
      } catch (e) {
        onError?.();
      }

      setLoading(false);
    })();
  }, [onError, slug]);
  // return the article, and the loading indicator
  return { article, loading };
}