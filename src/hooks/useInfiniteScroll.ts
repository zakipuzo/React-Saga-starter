import { useState, useEffect } from "react";

const useInfiniteScroll = (id: string, callback: any) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", isScrolling);
    return () => window.removeEventListener("scroll", isScrolling);
  }, []);

  useEffect(() => {
    if (!isFetching) return;

    callback();
  }, [isFetching]);

  function isScrolling() {
    const myDiv: HTMLElement | null = document.getElementById(id) || null;
    console.log(
      window.innerHeight + window.scrollY,
      myDiv && myDiv.scrollHeight
    );

    if (
      (myDiv && window.innerHeight + window.scrollY <= myDiv.scrollHeight) ||
      isFetching
    ) {
      setIsFetching(false);

      return;
    } else setIsFetching(true);
  }
  return [isFetching, setIsFetching] as const;
};

export default useInfiniteScroll;