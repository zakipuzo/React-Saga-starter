import { useState, useEffect } from "react";

const useInfiniteScroll = (id: string, callback: any, fetchEnd: boolean) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", isScrolling);
    return () => window.removeEventListener("scroll", isScrolling);
  }, []);

  useEffect(() => {
    if (!isFetching || fetchEnd) {
      setIsFetching(false);
      return;
    }
    callback();
  }, [isFetching]);

  function isScrolling() {
    const myDiv: HTMLElement | null = document.getElementById(id) || null;

    if (
      (myDiv && window.innerHeight + window.scrollY <= myDiv.scrollHeight) ||
      isFetching
    ) {
      setIsFetching(false);
    } else !fetchEnd && setIsFetching(true);
  }
  return [isFetching, setIsFetching] as const;
};

export default useInfiniteScroll;
