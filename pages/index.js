import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import SearchInput from "../components/search-input";
import Pagination from "../components/pagination";

const API_KEY = process.env.NEXT_PUBLIC_PIXABAY_API_KEY;
const ITEMS_PER_PAGE = 20;

export default function Home() {
  const [items, setItems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState({
    key: API_KEY,
    q: "",
    page: 1,
  });

  useEffect(() => {
    const getImages = async () => {
      const qs = new URLSearchParams(query);
      const response = await fetch(`https://pixabay.com/api/?${qs}`);
      const { totalHits, hits } = await response.json();
      setTotalPages(totalHits ? Math.ceil(totalHits / ITEMS_PER_PAGE) : 1);
      setItems(() => hits);
    };
    getImages();
  }, [query]);

  const updateSearchText = (value) => {
    setQuery((query) => ({ ...query, q: value, page: 1 }));
  };

  const updatePage = (page) => {
    setQuery((query) => ({ ...query, page }));
  };

  return (
    <div className="w-screen h-screen bg-slate-500 flex items-center justify-center">
      <Head>
        <title>Pixabay Search Engine</title>
        <meta name="description" content="A simple pixabay UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen h-screen">
        <div className="w-full bg-grey-500 flex item">
          <SearchInput onValidate={updateSearchText} />
        </div>
        <div className="w-full  ">
          <div className="flex flex-wrap justify-around">
            {items.length === 0 ? (
              <p className="text-white">No result</p>
            ) : (
              items.map((item, id) => (
                <div key={id} className="m-3">
                  <Image
                    src={item.previewURL}
                    width={item.previewWidth}
                    height={item.previewHeight}
                    alt={item.tags}
                  />
                </div>
              ))
            )}
          </div>
        </div>
        <div className="w-full p-10 fixed bottom-0 left-0">
          <Pagination
            currentPage={query.page}
            totalPages={totalPages}
            onChangePage={updatePage}
          />
        </div>
      </main>
    </div>
  );
}
